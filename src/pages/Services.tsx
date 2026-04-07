import { Link } from "react-router-dom";
import { Phone, Car, FileText, Shield, RefreshCw, Tag, Copy, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  { icon: Car, title: "Vehicle Registration (New & Renewal)", desc: "Whether you're registering a new vehicle or renewing your current registration, we process everything quickly so you can skip the DMV wait.", label: null },
  { icon: FileText, title: "Title Transfers", desc: "Gifted vehicles, purchases, inheritances — we handle all types of title transfers with expertise, ensuring no documents are missed.", label: null },
  { icon: Shield, title: "Out-of-State Title Transfers", desc: "Moving to California? We specialize in transferring out-of-state titles, navigating the complex requirements so you don't have to.", label: null },
  { icon: Tag, title: "Replacement Tags & Stickers", desc: "Lost or damaged registration tags? We'll get your replacements processed fast.", label: "[EXAMPLE SERVICE – EDIT NEEDED]" },
  { icon: Copy, title: "Duplicate Registration", desc: "Need a copy of your registration? We can help you obtain a duplicate quickly.", label: "[EXAMPLE SERVICE – EDIT NEEDED]" },
  { icon: Truck, title: "Auto Dealer Registration Services", desc: "Specialized support for new and existing auto dealers with registration issues, both in-state and out-of-state.", label: null },
];

const Services = () => (
  <div className="min-h-screen pt-16">
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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <Card key={i} className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                {s.label && <p className="text-xs text-muted-foreground italic mt-2">{s.label}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">How It Works</h2>
          <p className="text-xs text-muted-foreground italic">[EXAMPLE PROCESS – EDIT NEEDED]</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          {[
            { step: "1", title: "Bring Your Documents", desc: "Gather your vehicle paperwork and visit us." },
            { step: "2", title: "We Handle the Paperwork", desc: "Our specialists process everything quickly." },
            { step: "3", title: "Get Back on the Road", desc: "Walk out with everything taken care of." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center flex-1">
              <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
              {i < 2 && <ArrowRight className="w-6 h-6 text-muted-foreground mt-4 hidden md:block rotate-0" />}
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
        <p className="text-primary-foreground/80 mb-8">Call us today or visit our El Cajon office. No appointment needed.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:6194326363">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
              <Phone className="w-5 h-5 mr-2" /> Call Now
            </Button>
          </a>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
