import { Link } from "react-router-dom";
import destGreece from "@/assets/dest-greece.jpg";
import destItaly from "@/assets/dest-italy.jpg";
import destSpain from "@/assets/dest-spain.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import destThailand from "@/assets/dest-thailand.jpg";
import destTurkey from "@/assets/dest-turkey.jpg";
import destEurope from "@/assets/dest-europe-city.jpg";

const regions = [
  {
    name: "Europa",
    destinations: [
      { name: "Grecia", image: destGreece, season: "Mai - Octombrie", price: "de la €399" },
      { name: "Italia", image: destItaly, season: "Aprilie - Octombrie", price: "de la €349" },
      { name: "Spania", image: destSpain, season: "Mai - Septembrie", price: "de la €299" },
      { name: "Turcia", image: destTurkey, season: "Mai - Octombrie", price: "de la €249" },
      { name: "City Break Europa", image: destEurope, season: "Tot anul", price: "de la €199" },
    ],
  },
  {
    name: "Asia & Orientul Mijlociu",
    destinations: [
      { name: "Dubai", image: destDubai, season: "Octombrie - Aprilie", price: "de la €599" },
      { name: "Thailanda", image: destThailand, season: "Noiembrie - Martie", price: "de la €799" },
      { name: "Maldive", image: destMaldives, season: "Noiembrie - Aprilie", price: "de la €1.299" },
    ],
  },
];

const Destinations = () => (
  <div className="pt-20">
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold">Destinații de vacanță</h1>
        <p className="text-secondary-foreground/70 mt-3 text-lg max-w-xl mx-auto">
          Explorează cele mai frumoase destinații din lume
        </p>
      </div>
    </section>

    {regions.map((region) => (
      <section key={region.name} className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-heading !text-3xl mb-8">{region.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {region.destinations.map((dest) => (
              <Link key={dest.name} to="/contact" className="card-travel">
                <div className="relative overflow-hidden h-56">
                  <img src={dest.image} alt={dest.name} className="card-travel-image h-full" loading="lazy" />
                  <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {dest.price}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-heading font-bold text-foreground">{dest.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Sezon recomandat: {dest.season}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    ))}
  </div>
);

export default Destinations;
