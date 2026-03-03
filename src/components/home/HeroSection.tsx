import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-santorini.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Santorini, Grecia - destinație de vacanță"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="gradient-overlay" />

    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
          Descoperă lumea cu{" "}
          <span className="text-gradient">True Travel</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/85 mb-10 animate-slide-up animation-delay-200 font-light max-w-2xl mx-auto">
          Vacanțe memorabile create special pentru tine. Experiențe autentice în cele mai frumoase colțuri ale lumii.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animation-delay-400">
          <Link to="/destinatii" className="btn-primary-travel">
            Explorează destinații
          </Link>
          <Link to="/contact" className="btn-outline-travel !border-primary-foreground !text-primary-foreground hover:!bg-primary-foreground/10">
            Cere ofertă personalizată
          </Link>
        </div>

        {/* Search bar */}
        <div className="bg-card/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl max-w-3xl mx-auto animate-slide-up animation-delay-600">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-muted">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <input
                type="text"
                placeholder="Unde vrei să mergi?"
                className="bg-transparent w-full text-sm outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-muted">
              <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
              <input
                type="text"
                placeholder="Când?"
                className="bg-transparent w-full text-sm outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-muted">
              <Users className="h-5 w-5 text-primary flex-shrink-0" />
              <input
                type="text"
                placeholder="Călători"
                className="bg-transparent w-full text-sm outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <button className="btn-primary-travel !py-3 !px-6 flex items-center justify-center gap-2 !text-base !rounded-xl">
              <Search className="h-5 w-5" />
              Caută
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
