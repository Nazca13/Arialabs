import Link from 'next/link'
import styles from './button.module.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  arrow?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  arrow = false,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
          <path
            d="M2 7.5H13M13 7.5L8.5 3M13 7.5L8.5 12"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  )

  if (href) {
    return <Link href={href} className={cls} onClick={onClick}>{content}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  )
}
