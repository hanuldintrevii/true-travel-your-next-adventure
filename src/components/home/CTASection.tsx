import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-santorini.jpg";

const CTASection = () => (
  <section className="relative py-24 sm:py-32 overflow-hidden">
    <img
      src={heroImg}
      alt="Planifică vacanța perfectă"
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-secondary/80" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
        Planifică vacanța perfectă
      </h2>
      <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
        Spune-ne unde visezi să călătorești și noi creăm experiența perfectă pentru tine.
      </p>
      <Link to="/contact" className="btn-primary-travel inline-block">
        Cere ofertă personalizată
      </Link>
    </div>
  </section>
);

export default CTASection;
