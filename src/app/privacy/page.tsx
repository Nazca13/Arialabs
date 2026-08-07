import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import styles from './privacy.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy | Aria Labs',
  description: 'Kebijakan Privasi dan Perlindungan Data Pengguna Aria Labs — komitmen transparansi dan keamanan informasi Anda.',
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
            <p className={styles.subtitle}>
              OUR PERSONAL STATEMENT, COOKIES, THIRD-PARTIES & DATA PROTECTION
            </p>
          </div>

          <div className={styles.list}>
            {/* 1 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Personal Statement</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Aria Labs berkomitmen penuh untuk menciptakan pengalaman digital yang aman, transparan, dan terpercaya bagi seluruh klien dan pengunjung platform kami. Kami sangat menghargai privasi Anda dan memastikan bahwa setiap informasi pribadi yang terkumpul dikelola dengan tingkat keamanan tertinggi sesuai prinsip transparansi.
                </p>
                <p>
                  Saat Anda mengunjungi website arialabs.id atau berinteraksi dengan layanan kami, beberapa informasi dapat dikumpulkan untuk tujuan operasional dan peningkatan mutu layanan.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>What are &lsquo;cookies&rsquo;?</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Cookies adalah berkas teks kecil yang disimpan di peramban (browser) atau memori perangkat Anda saat mengunjungi website kami. Cookies membantu website mengenali perangkat Anda pada kunjungan berikutnya, mempermudah navigasi, serta membantu kami memahami bagian website mana yang paling bermanfaat bagi pengunjung.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Why do we use cookies?</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Kami menggunakan cookies untuk memastikan fungsi utama website berjalan secara optimal, seperti menyimpan preferensi tampilan, mempercepat waktu muat halaman, serta menganalisis statistik pengunjung secara anonim. Hal ini memungkinkan kami untuk terus meningkatkan pengalaman dan kenyamanan Anda saat menelusuri layanan kami.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>What information do we gather specifically?</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Informasi yang kami kumpulkan mencakup data yang Anda berikan secara sukarela melalui formulir kontak atau aplikasi pesan, seperti:
                </p>
                <ul>
                  <li>Nama lengkap dan informasi kontak (alamat email, nomor WhatsApp).</li>
                  <li>Nama perusahaan atau nama merek bisnis Anda.</li>
                  <li>Detail kebutuhan proyek, paket layanan yang dipilih, dan anggaran.</li>
                  <li>Data analitik anonim seperti tipe browser, durasi kunjungan, dan halaman yang diakses.</li>
                </ul>
              </div>
            </div>

            {/* 5 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>What third-parties do we share your information with?</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Aria Labs tidak pernah menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk kepentingan pemasaran tanpa izin. Data analitik agregat hanya dibagikan ke penyedia infrastruktur tepercaya seperti Vercel Analytics dan Microsoft Clarity khusus untuk keperluan diagnostik performa website.
                </p>
              </div>
            </div>

            {/* 6 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Website Media & Content</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Seluruh materi visual, studi kasus, logo, grafik, dan animasi di website ini dimiliki secara sah oleh Aria Labs atau dipublikasikan atas izin klien kami. Penggunaan materi ini tanpa izin tertulis dari Aria Labs tidak diperkenankan.
                </p>
              </div>
            </div>

            {/* 7 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Disclosure & Your Rights</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Anda memiliki hak penuh untuk meminta akses, pembaruan, atau penghapusan informasi pribadi Anda dari sistem kami. Anda juga dapat menonaktifkan penggunaan cookies melalui pengaturan peramban web Anda kapan saja.
                </p>
                <p>
                  Jika Anda memiliki pertanyaan seputar kebijakan privasi ini, silakan hubungi tim kami di halo@arialabs.id atau melalui WhatsApp resmi kami di 083832886220.
                </p>
              </div>
            </div>

            {/* 8 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Updates</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Kebijakan privasi ini dapat diperbarui sewaktu-waktu untuk menyesuaikan perkembangan teknologi dan regulasi yang berlaku. Setiap pembaruan akan dipublikasikan secara langsung pada halaman ini.
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
