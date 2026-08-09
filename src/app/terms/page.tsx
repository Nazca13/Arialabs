import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { CtaSection } from '@/features/home/sections/cta/cta-section'
import styles from '../privacy/privacy.module.css'

export const metadata: Metadata = {
  title: 'Terms of Service | Aria Labs',
  description: 'Syarat dan Ketentuan (Terms of Service) penggunaan layanan Aria Labs - Creative Digital Studio.',
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
          </div>

          <div className={styles.introText}>
            <p>
              Selamat datang di Aria Labs. Syarat dan Ketentuan (Terms of Service) ini adalah perjanjian mengikat secara hukum yang mengatur hubungan antara Anda (&quot;Klien&quot; atau &quot;Pengguna&quot;) dengan Aria Labs (&quot;Kami&quot; atau &quot;Studio&quot;). Dengan menggunakan layanan kami, Anda dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan ini tanpa pengecualian.
            </p>
          </div>

          <div className={styles.list}>
            {/* 1 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>1. Scope of Work (Ruang Lingkup Pekerjaan)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Layanan yang diberikan (Web Development, Brand Identity, UI/UX Design) dieksekusi secara eksklusif berdasarkan dokumen brief proyek atau Surat Perjanjian Kerjasama (SPK) yang disepakati secara tertulis.
                  </li>
                  <li>
                    Setiap permintaan fitur, halaman, atau konsep tambahan di luar ruang lingkup awal (Scope Creep) wajib didokumentasikan sebagai pekerjaan tambahan (Add-ons) dan tunduk pada penagihan biaya terpisah sesuai estimasi waktu pengerjaan.
                  </li>
                </ul>
              </div>
            </div>

            {/* 2 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>2. Revision Terms (Ketentuan Revisi)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Aria Labs mengalokasikan maksimal 3 (tiga) putaran revisi minor pada setiap fase proyek. Revisi minor meliputi penyesuaian tata letak (layout), warna, tipografi, dan perbaikan salinan (copywriting).
                  </li>
                  <li>
                    Revisi mayor (perubahan arah desain secara fundamental atau perombakan struktur sistem) tidak termasuk dalam revisi standar dan akan dikenakan biaya tambahan per jam (hourly rate) atau sesuai kesepakatan baru.
                  </li>
                </ul>
              </div>
            </div>

            {/* 3 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>3. Client Responsibilities &amp; Delays (Tanggung Jawab Klien &amp; Keterlambatan)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Klien wajib menyediakan seluruh materi yang dibutuhkan (seperti teks, profil perusahaan, pedoman merek, dan gambar spesifik) tepat waktu sesuai jadwal proyek.
                  </li>
                  <li>
                    <strong>Dormant Project Clause:</strong> Apabila Klien menghentikan komunikasi, menunda pemberian umpan balik (feedback), atau tidak memberikan materi yang dibutuhkan selama lebih dari <strong>30 hari kalender</strong> berturut-turut, proyek akan dianggap dorman (dihentikan sementara). Untuk mengaktifkan kembali proyek tersebut, Klien akan dikenakan biaya restart sebesar 10% dari total nilai proyek.
                  </li>
                </ul>
              </div>
            </div>

            {/* 4 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>4. Third-Party Assets &amp; Licenses (Aset &amp; Lisensi Pihak Ketiga)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Apabila proyek membutuhkan aset pihak ketiga berbayar (seperti lisensi <em>font</em> premium, <em>stock photos</em>, <em>plugins</em>, atau API), biaya dan lisensi atas nama komersial sepenuhnya menjadi tanggung jawab Klien, kecuali dinyatakan lain secara eksplisit dalam brief awal.
                  </li>
                  <li>
                    Aria Labs tidak bertanggung jawab atas pelanggaran hak cipta yang timbul akibat aset, teks, atau gambar yang secara langsung disediakan atau diinstruksikan oleh Klien.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>5. Intellectual Property Rights (Hak Kekayaan Intelektual)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Seluruh konsep awal, source file (Figma, AI, PSD), dan source code adalah <strong>Hak Milik Eksklusif Aria Labs</strong> hingga Klien menyelesaikan pelunasan faktur secara utuh (100%).
                  </li>
                  <li>
                    Setelah kewajiban finansial diselesaikan, hak guna komersial (commercial use rights) atas hasil akhir (final deliverables) dipindahtangankan kepada Klien.
                  </li>
                  <li>
                    Konsep desain alternatif yang dipresentasikan namun tidak dipilih oleh Klien akan tetap menjadi hak milik Aria Labs dan tidak boleh digunakan oleh Klien.
                  </li>
                </ul>
              </div>
            </div>

            {/* 6 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>6. Portfolio Usage (Penggunaan Portofolio)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Aria Labs berhak secara penuh menggunakan karya hasil akhir (termasuk logo, identitas visual, dan tangkapan layar website) sebagai bagian dari portofolio (showcase), materi pemasaran, dan studi kasus di platform digital Studio, kecuali jika proyek tersebut dilindungi oleh Perjanjian Kerahasiaan (NDA) yang sah.
                  </li>
                </ul>
              </div>
            </div>

            {/* 7 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>7. Payment Terms &amp; Termination (Pembayaran &amp; Pembatalan)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Uang Muka (Down Payment / DP) sebesar minimal 50% wajib dilunasi sebelum pekerjaan dimulai. Pelunasan wajib diselesaikan sebelum serah terima aset final atau sebelum situs web diluncurkan (go-live).
                  </li>
                  <li>
                    <span className={styles.redAlert}>Kebijakan Non-Refundable:</span> Jika Klien membatalkan proyek secara sepihak setelah pembayaran diterima dan/atau proses desain telah dimulai, maka DP yang telah dibayarkan <strong>tidak dapat dikembalikan</strong> sebagai kompensasi definitif atas reservasi slot waktu dan sumber daya Aria Labs.
                  </li>
                </ul>
              </div>
            </div>

            {/* 8 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>8. Limitation of Liability (Batasan Tanggung Jawab)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Aria Labs menjamin penyerahan proyek sesuai spesifikasi yang disepakati. Namun, setelah proyek diserahkan, kami tidak bertanggung jawab atas insiden di luar kendali kami, termasuk namun tidak terbatas pada: peretasan server, serangan malware pada hosting Klien, penurunan peringkat SEO, atau kerugian finansial bisnis Klien.
                  </li>
                  <li>
                    Tanggung jawab maksimal Aria Labs secara hukum tidak akan melebihi jumlah total yang dibayarkan oleh Klien untuk proyek yang bersangkutan.
                  </li>
                </ul>
              </div>
            </div>

            {/* 9 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>9. Force Majeure &amp; Jurisdiction (Keadaan Memaksa &amp; Yurisdiksi)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Kedua belah pihak dibebaskan dari kewajiban perjanjian ini apabila terjadi keadaan memaksa (Force Majeure) seperti bencana alam, pandemi berskala nasional, gangguan infrastruktur internet masif, atau kebijakan pemerintah yang menghalangi penyelesaian proyek.
                  </li>
                  <li>
                    Perjanjian ini ditafsirkan berdasarkan Hukum Republik Indonesia. Segala sengketa akan diselesaikan secara musyawarah. Jika mufakat tidak tercapai, sengketa akan diselesaikan melalui yurisdiksi kompetensi eksklusif di <strong>Pengadilan Negeri Jakarta Utara</strong>.
                  </li>
                </ul>
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
