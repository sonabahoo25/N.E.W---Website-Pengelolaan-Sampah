import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import heroImage1 from "@/assets/herohome.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={heroImage1}
              alt="Nusa Eco Wave - Pengelolaan Sampah Modern"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Nusa Eco Wave
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Jasa Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/services") || isActive("/services/recycling") || isActive("/services/transport") || isActive("/services/cleaning") ? "text-primary" : ""}>
                    <strong>JASA</strong>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services/recycling"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Daur Ulang</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Layanan daur ulang sampah profesional
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services/transport"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Pengangkutan Sampah</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Pengangkutan sampah terjadwal dan terpercaya
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services/cleaning"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Pembersihan Lingkungan</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Pembersihan area publik dan lingkungan
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Artikel Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/articles") || location.pathname.startsWith("/articles/") ? "text-primary" : ""}>
                    <strong>ARTIKEL</strong>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/articles/3r-concept"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Konsep 3R</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Reduce, Reuse, Recycle untuk lingkungan
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/articles/waste-types"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Jenis & Dampak Sampah</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Memahami berbagai jenis sampah dan dampaknya
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/articles/plastic-problem"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Fenomena Sampah Plastik</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Krisis sampah plastik di Indonesia
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Karir Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/career") ? "text-primary" : ""}>
                    <strong>KARIR</strong>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/career#fulltime"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Kerja Penuh Waktu</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Posisi full-time untuk profesional
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/career#internship"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Program Magang</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Kesempatan magang untuk fresh graduate
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/about">
              <Button variant="ghost" className={isActive("/about") ? "text-primary" : ""}>
                <strong>TENTANG KAMI</strong>
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="ghost" className={isActive("/contact") ? "text-primary" : ""}>
                <strong>KONTAK</strong>
              </Button>
            </Link>

            <Link to="/auth">
              <Button className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90">
                <strong>LOGIN</strong>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/services/recycling" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Daur Ulang
              </Button>
            </Link>
            <Link to="/services/transport" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Pengangkutan Sampah
              </Button>
            </Link>
            <Link to="/services/cleaning" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Pembersihan Lingkungan
              </Button>
            </Link>
            <Link to="/articles/3r-concept" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Artikel: Konsep 3R
              </Button>
            </Link>
            <Link to="/articles/waste-types" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Artikel: Jenis Sampah
              </Button>
            </Link>
            <Link to="/articles/plastic-problem" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Artikel: Sampah Plastik
              </Button>
            </Link>
            <Link to="/career" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Karir
              </Button>
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Tentang Kami
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Kontak
              </Button>
            </Link>
            <Link to="/auth" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground">
                Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
