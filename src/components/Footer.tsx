import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import heroImage1 from "@/assets/herohome.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={heroImage1}
                alt="Nusa Eco Wave - Pengelolaan Sampah Modern"
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-lg font-bold text-primary">Nusa Eco Wave</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Solusi pengelolaan sampah terpadu untuk Indonesia yang lebih bersih dan berkelanjutan.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-green-500 hover:bg-black hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-green-500 hover:bg-black hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-green-500 hover:bg-black hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-green-500 hover:bg-black hover:text-primary-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/recycling" className="text-muted-foreground hover:text-primary transition-colors">
                  Daur Ulang
                </Link>
              </li>
              <li>
                <Link to="/services/transport" className="text-muted-foreground hover:text-primary transition-colors">
                  Pengangkutan Sampah
                </Link>
              </li>
              <li>
                <Link to="/services/cleaning" className="text-muted-foreground hover:text-primary transition-colors">
                  Pembersihan Lingkungan
                </Link>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h3 className="font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-muted-foreground hover:text-primary transition-colors">
                  Karir
                </Link>
              </li>
              <li>
                <Link to="/articles/3r-concept" className="text-muted-foreground hover:text-primary transition-colors">
                  Artikel
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">contact@nusaecowave.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">(021) 9033 9840 42</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">Jakarta Selatan, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nusa Eco Wave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
