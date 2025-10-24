import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespon pesan Anda.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@nusaecowave.com",
      detail: "info@nusaecowave.com",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "(021) 9033 9840 42",
      detail: "",
    },
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jalan Kyai Maja Gedung Graha Jakarta Tower lt 10",
      detail: "Jakarta Selatan 12345, Indonesia",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 08:00 - 17:00",
      detail: "Kecuali Hari Libur Nasional",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ada pertanyaan atau ingin berkonsultasi? Tim kami siap membantu Anda
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-sm text-muted-foreground">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.detail}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Layanan Darurat 24/7</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Untuk keadaan darurat, hubungi hotline kami
                    </p>
                    <p className="text-2xl font-bold text-primary">+62 811 2345 6789</p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nama Lengkap *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Masukkan nama Anda"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="nama@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Nomor Telepon</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+62 xxx xxxx xxxx"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subjek *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Perihal pesan"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Pesan *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tuliskan pesan Anda di sini..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Kirim Pesan
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>


            {/* Map Section */}
            <Card className="mt-8">
              <CardContent className="p-0">
                <div className="bg-muted h-[400px] rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1718899440175!2d106.78828957785632!3d-6.241063377624889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1151919ff23%3A0xfe1f15fd8ec2d109!2sJl.%20Kyai%20Maja%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1761162041580!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }} // Menghilangkan border default iframe
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Peta Lokasi"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
