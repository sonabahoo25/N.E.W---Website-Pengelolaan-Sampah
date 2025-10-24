import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cleaningImage from "@/assets/cleaning-service.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cleaning = () => {
  const features = [
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Tenaga kerja terlatih dan berpengalaman",
    },
    {
      icon: Award,
      title: "Standar Tinggi",
      description: "Mengikuti standar kebersihan internasional",
    },
    {
      icon: Sparkles,
      title: "Hasil Maksimal",
      description: "Lingkungan bersih dan nyaman terjamin",
    },
  ];

  const services = [
    {
      title: "Pembersihan Taman & Ruang Terbuka",
      description: "Perawatan taman, ruang hijau, dan area publik lainnya dengan pembersihan menyeluruh termasuk pemangkasan, penyapuan, dan pengelolaan sampah.",
    },
    {
      title: "Pembersihan Pantai & Sungai",
      description: "Program pembersihan lingkungan perairan dari sampah plastik dan limbah, menjaga ekosistem air tetap sehat.",
    },
    {
      title: "Pembersihan Jalan & Trotoar",
      description: "Layanan pembersihan rutin jalan raya, trotoar, dan area pedestrian untuk kenyamanan publik.",
    },
    {
      title: "Event Cleaning",
      description: "Layanan pembersihan sebelum, selama, dan setelah acara besar untuk memastikan area tetap bersih.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cleaningImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Pembersihan Lingkungan</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Menciptakan lingkungan bersih dan sehat dengan tim profesional dan dedikasi tinggi
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Layanan Pembersihan Lingkungan Komprehensif</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Kami menyediakan berbagai layanan pembersihan lingkungan untuk area publik, komersial, 
              dan residensial. Tim profesional kami siap menjaga kebersihan lingkungan Anda dengan 
              standar tinggi dan peralatan modern.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="inline-flex p-3 rounded-lg bg-secondary/10 text-secondary mb-4">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services */}
            <h3 className="text-2xl font-semibold mb-6">Jenis Layanan</h3>
            <div className="space-y-4 mb-12">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Process */}
            <Card className="mb-12 bg-muted">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">Proses Kerja Kami</h3>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold mr-3 flex-shrink-0">1</span>
                    <div>
                      <strong>Survey Lokasi</strong>
                      <p className="text-muted-foreground">Penilaian kondisi area dan perencanaan strategi pembersihan</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold mr-3 flex-shrink-0">2</span>
                    <div>
                      <strong>Eksekusi Pembersihan</strong>
                      <p className="text-muted-foreground">Tim profesional melakukan pembersihan sesuai standar</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold mr-3 flex-shrink-0">3</span>
                    <div>
                      <strong>Quality Check</strong>
                      <p className="text-muted-foreground">Pemeriksaan hasil untuk memastikan kualitas terbaik</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold mr-3 flex-shrink-0">4</span>
                    <div>
                      <strong>Maintenance</strong>
                      <p className="text-muted-foreground">Layanan pemeliharaan berkala untuk kebersihan berkelanjutan</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-gradient-to-r from-secondary to-primary text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Wujudkan Lingkungan Bersih</h3>
              <p className="mb-6 text-lg opacity-90">
                Hubungi kami untuk konsultasi gratis dan penawaran terbaik
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Hubungi Kami
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cleaning;
