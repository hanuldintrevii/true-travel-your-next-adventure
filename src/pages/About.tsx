import { Globe, Users, Award, Heart } from "lucide-react";

const stats = [
  { value: "10+", label: "Ani experiență" },
  { value: "15.000+", label: "Clienți mulțumiți" },
  { value: "50+", label: "Destinații" },
  { value: "98%", label: "Satisfacție clienți" },
];

const About = () => (
  <div className="pt-20">
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold">Despre True Travel</h1>
        <p className="text-secondary-foreground/70 mt-3 text-lg max-w-xl mx-auto">
          Pasiunea noastră e să te ajutăm să descoperi lumea
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <div className="prose prose-lg text-foreground/80 space-y-5">
          <p>
            True Travel s-a născut din pasiunea pentru călătorii și dorința de a oferi experiențe autentice, 
            memorabile și personalizate fiecărui client. Cu peste 10 ani de experiență în industria turismului, 
            echipa noastră de consultanți dedicați te ajută să descoperi cele mai frumoase destinații din lume.
          </p>
          <p>
            Credem că fiecare călătorie ar trebui să fie unică, de aceea oferim planificare personalizată, 
            parteneriate cu cele mai bune hoteluri și companii aeriene, și suport constant pe parcursul 
            întregii experiențe de călătorie.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-accent">
              <p className="text-3xl font-heading font-bold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
