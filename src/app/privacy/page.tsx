import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { CtaSection } from '@/features/home/sections/cta/cta-section'
import styles from './privacy.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy | Aria Labs',
  description: 'Kebijakan Privasi (Privacy Policy) pengelolaan dan perlindungan data pengguna Aria Labs - Creative Digital Studio.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <Link href="/" className={styles.backLink}>
            ← Kembali ke Beranda
          </Link>

          <div className={styles.header}>
            <h1 className={styles.title}>PRIVACY POLICY</h1>
          </div>

          <div className={styles.introText}>
            <p>
              Aria Labs (&quot;Kami&quot;) sangat menghargai privasi dan keamanan data Anda. Kebijakan Privasi (Privacy Policy) ini menjelaskan secara transparan bagaimana kami mengumpulkan, menggunakan, memproses, dan melindungi informasi pribadi yang Anda berikan ketika Anda mengakses situs web kami (arialabs.id atau subdomain terkait) dan menggunakan layanan kami.
            </p>
          </div>

          <div className={styles.list}>
            {/* 1 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>1. Collection of Personal Data (Pengumpulan Data Pribadi)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Kami mengumpulkan data pribadi Anda secara sadar dan aktif ketika Anda berinteraksi dengan kami, terutama saat Anda mengisi formulir kontak, menekan tombol &quot;Book to Call&quot;, atau &quot;Reach Out&quot; di situs web kami. Data yang kami kumpulkan meliputi:
                </p>
                <ul>
                  <li>Nama lengkap (individu atau perwakilan perusahaan).</li>
                  <li>Alamat email profesional atau pribadi.</li>
                  <li>Nomor telepon atau WhatsApp yang dapat dihubungi.</li>
                  <li>Detail informasi terkait perusahaan dan rincian kebutuhan proyek (brief).</li>
                </ul>
              </div>
            </div>

            {/* 2 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>2. Third-Party Analytics &amp; Technical Data (Perekaman Data Analitik Pihak Ketiga)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Selain data yang Anda berikan secara langsung, sistem kami secara otomatis mengumpulkan metrik teknis saat Anda menjelajahi situs web kami guna memastikan fungsionalitas dan meningkatkan pengalaman pengguna (UI/UX). Situs kami menggunakan teknologi berikut:
                </p>
                <ul>
                  <li>
                    <strong>Microsoft Clarity:</strong> Kami menggunakan layanan analitik ini untuk memahami bagaimana pengunjung berinteraksi dengan antarmuka web kami (melalui perekaman anonim seperti metrik klik, guliran/scroll layar, dan pemetaan panas/heatmap). Data ini bersifat agregat dan tidak menautkan perilaku penelusuran dengan identitas asli Anda.
                  </li>
                  <li>
                    <strong>Vercel Infrastructure:</strong> Situs kami di-host pada infrastruktur Vercel yang dapat mencatat secara otomatis data server teknis dasar (seperti alamat IP sementara, tipe browser, dan waktu akses) murni untuk keperluan menjaga kelancaran operasional (uptime), keamanan jaringan dari peretasan, dan kecepatan akses halaman.
                  </li>
                </ul>
              </div>
            </div>

            {/* 3 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>3. Use of Information (Penggunaan Informasi)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Segala bentuk data yang telah kami kumpulkan akan kami gunakan secara eksklusif untuk tujuan operasional dan profesional berikut:
                </p>
                <ul>
                  <li>Merespons pertanyaan, menjadwalkan panggilan konsultasi, dan mengirimkan dokumen proposal layanan (pitching) atau penawaran harga.</li>
                  <li>Memfasilitasi komunikasi administratif dan teknis selama berlangsungnya siklus pengerjaan proyek.</li>
                  <li>Meningkatkan kualitas navigasi, desain antarmuka, dan relevansi konten situs web kami berdasarkan hasil analisis anonim dari penyedia layanan pihak ketiga (Microsoft Clarity).</li>
                </ul>
              </div>
            </div>

            {/* 4 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>4. Data Protection &amp; Anti-Selling Clause (Perlindungan &amp; Klausa Anti-Jual Data)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Aria Labs memegang teguh kerahasiaan informasi Anda. Kami menjamin dan menegaskan bahwa kami tidak akan pernah menjual, menyewakan, atau mendistribusikan data pribadi dan informasi kontak Anda kepada pihak ketiga mana pun untuk tujuan pemasaran (marketing) atau periklanan di luar ekosistem layanan Aria Labs. Data Anda hanya dapat diakses oleh anggota internal studio yang berkepentingan langsung dengan proyek Anda.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>5. Data Subject Rights (Hak Anda Sebagai Pemilik Data)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Sesuai dengan regulasi perlindungan data yang berlaku, Anda memiliki hak kendali penuh atas informasi pribadi yang telah Anda serahkan kepada kami. Anda berhak setiap saat untuk:
                </p>
                <ul>
                  <li>Meminta salinan data pribadi Anda yang tersimpan di basis data kami.</li>
                  <li>Meminta koreksi atau pembaruan apabila terdapat data yang tidak akurat.</li>
                  <li>Meminta penghapusan permanen (right to be forgotten) data kontak Anda dari sistem administratif kami (dengan pengecualian untuk dokumen penagihan/faktur yang harus kami simpan sesuai kewajiban hukum perpajakan).</li>
                </ul>
              </div>
            </div>

            {/* 6 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>6. Contact Us (Hubungi Kami)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Apabila Anda memiliki pertanyaan lebih lanjut, kekhawatiran terkait privasi data Anda, atau ingin melaksanakan hak Anda sebagaimana tercantum di atas, silakan hubungi tim kami melalui:
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:hello@arialabs.id" style={{ color: '#2FA8FA', textDecoration: 'underline' }}>hello@arialabs.id</a>
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
