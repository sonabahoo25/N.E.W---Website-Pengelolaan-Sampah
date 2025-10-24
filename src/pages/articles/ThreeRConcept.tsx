import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ThreeRConcept = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <article className="py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali
              </Button>
            </Link>

            <h1 className="text-4xl font-bold mb-4">Konsep 3R: Reduce, Reuse, Recycle</h1>
            <p className="text-muted-foreground mb-8">Panduan lengkap menerapkan 3R dalam kehidupan sehari-hari</p>

            <div className="prose max-w-none space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Apa itu 3R?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Konsep 3R adalah prinsip pengelolaan sampah yang terdiri dari tiga langkah utama: 
                    Reduce (Mengurangi), Reuse (Menggunakan Kembali), dan Recycle (Daur Ulang). 
                    Konsep ini merupakan pendekatan hierarkis yang paling efektif dalam mengelola 
                    sampah dan meminimalkan dampak negatif terhadap lingkungan.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">1. Reduce (Mengurangi)</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Reduce adalah langkah pertama dan paling penting dalam konsep 3R. Prinsipnya adalah 
                    mengurangi penggunaan barang atau bahan yang dapat menghasilkan sampah.
                  </p>
                  <h3 className="font-semibold mb-2">Cara Menerapkan Reduce:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Hindari produk dengan kemasan berlebihan</li>
                    <li>Gunakan tas belanja yang dapat digunakan berulang kali</li>
                    <li>Pilih produk dengan kemasan yang dapat didaur ulang</li>
                    <li>Kurangi penggunaan plastik sekali pakai</li>
                    <li>Beli produk dalam jumlah besar untuk mengurangi kemasan</li>
                    <li>Hindari produk disposable dan pilih yang tahan lama</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-secondary">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4 text-secondary">2. Reuse (Menggunakan Kembali)</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Reuse berarti menggunakan kembali barang atau bahan yang masih dapat digunakan 
                    sebelum dibuang. Ini membantu memperpanjang umur produk dan mengurangi sampah.
                  </p>
                  <h3 className="font-semibold mb-2">Cara Menerapkan Reuse:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Gunakan botol minum yang dapat diisi ulang</li>
                    <li>Manfaatkan kemasan plastik atau kardus untuk keperluan lain</li>
                    <li>Donasikan barang bekas yang masih layak pakai</li>
                    <li>Gunakan kembali kertas untuk catatan atau memo</li>
                    <li>Perbaiki barang rusak daripada membeli baru</li>
                    <li>Ubah barang bekas menjadi kerajinan atau dekorasi</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-accent">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4 text-accent">3. Recycle (Daur Ulang)</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Recycle adalah proses mengolah sampah menjadi produk baru yang dapat digunakan kembali. 
                    Ini adalah langkah terakhir setelah Reduce dan Reuse.
                  </p>
                  <h3 className="font-semibold mb-2">Material yang Dapat Didaur Ulang:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Plastik:</strong> Botol, kemasan, kantong plastik</li>
                    <li><strong>Kertas:</strong> Koran, majalah, kardus, kertas kantor</li>
                    <li><strong>Logam:</strong> Kaleng minuman, aluminium foil, besi tua</li>
                    <li><strong>Kaca:</strong> Botol, toples, pecahan kaca</li>
                    <li><strong>Elektronik:</strong> Komponen yang dapat dipisahkan</li>
                  </ul>
                  <h3 className="font-semibold mb-2 mt-4">Cara Memulai Daur Ulang:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Pisahkan sampah organik dan anorganik</li>
                    <li>Bersihkan dan keringkan material yang akan didaur ulang</li>
                    <li>Kumpulkan dalam kontainer terpisah berdasarkan jenisnya</li>
                    <li>Serahkan ke fasilitas daur ulang atau bank sampah</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Manfaat Menerapkan 3R</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Manfaat Lingkungan:</h3>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Mengurangi pencemaran lingkungan</li>
                        <li>Menghemat sumber daya alam</li>
                        <li>Mengurangi emisi gas rumah kaca</li>
                        <li>Melestarikan ekosistem</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Manfaat Ekonomi:</h3>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Menghemat biaya pembelian</li>
                        <li>Menciptakan lapangan kerja</li>
                        <li>Mengurangi biaya pengelolaan sampah</li>
                        <li>Menghasilkan pendapatan dari sampah</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary to-secondary text-white">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Kesimpulan</h2>
                  <p className="leading-relaxed opacity-90">
                    Konsep 3R adalah solusi sederhana namun efektif untuk mengurangi masalah sampah. 
                    Dengan menerapkan Reduce, Reuse, dan Recycle dalam kehidupan sehari-hari, kita 
                    dapat memberikan kontribusi nyata untuk kelestarian lingkungan. Mari mulai dari 
                    hal kecil dan jadikan 3R sebagai gaya hidup kita!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ThreeRConcept;
