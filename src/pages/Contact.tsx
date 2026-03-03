import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", travelers: "", dates: "", destination: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Cererea ta a fost trimisă! Te vom contacta în cel mai scurt timp.");
    setForm({ name: "", email: "", phone: "", travelers: "", dates: "", destination: "", message: "" });
  };

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <div className="pt-20">
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold">Contact</h1>
          <p className="text-secondary-foreground/70 mt-3 text-lg max-w-xl mx-auto">
            Suntem aici să te ajutăm să planifici vacanța perfectă
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="section-heading !text-2xl mb-6">Cere ofertă personalizată</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: "name", label: "Nume complet", type: "text", span: false },
                { id: "email", label: "Email", type: "email", span: false },
                { id: "phone", label: "Telefon", type: "tel", span: false },
                { id: "travelers", label: "Număr călători", type: "text", span: false },
                { id: "dates", label: "Date preferate", type: "text", span: false },
                { id: "destination", label: "Destinație dorită", type: "text", span: false },
              ].map((f) => (
                <div key={f.id}>
                  <label className="block text-sm font-medium mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    required={f.id === "name" || f.id === "email"}
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => update(f.id, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1.5">Mesaj</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground outline-none focus:ring-2 focus:ring-primary transition resize-none"
                />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary-travel flex items-center gap-2">
                  <Send className="h-5 w-5" /> Trimite cererea
                </button>
              </div>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="section-heading !text-2xl mb-6">Informații contact</h2>
            {[
              { icon: MapPin, title: "Adresă", text: "Str. Exemplu nr. 10, București" },
              { icon: Phone, title: "Telefon", text: "0700 000 000" },
              { icon: Mail, title: "Email", text: "info@truetravel.ro" },
              { icon: Clock, title: "Program", text: "Luni - Vineri: 09:00 - 18:00" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
