import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria P.",
    dest: "Santorini, Grecia",
    review: "Cea mai frumoasă vacanță pe care am avut-o vreodată! True Travel a organizat totul impecabil, de la zbor până la excursii.",
    rating: 5,
  },
  {
    name: "Andrei M.",
    dest: "Dubai",
    review: "Am fost impresionat de profesionalismul echipei. Hotelul, transferurile și experiențele au fost de top. Recomand cu încredere!",
    rating: 5,
  },
  {
    name: "Elena D.",
    dest: "Maldive",
    review: "Luna de miere perfectă! Mulțumim True Travel pentru o experiență de neuitat. Vom reveni cu siguranță pentru următoarea vacanță.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-heading">Ce spun clienții noștri</h2>
        <p className="section-subheading mt-3 mx-auto">Povești reale de la călătorii care au ales True Travel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-shadow">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/80 leading-relaxed italic mb-6">"{t.review}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-primary">{t.dest}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
