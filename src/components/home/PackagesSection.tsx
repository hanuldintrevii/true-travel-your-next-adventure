import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import destGreece from "@/assets/dest-greece.jpg";
import destItaly from "@/assets/dest-italy.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import destThailand from "@/assets/dest-thailand.jpg";
import destTurkey from "@/assets/dest-turkey.jpg";

const packages = [
  { title: "Santorini & Mykonos", dest: "Grecia", duration: "7 nopți", price: "€899", date: "15 Iun - 22 Iun", image: destGreece },
  { title: "Roma & Amalfi", dest: "Italia", duration: "5 nopți", price: "€699", date: "20 Iun - 25 Iun", image: destItaly },
  { title: "Dubai Explorer", dest: "Dubai", duration: "6 nopți", price: "€1.099", date: "10 Oct - 16 Oct", image: destDubai },
  { title: "Maldive All Inclusive", dest: "Maldive", duration: "7 nopți", price: "€2.199", date: "01 Nov - 08 Nov", image: destMaldives },
  { title: "Bangkok & Phuket", dest: "Thailanda", duration: "10 nopți", price: "€1.399", date: "05 Dec - 15 Dec", image: destThailand },
  { title: "Antalya Premium", dest: "Turcia", duration: "7 nopți", price: "€549", date: "01 Jul - 08 Jul", image: destTurkey },
];

const PackagesSection = () => (
  <section className="section-padding bg-warm-sand">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-heading">Pachete de vacanță</h2>
        <p className="section-subheading mt-3 mx-auto">Oferte exclusive cu zbor, cazare și transfer incluse</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.title} className="card-travel">
            <div className="relative overflow-hidden">
              <img src={pkg.image} alt={pkg.title} className="card-travel-image" loading="lazy" />
              <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                {pkg.price}
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">{pkg.dest}</p>
              <h3 className="text-xl font-heading font-bold text-foreground mt-1">{pkg.title}</h3>
              <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{pkg.duration}</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{pkg.date}</span>
              </div>
              <Link
                to="/pachete"
                className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Vezi detalii <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PackagesSection;
