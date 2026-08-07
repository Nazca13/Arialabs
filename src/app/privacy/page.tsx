import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { CtaSection } from '@/features/home/sections/cta/cta-section'
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
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.subtitle}>
              Komitmen Kami terhadap Privasi & Keamanan Data Anda
            </p>
          </div>

          <div className={styles.list}>
            {/* 1 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Pernyataan Umum</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Aria Labs berkomitmen penuh untuk menjaga privasi setiap klien dan pengunjung website <strong>arialabs.id</strong>. Kami menghargai kepercayaan Anda dan memastikan bahwa setiap informasi yang terkumpul dikelola secara transparan dan aman.
                </p>
                <p>
                  Kebijakan privasi ini menjelaskan jenis data yang kami kumpulkan, bagaimana kami menggunakannya, serta langkah-langkah perlindungan yang kami terapkan.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Informasi yang Kami Kumpulkan</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Kami mengumpulkan informasi yang Anda berikan secara sukarela melalui formulir kontak atau pesan WhatsApp, meliputi:
                </p>
                <ul>
                  <li>Nama lengkap dan informasi kontak (email, nomor WhatsApp).</li>
                  <li>Nama perusahaan atau merek bisnis Anda.</li>
                  <li>Detail kebutuhan proyek, paket layanan yang dipilih, dan anggaran.</li>
                </ul>
                <p>
                  Selain itu, kami menggunakan layanan analitik pihak ketiga yang mengumpulkan data anonim secara otomatis, seperti tipe perangkat, browser, durasi kunjungan, dan halaman yang diakses.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Layanan Analitik yang Digunakan</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Website ini menggunakan dua layanan analitik untuk memantau performa dan pengalaman pengguna:
                </p>
                <ul>
                  <li><strong>Vercel Analytics</strong> — mengukur performa halaman, waktu muat, dan metrik Core Web Vitals secara anonim tanpa menyimpan data pribadi pengunjung.</li>
                  <li><strong>Microsoft Clarity</strong> — merekam peta panas (heatmap) dan sesi interaksi pengguna secara anonim untuk membantu kami memahami area website yang perlu ditingkatkan.</li>
                </ul>
                <p>
                  Kedua layanan ini tidak mengumpulkan informasi pribadi yang dapat mengidentifikasi pengunjung secara individu. Website ini <strong>tidak menampilkan banner persetujuan cookies manual</strong> karena analitik yang digunakan bersifat privacy-first dan tidak memerlukan consent eksplisit berdasarkan regulasi yang berlaku.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Penggunaan Informasi</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Informasi yang dikumpulkan digunakan secara eksklusif untuk:
                </p>
                <ul>
                  <li>Memproses permintaan konsultasi dan penawaran proyek Anda.</li>
                  <li>Berkomunikasi terkait perkembangan dan pengerjaan proyek.</li>
                  <li>Meningkatkan kualitas layanan dan pengalaman pengguna website.</li>
                  <li>Menganalisis performa website secara agregat dan anonim.</li>
                </ul>
              </div>
            </div>

            {/* 5 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Pembagian Data ke Pihak Ketiga</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Aria Labs <strong>tidak pernah menjual, menyewakan, atau membagikan</strong> informasi pribadi Anda kepada pihak ketiga untuk kepentingan pemasaran. Data analitik agregat hanya diproses oleh penyedia infrastruktur tepercaya (Vercel dan Microsoft) untuk keperluan diagnostik performa.
                </p>
              </div>
            </div>

            {/* 6 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Konten & Hak Cipta</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Seluruh materi visual, studi kasus, ilustrasi karakter Aria, logo, dan konten di website ini dimiliki secara sah oleh Aria Labs atau dipublikasikan atas izin resmi klien kami. Penggunaan materi tanpa izin tertulis tidak diperkenankan.
                </p>
              </div>
            </div>

            {/* 7 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Hak Anda</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Anda memiliki hak untuk meminta akses, pembaruan, atau penghapusan data pribadi Anda dari sistem kami kapan saja. Hubungi tim kami melalui <strong>halo@arialabs.id</strong> atau WhatsApp di <strong>083832886220</strong>.
                </p>
              </div>
            </div>

            {/* 8 */}
            <div className={styles.row}>
              <div className={styles.leftCol}>
                <h2 className={styles.sectionHeading}>Pembaruan Kebijakan</h2>
              </div>
              <div className={styles.rightCol}>
                <p>
                  Kebijakan privasi ini dapat diperbarui sewaktu-waktu untuk menyesuaikan perkembangan teknologi dan regulasi. Setiap pembaruan akan dipublikasikan langsung pada halaman ini.
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
