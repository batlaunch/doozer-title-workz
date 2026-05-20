import { Link } from "react-router-dom";
import { Phone, Car, FileText, Shield, Tag, Truck } from "lucide-react";
import slothProcess1 from "@/assets/sloth-process-1.png";
import slothProcess2 from "@/assets/sloth-process-2.png";
import slothProcess3 from "@/assets/sloth-process-3.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CarCard from "@/components/CarCard";
import SEO from "@/components/SEO";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  { icon: Car, title: "Vehicle Registration (New & Renewal)", desc: "Whether you're registering a new vehicle or renewing your current registration, we process everything quickly so you can skip the DMV wait.", label: null },
  { icon: FileText, title: "Title Transfers", desc: "Gifted vehicles, purchases, inheritances — we handle all types of title transfers with expertise, ensuring no documents are missed.", label: null },
  { icon: Shield, title: "Out-of-State Title Transfers", desc: "Moving to California? We specialize in transferring out-of-state titles, navigating the complex requirements so you don't have to.", label: null },
  { icon: Tag, title: "Replacement Tags & Stickers", desc: "Lost registration tags? We'll get your replacements processed quickly.", label: null },
  { icon: Truck, title: "New and Used Auto Dealer Registration", desc: "Specialized support for auto dealers with registration issues, both in-state and out-of-state.", label: null },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    description: s.desc,
  })),
};

const Services = () => (
  <div className="min-h-screen pt-16">
    <SEO
      title="Services | Doozers Title Workz — El Cajon, CA"
      description="Vehicle registration, title transfers, out-of-state transfers, replacement tags, and auto dealer registration support in El Cajon, CA."
      path="/services"
      jsonLd={servicesJsonLd}
    />
    {/* Hero */}
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={servicesBg} alt="Vehicle documents and registration" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.9 }} />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          We handle the paperwork so you can skip the DMV. Fast, reliable, and personalized.
        </p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 bg-card" aria-labelledby="services-grid-heading">
      <div className="container mx-auto px-4">
        <h2 id="services-grid-heading" className="sr-only">What we offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <CarCard key={i} icon={s.icon} title={s.title} desc={s.desc} label={s.label} />
          ))}
        </div>
      </div>
    </section>


    {/* How It Works */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">How It Workz</h2>
          <p className="text-muted-foreground">Three simple steps to get back on the road.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { img: slothProcess1, title: "Make Appointment", desc: "Contact us to schedule a convenient time for your service." },
            { img: slothProcess2, title: "Gather Requested Paperwork", desc: "We'll let you know exactly what documents you need to bring." },
            { img: slothProcess3, title: "We Handle the Rest", desc: "Sit back while our Title Specialists take care of everything." },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <img src={item.img} alt={item.title} className="w-24 h-24 mx-auto mb-4 object-contain" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">Get Your Registration Done Fast</h2>
        <p className="text-primary-foreground/80 mb-8">Call us today or visit our El Cajon office.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:6194577943">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 hover:scale-105 px-8">
              <Phone className="w-5 h-5 mr-2" /> Call Now
            </Button>
          </a>
          <Link to="/contact">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 hover:scale-105 px-8">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
