import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Truck, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/heroeco.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      icon: Recycle,
      title: "Daur Ulang",
      description: "Transformasi sampah menjadi sumber daya bernilai dengan teknologi modern",
      link: "/services/recycling",
    },
    {
      icon: Truck,
      title: "Pengangkutan Sampah",
      description: "Layanan pengangkutan sampah terjadwal dan terpercaya untuk area Anda",
      link: "/services/transport",
    },
    {
      icon: Sparkles,
      title: "Pembersihan Lingkungan",
      description: "Jaga kebersihan lingkungan dengan tim profesional kami",
      link: "/services/cleaning",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Bersama Menuju Indonesia<br />Yang Lebih Bersih
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Solusi pengelolaan sampah profesional untuk lingkungan yang berkelanjutan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link to="/services/recycling">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                Jelajahi Layanan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary">
                Tentang Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan solusi lengkap untuk pengelolaan sampah yang efektif dan ramah lingkungan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="ghost" className="group-hover:text-primary p-0">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Siap Bergabung dengan Kami?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Mari bersama-sama menciptakan lingkungan yang lebih bersih dan berkelanjutan untuk generasi mendatang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Hubungi Kami
              </Button>
            </Link>
            <Link to="/career">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary">
                Lihat Lowongan Pekerjaan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
