import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, MapPin, Clock } from "lucide-react";
import careerImage from "@/assets/career-team.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Career = () => {
  const fullTimeJobs = [
    {
      title: "Waste Management Specialist",
      location: "Jakarta",
      type: "Full Time",
      description: "Mengelola operasional pengelolaan sampah dan mengembangkan strategi efisiensi.",
    },
    {
      title: "Recycling Operations Manager",
      location: "Surabaya",
      type: "Full Time",
      description: "Memimpin tim operasional fasilitas daur ulang dan memastikan target produksi tercapai.",
    },
    {
      title: "Environmental Engineer",
      location: "Bandung",
      type: "Full Time",
      description: "Merancang dan mengimplementasikan solusi teknis untuk pengelolaan sampah berkelanjutan.",
    },
    {
      title: "Business Development Manager",
      location: "Jakarta",
      type: "Full Time",
      description: "Mengembangkan kemitraan dan peluang bisnis baru di sektor pengelolaan sampah.",
    },
  ];

  const internships = [
    {
      title: "Environmental Internship Program",
      location: "Jakarta",
      duration: "3-6 Bulan",
      description: "Belajar langsung tentang pengelolaan sampah dan praktik ramah lingkungan.",
    },
    {
      title: "Marketing & Communications Intern",
      location: "Jakarta",
      duration: "3-6 Bulan",
      description: "Mendukung kampanye awareness dan komunikasi perusahaan.",
    },
    {
      title: "Operations Intern",
      location: "Surabaya",
      duration: "3-6 Bulan",
      description: "Pengalaman hands-on dalam operasional daur ulang dan logistik.",
    },
  ];

  const benefits = [
    "Gaji kompetitif sesuai industri",
    "BPJS Kesehatan & Ketenagakerjaan",
    "Tunjangan transportasi & makan",
    "Program pelatihan & pengembangan",
    "Lingkungan kerja yang mendukung",
    "Kesempatan karir yang jelas",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${careerImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Bergabunglah dengan Tim Kami</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Bangun karir Anda sambil berkontribusi untuk lingkungan yang lebih baik
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Why Join Us */}
            <Card className="mb-12 bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4">Mengapa Bergabung dengan Nusa Eco Wave?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Kami adalah perusahaan pengelolaan sampah terkemuka di Indonesia yang berkomitmen untuk 
                  menciptakan masa depan yang berkelanjutan. Dengan tim profesional dan teknologi modern, 
                  kami terus berinovasi dalam solusi pengelolaan sampah.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Full Time Positions */}
            <div id="fulltime" className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Posisi Penuh Waktu</h2>
              </div>
              <div className="grid gap-6">
                {fullTimeJobs.map((job, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                          <p className="text-muted-foreground mb-4">{job.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.type}
                            </div>
                          </div>
                        </div>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                          Lamar Sekarang
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Internship Positions */}
            <div id="internship" className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-8 w-8 text-secondary" />
                <h2 className="text-3xl font-bold">Program Magang</h2>
              </div>
              <Card className="mb-6 bg-secondary/10">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">New Internship Program 2025</h3>
                  <p className="text-muted-foreground">
                    Kami membuka kesempatan magang untuk fresh graduate dan mahasiswa tingkat akhir 
                    yang passionate tentang lingkungan. Program magang kami dirancang untuk memberikan 
                    pengalaman praktis dan mentoring dari profesional berpengalaman.
                  </p>
                </CardContent>
              </Card>
              <div className="grid gap-6">
                {internships.map((internship, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{internship.title}</h3>
                          <p className="text-muted-foreground mb-4">{internship.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {internship.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {internship.duration}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" className="whitespace-nowrap">
                          Daftar Program
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary to-secondary text-white">
              <CardContent className="pt-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Tidak Menemukan Posisi yang Cocok?</h3>
                <p className="mb-6 text-lg opacity-90">
                  Kirimkan CV dan surat lamaran Anda untuk peluang di masa depan
                </p>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Kirim Lamaran Umum
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
