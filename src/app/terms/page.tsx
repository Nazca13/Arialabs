import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { CtaSection } from '@/features/home/sections/cta/cta-section'
import styles from '../privacy/privacy.module.css'

export const metadata: Metadata = {
  title: 'Terms of Service | Aria Labs',
  description: 'Syarat & Ketentuan Layanan Aria Labs — panduan kerjasama, hak cipta, dan komitmen pengerjaan proyek digital Anda.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <Link href="/" className={styles.backLink}>
            ← Kembali ke Beranda
          </Link>

          <div className={styles.header}>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.subtitle}>
              Panduan Kerjasama, Pembayaran & Hak Kekayaan Intelektual
            </p>
          </div>

          <div className={styles.list}>
            {/* 1 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Penerimaan Ketentuan</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Dengan mengakses website ini atau menggunakan layanan Aria Labs, Anda menyatakan setuju untuk terikat oleh Syarat &amp; Ketentuan ini. Ketentuan ini berlaku bagi seluruh klien, mitra, dan pengguna yang memanfaatkan jasa kami.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Lingkup Layanan</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Aria Labs menyediakan jasa profesional di bidang <strong>Web Development</strong>, <strong>Brand Identity</strong>, <strong>UI/UX Design</strong>, <strong>Graphic Design</strong>, dan <strong>Social Media Management</strong>. Detail spesifikasi pengerjaan, linimasa, dan deliverable proyek akan dituangkan dalam proposal kerja atau nota kesepakatan tertulis sebelum proyek dimulai.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Tanggung Jawab Klien</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Klien bertanggung jawab untuk menyediakan materi yang dibutuhkan (teks, foto produk, dokumen pendukung) secara tepat waktu sesuai linimasa kesepakatan. Kelancaran proses pengerjaan bergantung pada komunikasi yang responsif antara tim Aria Labs dan pihak klien.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Ketentuan Pembayaran</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Pengerjaan proyek memerlukan uang muka (Down Payment) sebesar <strong>50%</strong> sebelum pengerjaan dimulai, kecuali ditentukan lain dalam perjanjian. Pelunasan sisa pembayaran dilakukan sebelum penyerahan berkas master final atau migrasi website ke domain produksi klien.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Hak Kekayaan Intelektual</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Hak cipta atas hasil karya final (kode program website, aset desain logo, brand guideline, dan seluruh deliverable) akan diserahkan <strong>100% secara penuh</strong> kepada klien setelah pembayaran dinyatakan lunas.
                </p>
                <p>
                  Aria Labs berhak mencantumkan hasil karya tersebut ke dalam portofolio dan studi kasus kami, kecuali ada perjanjian kerahasiaan (NDA) yang disepakati secara tertulis.
                </p>
              </div>
            </div>

            {/* 6 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Revisi & Perubahan Lingkup</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Setiap paket pengerjaan mencakup kuota revisi tertentu sesuai kesepakatan awal. Perubahan besar di luar ruang lingkup yang disepakati (change of scope) akan dikenakan biaya tambahan dan penyesuaian jadwal penyerahan.
                </p>
              </div>
            </div>

            {/* 7 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Batasan Tanggung Jawab</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Aria Labs tidak bertanggung jawab atas kerugian tidak langsung yang timbul akibat faktor di luar kendali kami, termasuk gangguan penyedia hosting, domain registrar, atau perubahan kebijakan platform media sosial pihak ketiga.
                </p>
              </div>
            </div>

            {/* 8 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Hukum yang Berlaku</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Syarat &amp; Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia. Segala perselisihan akan diselesaikan terlebih dahulu secara musyawarah untuk mufakat.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <CtaSection />
      <Footer />
    </>
  )
}
