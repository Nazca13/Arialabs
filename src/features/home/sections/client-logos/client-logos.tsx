'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useDragMarquee } from '@/hooks/use-drag-marquee'
import styles from './client-logos.module.css'

const CLIENTS = [
  { name: 'Aquanime',  src: '/assets/images/brands/official-partners/aquanime.png' },
  { name: 'PHASE',     src: '/assets/images/brands/phase.png' },
  { name: 'Bumi Eka',  src: '/assets/images/brands/bumi-eka.png' },
  { name: 'Elmax',     src: '/assets/images/brands/elmax.png' },
]

export function ClientLogos() {
  const doubled = [...CLIENTS, ...CLIENTS]
  const { trackRef, handlers } = useDragMarquee('[data-marquee-rail]')
  const [grabbing, setGrabbing] = useState(false)

  return (
    <section className={styles.section}>
      <hr className="dashed-divider" />

      <div className={`container ${styles.band}`}>
        <div className={styles.tagline}>
          <Image
            src="/assets/icons/utility/spark.svg"
            alt=""
            width={30}
            height={30}
            aria-hidden="true"
            className={styles.spark}
          />
          <span>
            Exploring ideas, precise execution.
            <br />
            We&apos;re here to help your business grow.
          </span>
        </div>

        <div
          ref={trackRef}
          className={styles.marquee}
          style={{ cursor: grabbing ? 'grabbing' : 'grab', touchAction: 'pan-y' }}
          onPointerDown={(e) => { setGrabbing(true); handlers.onPointerDown(e) }}
          onPointerMove={handlers.onPointerMove}
          onPointerUp={(e) => { setGrabbing(false); handlers.onPointerUp(e) }}
          onPointerLeave={(e) => { setGrabbing(false); handlers.onPointerLeave(e) }}
        >
          <div className={styles.rail} data-marquee-rail>
            {doubled.map((c, i) => (
              <div key={i} className={styles.logoItem}>
                <Image
                  src={c.src}
                  alt={c.name}
                  width={136}
                  height={50}
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="dashed-divider" />
    </section>
  )
}
