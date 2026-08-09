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
              Aria Labs (&quot;Kami&quot;) berkomitmen secara penuh untuk melindungi privasi data pribadi Anda. Kebijakan Privasi ini disusun sebagai bentuk transparansi dan kepatuhan terhadap standar perlindungan data terkait cara kami mengumpulkan, menyimpan, dan memproses data Anda saat mengunjungi situs arialabs.id atau menggunakan layanan kami.
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
                  Kami hanya mengumpulkan informasi yang esensial untuk keperluan bisnis secara legal. Data ini diberikan secara sukarela saat Anda berinteraksi dengan situs kami (melalui form kontak):
                </p>
                <ul>
                  <li>Informasi Identitas: Nama lengkap perusahaan atau individu.</li>
                  <li>Informasi Kontak: Alamat email bisnis/pribadi dan nomor WhatsApp aktif.</li>
                  <li>Informasi Proyek: Rincian spesifikasi, brief desain, dan anggaran proyek.</li>
                </ul>
              </div>
            </div>

            {/* 2 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>2. Third-Party Analytics &amp; Infrastructure (Data Analitik &amp; Infrastruktur)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Untuk memastikan performa, keamanan, dan fungsionalitas antarmuka situs, kami menggunakan alat pelacakan anonim standar industri:
                </p>
                <ul>
                  <li>
                    <strong>Analitik Perilaku:</strong> Kami menggunakan Microsoft Clarity untuk menganalisis interaksi pengguna (seperti heatmap dan klik). Data ini bersifat agregat, dianonimkan, dan tidak menautkan perilaku penelusuran dengan identitas pribadi Anda.
                  </li>
                  <li>
                    <strong>Infrastruktur Cloud:</strong> Situs web kami di-host menggunakan infrastruktur <em>cloud server</em> berstandar keamanan tinggi yang secara otomatis mencatat log teknis dasar (IP Address dinamis, tipe <em>browser</em>, dan lokasi regional) untuk pencegahan serangan DDoS dan <em>uptime monitoring</em>.
                  </li>
                </ul>
              </div>
            </div>

            {/* 3 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>3. Cookie Policy (Kebijakan Cookie)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Situs web kami menggunakan Cookies (file teks kecil yang disimpan di peramban Anda) dan Local Storage murni untuk mengaktifkan fungsi inti situs, mengingat preferensi sistem, dan mendukung kelancaran navigasi. Klien memiliki kebebasan untuk menonaktifkan Cookies melalui pengaturan peramban masing-masing.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>4. Purpose of Data Usage (Tujuan Penggunaan Data)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Data pribadi yang telah dihimpun tidak akan pernah disalahgunakan dan secara eksklusif digunakan untuk:
                </p>
                <ul>
                  <li>Menyusun dokumen penawaran (proposal/pitch deck), <em>invoice</em>, dan keperluan administratif.</li>
                  <li>Memfasilitasi komunikasi resmi terkait update pengerjaan proyek desain dan pengembangan.</li>
                  <li>Memenuhi kewajiban perpajakan dan hukum yang berlaku di Republik Indonesia.</li>
                </ul>
              </div>
            </div>

            {/* 5 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>5. Strict Anti-Selling Clause (Klausa Anti-Jual Data)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  <span className={styles.redAlert}>Pernyataan Tegas:</span> Aria Labs tidak akan pernah menjual, menyewakan, memperdagangkan, atau membagikan basis data Klien maupun prospek Klien kepada pihak ketiga (seperti agen pemasaran atau pengiklan eksternal) dengan alasan apa pun. Akses data dibatasi hanya untuk internal tim Studio yang terikat perjanjian kerahasiaan.
                </p>
              </div>
            </div>

            {/* 6 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>6. Security Disclaimer (Penyangkalan Keamanan)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Kami menerapkan protokol keamanan yang wajar (seperti sertifikat SSL/Enkripsi) untuk melindungi data saat transit. Namun, Klien mengakui bahwa tidak ada metode transmisi di internet atau penyimpanan elektronik yang 100% aman dan tahan retas. Aria Labs tidak bertanggung jawab atas kebocoran data yang diakibatkan oleh kerentanan infrastruktur global atau kelalaian Klien sendiri.
                </p>
              </div>
            </div>

            {/* 7 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>7. Data Subject Rights (Hak Pemilik Data)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Anda memegang kendali atas informasi pribadi Anda. Anda berhak untuk:
                </p>
                <ul>
                  <li>Meminta perbaikan (revisi) atas data yang salah.</li>
                  <li>Mengajukan permintaan penghapusan (Right to Erasure) informasi kontak Anda dari basis data prospek pemasaran kami.</li>
                </ul>
              </div>
            </div>

            {/* 8 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>8. Changes &amp; Contact (Pembaruan &amp; Kontak)</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Aria Labs berhak memodifikasi Kebijakan Privasi dan Terms of Service ini sewaktu-waktu tanpa pemberitahuan personal sebelumnya. Pembaruan akan berlaku efektif secara langsung begitu diterbitkan pada halaman ini.
                </p>
                <p>
                  Apabila ada pertanyaan terkait aspek legal atau perlakuan data Anda, silakan hubungi tim kami secara resmi melalui:
                </p>
                <p>
                  Email Inquiries: <a href="mailto:hello@arialabs.id" style={{ color: '#2FA8FA', fontWeight: 'bold' }}>hello@arialabs.id</a>
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
