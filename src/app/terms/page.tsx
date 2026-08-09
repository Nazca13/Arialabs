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
              Selamat datang di Aria Labs. Syarat dan Ketentuan (Terms of Service) ini mengatur hubungan antara Anda (&quot;Klien&quot; atau &quot;Pengguna&quot;) dengan Aria Labs (&quot;Kami&quot; atau &quot;Studio&quot;) terkait penggunaan layanan desain, pengembangan web, dan identitas visual kami. Dengan mengakses situs web kami atau menyetujui penawaran proyek kami, Anda dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan di bawah ini.
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
                    Seluruh layanan yang diberikan oleh Aria Labs (termasuk namun tidak terbatas pada Web Development, Brand Identity, dan UI/UX Design) akan dikerjakan secara eksklusif berdasarkan dokumen penawaran atau brief proyek yang telah disepakati secara tertulis oleh kedua belah pihak sebelum proyek dimulai.
                  </li>
                  <li>
                    Setiap permintaan perubahan konsep dasar, arah desain secara menyeluruh, atau penambahan fitur sistem yang menyimpang atau tidak tercantum dalam brief awal akan dikategorikan sebagai pekerjaan tambahan (Add-ons/Out of Scope) dan akan dikenakan biaya tambahan sesuai estimasi waktu dan sumber daya yang dibutuhkan.
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
                    Aria Labs memberikan batasan standar maksimal 3 (tiga) kali revisi minor pada setiap fase proyek (kecuali diatur berbeda secara spesifik dalam kontrak perjanjian terpisah).
                  </li>
                  <li>
                    Revisi minor mencakup penyesuaian warna, penggantian tipografi, perbaikan jarak/layout (spacing), atau penyesuaian teks (copywriting) yang tidak merombak struktur utama atau algoritma.
                  </li>
                  <li>
                    Revisi di luar batas yang ditentukan atau revisi mayor yang mengharuskan pembuatan ulang dari awal akan dikenakan biaya tambahan (hourly rate atau flat fee).
                  </li>
                </ul>
              </div>
            </div>

            {/* 3 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>3. Intellectual Property Rights (Hak Kekayaan Intelektual)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Seluruh hasil karya, konsep awal, draf, aset desain, source file (seperti file Figma, Adobe, logo), serta baris kode (source code) sepenuhnya berstatus sebagai Hak Milik Aria Labs selama proses pengerjaan berlangsung dan belum dilakukan pelunasan kewajiban finansial.
                  </li>
                  <li>
                    Hak kepemilikan dan hak guna komersial atas hasil akhir proyek (final deliverables) baru akan dipindahtangankan sepenuhnya kepada Klien hanya setelah pelunasan 100% diterima oleh Aria Labs.
                  </li>
                  <li>
                    Konsep, draf, atau desain alternatif yang tidak dipilih oleh Klien tetap menjadi hak milik intelektual eksklusif Aria Labs.
                  </li>
                </ul>
              </div>
            </div>

            {/* 4 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>4. Portfolio Usage (Penggunaan Portofolio)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Aria Labs mempertahankan hak moral (moral rights) atas seluruh karya yang kami hasilkan. Kami berhak secara penuh menampilkan hasil akhir karya tersebut (termasuk tangkapan layar web, elemen <em>branding</em>, dan studi kasus) di dalam situs web resmi, media sosial, materi promosi, dan presentasi internal kami sebagai bagian dari portofolio (showcase) studio, kecuali apabila terikat oleh Perjanjian Kerahasiaan (Non-Disclosure Agreement / NDA) tersendiri.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>5. Payment Terms &amp; Termination (Ketentuan Pembayaran &amp; Pembatalan)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Sebagai bentuk komitmen, Aria Labs mewajibkan pembayaran Uang Muka (Down Payment / DP) minimal sebesar 50% dari total nilai proyek (atau sesuai termin pembayaran yang disepakati secara tertulis) sebelum pekerjaan pengembangan atau desain dimulai.
                  </li>
                  <li>
                    Sisa pembayaran (pelunasan) wajib diselesaikan maksimal 7 (tujuh) hari kerja setelah Klien menyetujui hasil akhir (final approval) dan sebelum file master diserahkan atau situs web diluncurkan (go live) ke server Klien.
                  </li>
                  <li>
                    <strong>Kebijakan Pembatalan:</strong> Apabila Klien membatalkan proyek secara sepihak di tengah proses pengerjaan dengan alasan apa pun, maka pembayaran DP yang telah dibayarkan bersifat nonrefundable (tidak dapat dikembalikan). Hal ini merupakan kompensasi atas waktu, riset, dan sumber daya tim yang telah dialokasikan oleh studio untuk proyek tersebut.
                  </li>
                </ul>
              </div>
            </div>

            {/* 6 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>6. Governing Law &amp; Jurisdiction (Hukum &amp; Yurisdiksi)</h2>
              </div>
              <div className={styles.rightCol}>
                <ul>
                  <li>
                    Syarat dan Ketentuan ini tunduk pada, diatur oleh, dan ditafsirkan berdasarkan Hukum dan Peraturan Perundang-undangan Republik Indonesia.
                  </li>
                  <li>
                    Segala perselisihan atau sengketa yang timbul di kemudian hari terkait pelaksanaan perjanjian ini akan diselesaikan secara musyawarah untuk mufakat. Apabila kesepakatan tidak tercapai, kedua belah pihak sepakat untuk menyelesaikannya melalui yurisdiksi dan kompetensi eksklusif Pengadilan Negeri Jakarta Utara, sesuai dengan wilayah domisili operasional Aria Labs.
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
