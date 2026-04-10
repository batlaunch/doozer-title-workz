import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-3">Doozers Title Workz</h3>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            Your hassle-free vehicle registration solution in El Cajon, CA. Over 20 years of automotive industry experience.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary-foreground transition-colors">About</Link>
            <Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact Info</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>270 E Douglas Ave, Suite 104, El Cajon, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <a href="tel:6194326363" className="hover:text-primary-foreground">(619) 432-6363</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <a href="mailto:lessley@doozerstitles.com" className="hover:text-primary-foreground">lessley@doozerstitles.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Doozers Title Workz. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
