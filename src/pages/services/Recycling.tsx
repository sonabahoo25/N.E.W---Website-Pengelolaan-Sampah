import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import recyclingImage from "@/assets/recycling-service.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Recycling = () => {
  const benefits = [
    "Mengurangi volume sampah ke TPA",
    "Menghemat sumber daya alam",
    "Mengurangi polusi lingkungan",
    "Menciptakan lapangan kerja baru",
    "Menghasilkan produk bernilai ekonomis",
  ];

  const materials = [
    { name: "Plastik", types: "PET, HDPE, PP, LDPE" },
    { name: "Kertas & Kardus", types: "Koran, majalah, kardus bekas" },
    { name: "Logam", types: "Kaleng, aluminium, besi" },
    { name: "Kaca", types: "Botol kaca, pecahan kaca" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${recyclingImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Layanan Daur Ulang</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Mengubah sampah menjadi sumber daya bernilai dengan teknologi modern dan ramah lingkungan
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Tentang Layanan Daur Ulang Kami</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nusa Eco Wave menyediakan layanan daur ulang komprehensif yang mengubah sampah Anda menjadi 
              sumber daya yang bermanfaat. Dengan fasilitas modern dan tim profesional, kami memproses 
              berbagai jenis sampah untuk mengurangi dampak lingkungan dan menciptakan nilai ekonomis.
            </p>

            {/* Benefits */}
            <Card className="mb-12">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-6">Manfaat Daur Ulang</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Materials */}
            <h3 className="text-2xl font-semibold mb-6">Material yang Kami Daur Ulang</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {materials.map((material, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-semibold mb-2">{material.name}</h4>
                    <p className="text-muted-foreground">{material.types}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Mulai Daur Ulang Hari Ini</h3>
              <p className="mb-6 text-lg opacity-90">
                Bergabunglah dengan ribuan pelanggan yang telah mempercayai kami
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

export default Recycling;
