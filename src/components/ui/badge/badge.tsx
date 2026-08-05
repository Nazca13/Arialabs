import styles from './badge.module.css'

interface BadgeProps {
  children: React.ReactNode
  dot?: boolean
}

export function Badge({ children, dot = true }: BadgeProps) {
  return (
    <span className={styles.badge}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  )
}
