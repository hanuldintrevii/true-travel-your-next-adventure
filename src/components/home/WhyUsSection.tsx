import { Shield, Sparkles, Headphones, Heart, Award, Globe } from "lucide-react";

const reasons = [
  { icon: Sparkles, title: "Experiențe unice", desc: "Vacanțe create cu grijă și atenție la fiecare detaliu" },
  { icon: Shield, title: "Cele mai bune prețuri", desc: "Garanția celui mai bun preț și transparență totală" },
  { icon: Globe, title: "Parteneri de încredere", desc: "Colaborăm cu cele mai bune hoteluri și companii aeriene" },
  { icon: Headphones, title: "Suport 24/7", desc: "Echipa noastră te asistă înainte, în timpul și după vacanță" },
  { icon: Heart, title: "Planificare personalizată", desc: "Fiecare călătorie este adaptată dorințelor tale" },
  { icon: Award, title: "Peste 10 ani experiență", desc: "Mii de clienți mulțumiți și vacanțe reușite" },
];

const WhyUsSection = () => (
  <section className="section-padding bg-secondary text-secondary-foreground">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
          De ce <span className="text-primary">True Travel</span>?
        </h2>
        <p className="text-secondary-foreground/70 text-lg mt-3 max-w-2xl mx-auto">
          Alegem cele mai bune experiențe pentru tine
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <r.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg">{r.title}</h3>
              <p className="text-secondary-foreground/65 text-sm mt-1">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
