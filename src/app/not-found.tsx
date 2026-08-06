import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { Button } from '@/components/ui/button/button'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={`container ${styles.container}`}>
          <div className={styles.content}>
            <div className={styles.character}>
              <Image
                src="/assets/images/characters/aria-cry.webp"
                alt="404 - Page Not Found"
                width={400}
                height={400}
                priority
                className={styles.characterImg}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.text}>
              <h1 className={styles.title}>
                OOPS! <span className={styles.blue}>PAGE NOT FOUND</span>
              </h1>
              <p className={styles.subtitle}>
                Sepertinya halaman yang kamu cari tidak ditemukan atau telah dipindahkan.
                Jangan khawatir, kamu bisa kembali ke beranda untuk melanjutkan penjelajahanmu!
              </p>
              <div className={styles.buttons}>
                <Button href="/" arrow>Kembali ke Beranda</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
