'use client'

import { useRef, useCallback } from 'react'

const ANIM_DURATION_MAP: Record<string, number> = {
  marqueeScroll: 24,
  railScroll: 28,
}

function getAnimDuration(el: HTMLElement): number {
  const name = window.getComputedStyle(el).animationName
  return ANIM_DURATION_MAP[name] ?? 28
}

/**
 * Returns pointer-event handlers that make a CSS-keyframe marquee draggable
 * (mouse + touch), resuming auto-scroll at the correct offset after release.
 */
export function useDragMarquee(railSelector = '[data-rail]') {
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const startX = useRef(0)
  const startOffset = useRef(0)
  const dragDist = useRef(0)

  const getRail = useCallback(() => {
    return trackRef.current?.querySelector<HTMLElement>(railSelector) ?? null
  }, [railSelector])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const rail = getRail()
    if (!rail) return
    e.currentTarget.setPointerCapture(e.pointerId)
    dragging.current = true
    startX.current = e.clientX
    dragDist.current = 0

    // Read current animated position then freeze it
    const matrix = new DOMMatrix(window.getComputedStyle(rail).transform)
    startOffset.current = matrix.m41
    rail.style.animationPlayState = 'paused'
    rail.style.transform = `translateX(${matrix.m41}px)`
  }, [getRail])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return
    const rail = getRail()
    if (!rail) return
    const dx = e.clientX - startX.current
    dragDist.current = Math.abs(dx)
    const halfWidth = rail.scrollWidth / 2
    let newX = startOffset.current + dx
    if (halfWidth > 0) {
      while (newX < -halfWidth) newX += halfWidth
      while (newX > 0) newX -= halfWidth
    }
    rail.style.transform = `translateX(${newX}px)`
  }, [getRail])

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return
    dragging.current = false
    const rail = getRail()
    if (!rail) return

    // Read final position
    const matrix = new DOMMatrix(window.getComputedStyle(rail).transform)
    const finalX = matrix.m41
    const halfWidth = rail.scrollWidth / 2
    const duration = getAnimDuration(rail)

    // Resume animation from current position via negative delay
    const fraction = halfWidth > 0 ? Math.abs(finalX) / halfWidth : 0
    const delay = -(fraction * duration)

    rail.style.transform = ''
    rail.style.animationDelay = `${delay}s`
    rail.style.animationPlayState = 'running'
  }, [getRail])

  return {
    trackRef,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerLeave: onPointerUp,
    } as Record<string, (e: React.PointerEvent) => void>,
    get dragDistance() { return dragDist.current },
  }
}
