import { Plane, Palmtree, Sun, Snowflake, Crown, Clock, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { label: "City Breaks", icon: Plane, desc: "Weekend-uri în capitalele Europei" },
  { label: "Vacanțe Exotice", icon: Palmtree, desc: "Evadare pe plaje tropicale" },
  { label: "Vacanțe de Vară", icon: Sun, desc: "Soare, mare și relaxare" },
  { label: "Ski & Iarnă", icon: Snowflake, desc: "Aventură pe pârtii" },
  { label: "Luxury Travel", icon: Crown, desc: "Experiențe premium" },
  { label: "Last Minute", icon: Clock, desc: "Oferte de ultimă oră" },
  { label: "Honeymoon", icon: Heart, desc: "Luna de miere perfectă" },
  { label: "Familie", icon: Users, desc: "Vacanțe pentru toată familia" },
];

const CategoriesSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-heading">Tipuri de vacanțe</h2>
        <p className="section-subheading mt-3 mx-auto">Găsește vacanța perfectă pentru tine</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            to="/pachete"
            className="group p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <cat.icon className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-heading font-semibold text-foreground">{cat.label}</h3>
            <p className="text-xs text-muted-foreground mt-1">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
