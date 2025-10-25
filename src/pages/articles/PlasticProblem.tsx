import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import plasticImage from "@/assets/plastic-pollution.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PlasticProblem = () => {
  const facts = [
    {
      number: "64 Juta Ton",
      description: "Sampah plastik dihasilkan Indonesia per tahun",
    },
    {
      number: "620 Ribu Ton",
      description: "Sampah plastik berakhir di laut Indonesia",
    },
    {
      number: "200-500 Tahun",
      description: "Waktu yang dibutuhkan plastik untuk terurai",
    },
    {
      number: "9 Miliar Kg",
      description: "Sampah plastik Indonesia yang tidak terkelola",
    },
  ];

  const causes = [
    {
      title: "Gaya Hidup Konsumtif",
      description: "Peningkatan penggunaan produk sekali pakai dan kemasan plastik dalam kehidupan sehari-hari.",
    },
    {
      title: "Infrastruktur Pengelolaan Kurang",
      description: "Sistem pengumpulan dan pengolahan sampah yang belum merata di seluruh Indonesia.",
    },
    {
      title: "Kesadaran Masyarakat Rendah",
      description: "Kurangnya pemahaman tentang dampak sampah plastik dan cara pengelolaannya.",
    },
    {
      title: "Industri Kemasan",
      description: "Pertumbuhan industri yang masih bergantung pada kemasan plastik sebagai pilihan utama.",
    },
  ];

  const solutions = [
    {
      level: "Individu",
      actions: [
        "Membawa tas belanja sendiri",
        "Menggunakan botol minum isi ulang",
        "Menolak sedotan dan alat makan plastik",
        "Memilih produk dengan kemasan minimal",
        "Mendaur ulang plastik yang sudah digunakan",
      ],
    },
    {
      level: "Komunitas",
      actions: [
        "Mengorganisir kegiatan bersih-bersih pantai",
        "Membuat bank sampah di lingkungan",
        "Kampanye pengurangan plastik",
        "Program edukasi pengelolaan sampah",
        "Kolaborasi dengan pemerintah lokal",
      ],
    },
    {
      level: "Industri & Pemerintah",
      actions: [
        "Regulasi penggunaan plastik sekali pakai",
        "Insentif untuk industri ramah lingkungan",
        "Investasi infrastruktur daur ulang",
        "Penelitian alternatif plastik biodegradable",
        "Program tanggung jawab produsen",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={plasticImage}
          alt="Plastic Pollution"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Fenomena Sampah Plastik di Indonesia</h1>
            <p className="text-xl opacity-90">Krisis yang memerlukan aksi nyata dari kita semua</p>
          </div>
        </div>
      </div>

      <article className="py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali
              </Button>
            </Link>

            <div className="prose max-w-none space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Kondisi Sampah Plastik di Indonesia</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Indonesia menghadapi krisis sampah plastik yang semakin mengkhawatirkan. Sebagai negara
                    kepulauan terbesar di dunia dengan populasi lebih dari 270 juta jiwa, Indonesia menjadi
                    salah satu kontributor terbesar sampah plastik ke laut di dunia, menempati peringkat kedua
                    setelah China.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Setiap tahun, ribuan ton sampah plastik mencemari pantai, sungai, dan laut Indonesia.
                    Kondisi ini tidak hanya mengancam kehidupan laut, tetapi juga berdampak pada kesehatan
                    manusia, ekonomi, dan pariwisata.
                  </p>
                </CardContent>
              </Card>

              {/* Facts Grid */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-destructive" />
                  Fakta dan Data
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {facts.map((fact, index) => (
                    <Card key={index} className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20">
                      <CardContent className="pt-6 text-center">
                        <div className="text-3xl font-bold text-destructive mb-2">{fact.number}</div>
                        <p className="text-sm text-muted-foreground">{fact.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Causes */}
              <Card className="border-l-4 border-l-destructive">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-destructive" />
                    Penyebab Masalah
                  </h2>
                  <div className="space-y-4">
                    {causes.map((cause, index) => (
                      <div key={index}>
                        <h3 className="font-semibold mb-1">{cause.title}</h3>
                        <p className="text-muted-foreground text-sm">{cause.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Impacts */}
              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Dampak Sampah Plastik</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">🌊 Dampak Terhadap Kehidupan Laut</h3>
                      <p className="text-muted-foreground text-sm">
                        Lebih dari 1 juta burung laut dan 100.000 mamalia laut mati setiap tahun akibat
                        sampah plastik. Mikroplastik masuk ke rantai makanan laut dan akhirnya dikonsumsi manusia.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">🏥 Dampak Kesehatan</h3>
                      <p className="text-muted-foreground text-sm">
                        Plastik mengandung bahan kimia berbahaya seperti BPA yang dapat mengganggu sistem
                        hormon dan meningkatkan risiko kanker. Mikroplastik ditemukan dalam air minum dan
                        makanan yang kita konsumsi.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">💰 Dampak Ekonomi</h3>
                      <p className="text-muted-foreground text-sm">
                        Kerugian ekonomi dari sampah plastik di sektor pariwisata dan perikanan mencapai
                        triliunan rupiah. Biaya pembersihan dan pengelolaan sampah membebani anggaran daerah.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">🌍 Dampak Lingkungan</h3>
                      <p className="text-muted-foreground text-sm">
                        Plastik membutuhkan ratusan tahun untuk terurai, mencemari tanah dan air tanah.
                        Pembakaran plastik menghasilkan gas beracun yang mencemari udara dan berkontribusi
                        pada perubahan iklim.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Solutions */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Solusi dan Aksi Nyata</h2>
                <p className="text-muted-foreground mb-6">
                  Mengatasi masalah sampah plastik memerlukan kolaborasi dari semua pihak. Berikut adalah
                  tindakan yang dapat dilakukan di berbagai level:
                </p>
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <Card key={index} className="border-primary">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-3 text-primary">{solution.level}</h3>
                        <ul className="space-y-2">
                          {solution.actions.map((action, aIndex) => (
                            <li key={aIndex} className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <Card className="bg-gradient-to-r from-primary to-secondary text-white">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Saatnya Bertindak!</h2>
                  <p className="leading-relaxed opacity-90 mb-4">
                    Krisis sampah plastik di Indonesia bukan hanya tanggung jawab pemerintah atau industri,
                    tetapi tanggung jawab kita bersama. Setiap tindakan kecil yang kita lakukan hari ini
                    akan memberikan dampak besar untuk masa depan.
                  </p>
                  <p className="leading-relaxed opacity-90">
                    Mari mulai dari diri sendiri dengan mengurangi penggunaan plastik sekali pakai,
                    memilah sampah, dan mendukung gerakan ramah lingkungan. Bersama-sama, kita dapat
                    menciptakan Indonesia yang lebih bersih dan berkelanjutan!
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

export default PlasticProblem;
