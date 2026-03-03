import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto section-padding !py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="True Travel" className="h-10 w-auto brightness-0 invert" />
          <p className="text-secondary-foreground/70 text-sm leading-relaxed">
            Descoperă lumea alături de True Travel. Experiențe autentice de călătorie, create special pentru tine.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Linkuri rapide</h4>
          <ul className="space-y-2 text-sm">
            {["Destinații", "Pachete", "Last Minute", "Luxury Travel", "Blog", "Despre noi"].map((item) => (
              <li key={item}>
                <Link to="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Destinații populare</h4>
          <ul className="space-y-2 text-sm">
            {["Grecia", "Italia", "Spania", "Dubai", "Maldive", "Thailanda", "Turcia"].map((d) => (
              <li key={d}>
                <Link to="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">{d}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <span className="text-secondary-foreground/70">Str. Exemplu nr. 10, București, România</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
              <a href="tel:+40700000000" className="text-secondary-foreground/70 hover:text-primary transition-colors">0700 000 000</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
              <a href="mailto:info@truetravel.ro" className="text-secondary-foreground/70 hover:text-primary transition-colors">info@truetravel.ro</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/50">
        <p>© 2026 True Travel. Toate drepturile rezervate.</p>
        <div className="flex gap-4">
          <Link to="#" className="hover:text-primary transition-colors">Politica de confidențialitate</Link>
          <Link to="#" className="hover:text-primary transition-colors">Termeni și condiții</Link>
          <Link to="#" className="hover:text-primary transition-colors">Cookie-uri</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
