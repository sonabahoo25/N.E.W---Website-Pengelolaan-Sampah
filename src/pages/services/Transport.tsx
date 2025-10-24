import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import transportImage from "@/assets/transport-service.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Transport = () => {
  const features = [
    {
      icon: Clock,
      title: "Jadwal Teratur",
      description: "Pengangkutan sampah sesuai jadwal yang telah disepakati",
    },
    {
      icon: MapPin,
      title: "Jangkauan Luas",
      description: "Melayani berbagai area di seluruh Indonesia",
    },
    {
      icon: Shield,
      title: "Armada Terpelihara",
      description: "Kendaraan modern dan terawat dengan baik",
    },
  ];

  const packages = [
    {
      name: "Residensial",
      description: "Untuk perumahan dan kompleks apartemen",
      features: ["Pickup 2-3x seminggu", "Kontainer standar", "Harga kompetitif"],
    },
    {
      name: "Komersial",
      description: "Untuk perkantoran dan bisnis",
      features: ["Pickup sesuai kebutuhan", "Berbagai ukuran kontainer", "Laporan berkala"],
    },
    {
      name: "Industrial",
      description: "Untuk pabrik dan industri",
      features: ["Pickup harian", "Kontainer jumbo", "Penanganan khusus"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${transportImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Pengangkutan Sampah</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Layanan pengangkutan sampah profesional dan terpercaya untuk kebutuhan Anda
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Layanan Pengangkutan Sampah Terpercaya</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Dengan armada modern dan tim profesional, kami menyediakan layanan pengangkutan sampah 
              yang tepat waktu dan efisien. Kami melayani berbagai skala kebutuhan, dari residensial 
              hingga industrial.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Packages */}
            <h3 className="text-2xl font-semibold mb-6">Paket Layanan</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {packages.map((pkg, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-semibold mb-2">{pkg.name}</h4>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Butuh Layanan Pengangkutan?</h3>
              <p className="mb-6 text-lg opacity-90">
                Konsultasikan kebutuhan Anda dengan tim kami
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

export default Transport;
