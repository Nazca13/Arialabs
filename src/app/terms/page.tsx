import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
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
            <h1 className={styles.title}>TERMS OF SERVICE</h1>
            <p className={styles.subtitle}>
              AGREEMENT, SCOPE OF WORK, PAYMENT & INTELLECTUAL PROPERTY
            </p>
          </div>

          <div className={styles.list}>
            {/* 1 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Acceptance of Terms</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Dengan mengakses website ini atau menggunakan layanan yang disediakan oleh Aria Labs, Anda menyatakan setuju untuk terikat oleh Syarat &amp; Ketentuan Kerjasama ini. Ketentuan ini berlaku bagi seluruh klien, mitra, dan pengguna yang memanfaatkan jasa kami.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Scope of Services</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Aria Labs menyediakan jasa profesional di bidang Web Development, Brand Identity, UI/UX Design, Graphic Design, dan Social Media Management. Detail spesifikasi pengerjaan, linimasa, serta deliverable proyek akan dituangkan dalam proposal kerja atau nota kesepakatan tertulis sebelum proyek dimulai.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Client Responsibilities</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Klien bertanggung jawab untuk menyediakan materi yang dibutuhkan (teks, foto produk, dokumen pendukung) secara tepat waktu sesuai linimasa kesepakatan. Ketenangan proses pengerjaan sangat bergantung pada komunikasi yang responsif antara tim Aria Labs dan pihak klien.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Payment Terms</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Pengerjaan proyek memerlukan uang muka (Down Payment/DP) sebesar 50% sebelum pengerjaan dimulai, kecuali ditentukan lain dalam perjanjian. Pelunasan sisa pembayaran dilakukan sebelum penyerahan berkas master final atau migrasi website ke domain produksi utama klien.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Intellectual Property</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Hak kekayaan intelektual dan hak cipta atas hasil karya final (seperti kode program website, aset desain logo, brand guideline) akan diserahkan 100% secara penuh kepada klien setelah pembayaran seluruh tagihan dinyatakan lunas.
                </p>
                <p>
                  Aria Labs berhak mencantumkan hasil karya tersebut ke dalam portofolio dan studi kasus kami, kecuali ada perjanjian kerahasiaan (NDA) yang disepakati secara tertulis sebelumnya.
                </p>
              </div>
            </div>

            {/* 6 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Revisions & Scope Changes</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Setiap paket pengerjaan mencakup kuota revisi tertentu sesuai kesepakatan. Perubahan besar di luar ruang lingkup awal (change of scope) akan dikenakan biaya tambahan dan penyesuaian jadwal penyerahan proyek.
                </p>
              </div>
            </div>

            {/* 7 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Limitation of Liability</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Aria Labs tidak bertanggung jawab atas kerugian tidak langsung yang timbul akibat keterlambatan pihak ketiga (seperti gangguan penyedia hosting independen, domain registrar, atau perubahan kebijakan platform media sosial eksternal).
                </p>
              </div>
            </div>

            {/* 8 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Governing Law</h2>
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
      <Footer />
    </>
  )
}
