import styles from './page-header.module.css'

interface PageHeaderProps {
  title: React.ReactNode
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  )
}
