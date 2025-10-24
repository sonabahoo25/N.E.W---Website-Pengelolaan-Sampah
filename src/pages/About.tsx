import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-eco.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Profesional",
      description: "Memberikan layanan terbaik dengan standar profesional tinggi",
    },
    {
      icon: Eye,
      title: "Inovatif",
      description: "Terus berinovasi dalam teknologi pengelolaan sampah",
    },
    {
      icon: Users,
      title: "Kolaboratif",
      description: "Bekerja sama dengan berbagai pihak untuk hasil maksimal",
    },
    {
      icon: Award,
      title: "Berkelanjutan",
      description: "Berkomitmen pada solusi ramah lingkungan jangka panjang",
    },
  ];

  const achievements = [
    { number: "10+", label: "Tahun Pengalaman" },
    { number: "50+", label: "Kota Terlayani" },
    { number: "1000+", label: "Klien Aktif" },
    { number: "50K+", label: "Ton Sampah Didaur Ulang" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Tentang Nusa Eco Wave</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Pelopor pengelolaan sampah berkelanjutan di Indonesia
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Company Profile */}
            <Card className="mb-12">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-6">Profil Perusahaan</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Nusa Eco Wave</strong> adalah perusahaan pengelolaan sampah 
                    terkemuka di Indonesia yang didirikan dengan misi menciptakan lingkungan yang lebih bersih dan 
                    berkelanjutan. Kami menyediakan solusi komprehensif untuk pengelolaan sampah mulai dari pengumpulan, 
                    pengangkutan, daur ulang, hingga pembersihan lingkungan.
                  </p>
                  <p>
                    Dengan pengalaman lebih dari satu dekade, kami telah melayani ribuan klien di berbagai sektor, 
                    mulai dari residensial, komersial, hingga industrial. Tim profesional kami yang berpengalaman dan 
                    armada modern memastikan layanan berkualitas tinggi yang dapat diandalkan.
                  </p>
                  <p>
                    Kami berkomitmen tidak hanya dalam pengelolaan sampah, tetapi juga dalam edukasi masyarakat tentang 
                    pentingnya pengelolaan sampah yang bertanggung jawab. Melalui berbagai program dan inisiatif, kami 
                    berupaya meningkatkan kesadaran lingkungan di seluruh Indonesia.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-primary">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold">Visi</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Menjadi perusahaan pengelolaan sampah terdepan di Indonesia yang berkontribusi 
                    nyata dalam menciptakan lingkungan bersih, sehat, dan berkelanjutan untuk 
                    generasi mendatang.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-8 w-8 text-secondary" />
                    <h2 className="text-2xl font-bold">Misi</h2>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary mr-2 mt-2 flex-shrink-0" />
                      <span>Menyediakan layanan pengelolaan sampah berkualitas tinggi</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary mr-2 mt-2 flex-shrink-0" />
                      <span>Mengembangkan teknologi daur ulang yang inovatif</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary mr-2 mt-2 flex-shrink-0" />
                      <span>Meningkatkan kesadaran masyarakat tentang pengelolaan sampah</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary mr-2 mt-2 flex-shrink-0" />
                      <span>Menciptakan nilai ekonomi dari sampah</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Nilai-Nilai Kami</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                        <value.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <Card className="mb-12 bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-8 text-center">Pencapaian Kami</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                      <p className="text-muted-foreground">{achievement.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Commitment */}
            <Card className="bg-gradient-to-r from-primary to-secondary text-white">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4">Komitmen Kami</h2>
                <p className="leading-relaxed opacity-90 mb-4">
                  Nusa Eco Wave berkomitmen untuk terus berinovasi dan meningkatkan kualitas layanan. 
                  Kami percaya bahwa pengelolaan sampah yang baik bukan hanya tanggung jawab bisnis, 
                  tetapi juga kontribusi nyata untuk masa depan Indonesia yang lebih baik.
                </p>
                <p className="leading-relaxed opacity-90">
                  Dengan dukungan dari tim profesional, teknologi modern, dan kemitraan yang kuat, 
                  kami siap menjadi bagian dari solusi dalam mengatasi tantangan pengelolaan sampah 
                  di Indonesia. Bersama-sama, kita dapat menciptakan perubahan positif untuk lingkungan 
                  dan generasi mendatang.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
