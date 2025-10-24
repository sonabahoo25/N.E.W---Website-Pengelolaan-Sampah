import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WasteTypes = () => {
  const wasteTypes = [
    {
      name: "Sampah Organik",
      description: "Sampah yang berasal dari makhluk hidup dan dapat terurai secara alami",
      examples: "Sisa makanan, daun, ranting, kulit buah, sayuran busuk",
      impact: "Dapat menghasilkan gas metana jika tidak dikelola dengan baik, namun dapat menjadi kompos",
      color: "bg-green-500",
    },
    {
      name: "Sampah Anorganik",
      description: "Sampah yang tidak dapat terurai secara alami atau membutuhkan waktu sangat lama",
      examples: "Plastik, kaleng, botol kaca, logam, karet",
      impact: "Mencemari tanah dan air, dapat bertahan ratusan tahun di lingkungan",
      color: "bg-blue-500",
    },
    {
      name: "Sampah B3 (Bahan Berbahaya dan Beracun)",
      description: "Sampah yang mengandung bahan berbahaya dan dapat meracuni lingkungan",
      examples: "Baterai, lampu neon, cat, pestisida, limbah medis",
      impact: "Sangat berbahaya bagi kesehatan dan lingkungan, memerlukan penanganan khusus",
      color: "bg-red-500",
    },
    {
      name: "Sampah Elektronik",
      description: "Sampah dari peralatan elektronik yang sudah tidak terpakai",
      examples: "Handphone, komputer, TV, kulkas, AC bekas",
      impact: "Mengandung logam berat yang berbahaya, namun dapat didaur ulang untuk diambil materialnya",
      color: "bg-yellow-500",
    },
  ];

  const environmentalImpacts = [
    {
      title: "Pencemaran Air",
      description: "Sampah yang tidak dikelola dengan baik dapat mencemari sumber air tanah dan permukaan, mengancam kehidupan akuatik dan kesehatan manusia.",
    },
    {
      title: "Pencemaran Tanah",
      description: "Bahan kimia berbahaya dari sampah dapat meresap ke tanah, merusak kesuburan dan mencemari tanaman.",
    },
    {
      title: "Pencemaran Udara",
      description: "Pembakaran sampah menghasilkan gas beracun dan partikel berbahaya yang mencemari udara dan menyebabkan penyakit pernapasan.",
    },
    {
      title: "Perubahan Iklim",
      description: "Sampah organik di TPA menghasilkan gas metana, salah satu gas rumah kaca yang berkontribusi pada pemanasan global.",
    },
    {
      title: "Kerusakan Ekosistem",
      description: "Sampah plastik di laut membunuh kehidupan laut, merusak terumbu karang, dan mengganggu rantai makanan.",
    },
    {
      title: "Masalah Kesehatan",
      description: "Tumpukan sampah menjadi sarang penyakit, menarik hewan pembawa penyakit seperti tikus dan nyamuk.",
    },
  ];

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

            <h1 className="text-4xl font-bold mb-4">Pengertian, Jenis, dan Dampak Sampah</h1>
            <p className="text-muted-foreground mb-8">Memahami berbagai jenis sampah dan dampaknya terhadap lingkungan</p>

            <div className="prose max-w-none space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Apa itu Sampah?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Sampah adalah sisa atau buangan dari aktivitas manusia atau proses alam yang sudah tidak 
                    digunakan lagi. Sampah dapat berbentuk padat, cair, atau gas yang dihasilkan dari berbagai 
                    kegiatan seperti rumah tangga, industri, pertanian, dan komersial.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Pengelolaan sampah yang tidak tepat dapat menimbulkan berbagai masalah lingkungan dan kesehatan. 
                    Oleh karena itu, penting untuk memahami jenis-jenis sampah dan cara pengelolaannya yang benar.
                  </p>
                </CardContent>
              </Card>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Jenis-Jenis Sampah</h2>
                <div className="space-y-4">
                  {wasteTypes.map((type, index) => (
                    <Card key={index} className="border-l-4" style={{ borderLeftColor: type.color.replace('bg-', '') }}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`h-3 w-3 rounded-full ${type.color} mt-1.5`} />
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                            <p className="text-muted-foreground mb-3">{type.description}</p>
                          </div>
                        </div>
                        <div className="space-y-2 pl-6">
                          <p><strong>Contoh:</strong> <span className="text-muted-foreground">{type.examples}</span></p>
                          <p><strong>Dampak:</strong> <span className="text-muted-foreground">{type.impact}</span></p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-destructive/10 border-destructive">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Dampak Sampah Terhadap Lingkungan</h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Sampah yang tidak dikelola dengan baik dapat menimbulkan berbagai dampak negatif 
                        terhadap lingkungan dan kesehatan manusia. Berikut adalah dampak-dampak utama:
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                {environmentalImpacts.map((impact, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold mb-2">{impact.title}</h3>
                      <p className="text-muted-foreground text-sm">{impact.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Statistik Sampah di Indonesia</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex justify-between">
                      <span>Total produksi sampah per hari:</span>
                      <strong className="text-foreground">175.000 ton</strong>
                    </p>
                    <p className="flex justify-between">
                      <span>Sampah plastik per tahun:</span>
                      <strong className="text-foreground">64 juta ton</strong>
                    </p>
                    <p className="flex justify-between">
                      <span>Sampah yang didaur ulang:</span>
                      <strong className="text-foreground">Hanya 10%</strong>
                    </p>
                    <p className="flex justify-between">
                      <span>Sampah yang berakhir di TPA:</span>
                      <strong className="text-foreground">69%</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary to-secondary text-white">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Solusi dan Tindakan</h2>
                  <p className="leading-relaxed opacity-90 mb-4">
                    Untuk mengatasi masalah sampah, diperlukan upaya bersama dari semua pihak. Beberapa 
                    tindakan yang dapat dilakukan:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 opacity-90">
                    <li>Menerapkan konsep 3R (Reduce, Reuse, Recycle)</li>
                    <li>Memilah sampah sejak dari sumbernya</li>
                    <li>Menggunakan produk ramah lingkungan</li>
                    <li>Mendukung program daur ulang</li>
                    <li>Mengurangi penggunaan plastik sekali pakai</li>
                    <li>Meningkatkan kesadaran masyarakat tentang pengelolaan sampah</li>
                  </ul>
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

export default WasteTypes;
