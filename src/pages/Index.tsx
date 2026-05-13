import { Link } from "react-router-dom";
import { Phone, Clock, MapPin, Users, Star, ChevronRight, FileText, Car, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CarCard from "@/components/CarCard";
import logoIcon from "@/assets/logo-icon.png";
import heroSloth from "@/assets/hero-sloth.jpg";
import slothProcess1 from "@/assets/sloth-process-1.png";
import slothProcess2 from "@/assets/sloth-process-2.png";
import slothProcess3 from "@/assets/sloth-process-3.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col sm:items-center sm:justify-center overflow-hidden">
        <img src={heroSloth} alt="Doozers Title Workz mascot holding a California license plate" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 container mx-auto px-4 text-center pt-20 pb-8 sm:py-20">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Skip the DMV Line —{" "}
              <span className="text-secondary">We Handle It for You</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto">
              Fast, reliable vehicle registration and title services in El Cajon.
              Over 20 years of experience making your DMV paperwork stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Burgundy CTA bar below the hero — keeps buttons clear of the license plate */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:6194577943">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 text-base px-8">
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </Button>
            </a>
            <Link to="/services">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 text-base px-8">
                Start Your Registration <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-6 bg-card border-b border-border -mt-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: "Local El Cajon Business", desc: "Conveniently located inside East County Biz Center" },
              { icon: Clock, title: "Save Hours of Wait Time", desc: "Skip the 1.5-hour average DMV wait" },
              { icon: Users, title: "Personalized Service", desc: "Title Specialists dedicated to your needs" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4">
                <div className="rounded-lg bg-secondary/20 p-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We handle the paperwork so you don't have to. From registration to title transfers, we've got you covered.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Car, title: "Vehicle Registration", desc: "New registrations and renewals processed quickly without the DMV wait." },
              { icon: FileText, title: "Title Transfers", desc: "Gifted vehicles, inheritances, purchases — we handle all transfer types." },
              { icon: Shield, title: "Out-of-State Transfers", desc: "Moving to California? We'll get your vehicle properly registered." },
            ].map((s, i) => (
              <CarCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Services <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Why Choose Doozers Title Workz?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "20+ Years of Experience", desc: "Lessley Jackson and her team bring over two decades of automotive industry expertise.", label: null },
              { title: "Local, Community-Focused", desc: "A proud part of the East County Biz Center community in El Cajon.", label: null },
              { title: "Military-Friendly", desc: "Specialized assistance for our military community with title transfers across the nation.", label: null },
              { title: "Auto Dealer Services", desc: "Expert support for auto dealers, in-state and out-of-state.", label: null },
              { title: "Fast Turnaround Times", desc: "Skip the 1.5-hour DMV wait — get your paperwork handled efficiently.", label: null },
              { title: "Friendly, Knowledgeable Staff", desc: "Title Specialists dedicated to answering all your questions with personalized solutions.", label: null },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border">
                <div className="rounded-full bg-primary/15 p-2 mt-0.5">
                  <Star className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {item.label && <p className="text-xs text-muted-foreground italic mt-1">{item.label}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { quote: "Friendly and professional service. They handled my out-of-state transfer perfectly.", name: "James R." },
              { quote: "Whether it be the kids dirt bikes, livestock trailers, the wife's SUV or boss's exotic toys, DOOZERS gets it and keeps it registered! Thank you team DOOZERS!", name: "" },
            ].map((t, i) => (
              <Card key={i} className="border border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm mb-4 italic">"{t.quote}"</p>
                  <p className="text-sm font-semibold text-muted-foreground">— {t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Skip the DMV Today
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get your registration done fast with personalized, expert service. Give us a call or send us a message through our contact page.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:6194577943">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 hover:scale-105 px-8">
                <Phone className="w-5 h-5 mr-2" /> Call Now for Quick Service
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
};

export default Index;
