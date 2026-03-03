import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Te-ai abonat cu succes! Vei primi cele mai bune oferte.");
    setEmail("");
  };

  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <h2 className="section-heading !text-2xl sm:!text-3xl">Primește cele mai bune oferte</h2>
        <p className="text-muted-foreground mt-3 mb-8">
          Abonează-te la newsletter-ul nostru pentru oferte last minute, reduceri exclusive și inspirație de călătorie.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Adresa ta de email"
            className="flex-1 px-5 py-3.5 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <button type="submit" className="btn-primary-travel !py-3.5">
            Abonează-te
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
