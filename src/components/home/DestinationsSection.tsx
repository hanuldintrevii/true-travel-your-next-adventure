import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import destGreece from "@/assets/dest-greece.jpg";
import destItaly from "@/assets/dest-italy.jpg";
import destSpain from "@/assets/dest-spain.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import destThailand from "@/assets/dest-thailand.jpg";
import destTurkey from "@/assets/dest-turkey.jpg";
import destEurope from "@/assets/dest-europe-city.jpg";

const destinations = [
  { name: "Grecia", price: "de la €399", teaser: "Insule de vis și apus legendar", image: destGreece, large: true },
  { name: "Italia", price: "de la €349", teaser: "Artă, cultură și gelato", image: destItaly },
  { name: "Spania", price: "de la €299", teaser: "Plaje spectaculoase și tapas", image: destSpain },
  { name: "Dubai", price: "de la €599", teaser: "Lux și aventură în deșert", image: destDubai, large: true },
  { name: "Maldive", price: "de la €1.299", teaser: "Paradisul tropical suprem", image: destMaldives },
  { name: "Thailanda", price: "de la €799", teaser: "Temple, plaje și street food", image: destThailand },
  { name: "Turcia", price: "de la €249", teaser: "Între Orient și Occident", image: destTurkey, large: true },
  { name: "City Break Europa", price: "de la €199", teaser: "Capitalele Europei te așteaptă", image: destEurope },
];

const DestinationsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
        <div>
          <h2 className="section-heading">Destinații populare</h2>
          <p className="section-subheading mt-3">Cele mai căutate destinații de vacanță pentru călătorii din România</p>
        </div>
        <Link to="/destinatii" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
          Toate destinațiile <ArrowRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {destinations.map((dest, i) => (
          <Link
            key={dest.name}
            to="/destinatii"
            className={`card-travel relative ${dest.large ? "sm:col-span-2" : ""} ${i >= 4 ? "hidden lg:block" : ""}`}
          >
            <div className="relative overflow-hidden h-64 sm:h-72">
              <img
                src={dest.image}
                alt={dest.name}
                className="card-travel-image h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {dest.price}
                </span>
                <h3 className="text-xl font-heading font-bold text-primary-foreground">{dest.name}</h3>
                <p className="text-primary-foreground/75 text-sm mt-1">{dest.teaser}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default DestinationsSection;
