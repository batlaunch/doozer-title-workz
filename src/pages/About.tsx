import { Link } from "react-router-dom";
import { Phone, Star, Award, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ownerPortrait from "@/assets/lessley-jackson.png";

const About = () => (
  <div className="min-h-screen pt-16">
    {/* Hero */}
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.95 }} />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Doozers Title Workz</h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          Your hassle-free vehicle registration solution, built on 20+ years of experience and a passion for customer service.
        </p>
      </div>
    </section>

    {/* Owner Story */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <img
              src={ownerPortrait}
              alt="Lessley Jackson, owner of Doozers Title Workz"
              className="rounded-2xl shadow-lg w-full"
              loading="lazy"
              width={800}
              height={1000}
            />
            <div className="mt-4 flex items-center gap-2 justify-center">
              <div className="inline-flex items-center gap-1 bg-secondary/20 rounded-full px-3 py-1 text-xs font-medium text-secondary-foreground">
                <Star className="w-3 h-3 text-secondary" /> Featured in East County Biz Center
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Lessley Jackson</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lessley Jackson is the founder and driving force behind Doozers Title Workz, a specialized DMV registration and title service company serving dealerships, lenders, and private clients throughout California. With over 20 years of experience in the automotive industry, Lessley brings a rare depth of knowledge and hands-on expertise in navigating complex title and registration transactions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beginning her career in the dealer world at just 15 years old, Lessley developed a strong foundation in dealership operations, title processing, and compliance. Over the years, she has become known for her ability to resolve difficult and often time-sensitive title issues—particularly those involving out-of-state transfers, lienholder discrepancies, and incomplete or problematic documentation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Through Doozers Title Workz, Lessley partners closely with automotive dealerships, financial institutions, and industry professionals to ensure transactions are processed accurately, efficiently, and in full compliance with California DMV regulations. Her services extend beyond processing—she also provides consulting, troubleshooting, and training for dealership staff, helping clients better understand DMV procedures and avoid costly delays or penalties.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lessley is deeply committed to raising the standard within the industry. Her mission centers on continuous improvement, education, and leaving a positive, lasting impact on the automotive and DMV services space. Known for her professionalism, responsiveness, and solutions-driven approach, she has built a reputation as a trusted resource for even the most complex title challenges.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">What Drives Us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Heart, title: "Customer-First Mindset", desc: "Dedicated customer service with Title Specialists to answer all your questions and provide personalized solutions." },
            { icon: Award, title: "Expert Knowledge", desc: "20+ years of automotive industry experience means we know how to navigate even the most complex DMV situations." },
            { icon: Users, title: "Community Focused", desc: "Proudly serving El Cajon from our office inside East County Biz Center, and supporting auto dealers with licensing education." },
          ].map((v, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Auto Dealer Services */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Auto Dealer Services</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Apart from assisting individuals, Lessley also lends her expertise to new and existing auto dealers — both in-state and out-of-state — helping them with registration issues. She's also collaborating with East County Business Center to develop courses aimed at aiding new car dealers in passing their DMV dealership licensing exams and setting up their dealerships.
        </p>
        <a href="tel:6194577943">
          <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 hover:scale-105">
            <Phone className="w-5 h-5 mr-2" /> Contact for Dealer Services
          </Button>
        </a>
      </div>
    </section>
  </div>
);

export default About;
