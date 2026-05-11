import { Link } from "react-router-dom";
import { Phone, Star, Award, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ownerPortrait from "@/assets/lessley-jackson.png";
import teamPlaceholder from "@/assets/patty.png";
import mascotDog from "@/assets/bernie.jpg";

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

    {/* Meet Our Team */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">Meet Our Team</h2>

        {/* Lessley Jackson */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">
          <div>
            <img
              src={ownerPortrait}
              alt="Lessley Jackson, owner of Doozers Title Workz"
              className="rounded-2xl shadow-lg w-full"
              loading="lazy"
              width={800}
              height={1000}
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Meet Lessley Jackson</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Meet Lessley Jackson, the founder and driving force behind Doozers Title Workz. While most professionals would prefer almost any task over navigating the DMV, Lessley actually thrives on it. She has built a specialized service that manages registration and title complexities for dealerships, lenders, and private clients throughout California, bringing over 20 years of "seen it all" expertise to the table.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lessley's career in the automotive industry began at the age of 15, giving her a foundational understanding of dealership operations and title compliance. Over the decades, she has earned a reputation as the premier fixer for time-sensitive title emergencies, whether the challenge involves a messy out-of-state transfer, a lienholder who has gone missing, or problematic documentation that others find impossible to resolve.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Through Doozers Title Workz, Lessley partners with industry professionals to ensure every transaction is processed with speed, accuracy, and full California DMV compliance. Her role extends beyond processing; she also serves as a consultant and trainer, equipping dealership teams with the skills to avoid costly "oops" moments and administrative penalties.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lessley is on a mission to elevate industry standards through a focus on education and professional excellence. Known for her responsiveness and solutions-driven mindset, she is the first call for many when a title situation becomes complicated. She has built her career as a trusted expert who handles the most complex regulatory challenges without breaking a sweat.
            </p>
          </div>
        </div>

        {/* Second Team Member - Placeholder */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">
          <div>
            <img
              src={teamPlaceholder}
              alt="Patty, DMV processing specialist at Doozers Title Workz"
              className="rounded-2xl shadow-lg w-full"
              loading="lazy"
              width={800}
              height={1000}
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Meet Patty</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Patty brings over 30 years of hands-on DMV processing experience, fueled by a deep-rooted understanding of the dealer world and its ever-changing demands. She is the type of person who thrives in fast-paced environments, constantly challenging herself to process more deals today than she did yesterday.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Known for her sharp attention to detail, Patty ensures every transaction is handled with absolute accuracy and care. When she isn't busy conquering mountains of paperwork, she has a major passion for fashion. She is a serious shoe enthusiast and loves growing her collection whenever she gets the chance.
            </p>
          </div>
        </div>

        {/* Mascot Dog - Placeholder */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <img
              src={mascotDog}
              alt="Doozers Title Workz mascot dog"
              className="rounded-2xl shadow-lg w-full"
              loading="lazy"
              width={800}
              height={1000}
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Meet Bernie, Our Mascot</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Meet Bernie, the heart and official personality hire at Doozers Title Workz. As our beloved mascot, Bernie truly loves her job and understands that the secret to a successful business is the perfect balance between professional tasks and delicious treats.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              She takes her role as Chief Morale Officer very seriously, keeping the team's spirits high while ensuring her own treat quota stays even higher. When she finally punches out for the day, Bernie heads straight to her grandma's house to soak up some undivided attention and cash in on her hard-earned belly rubs. It's a tough job, but someone has to do it.
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
          Apart from assisting individuals, Lessley and her team also lend their expertise to new and existing auto dealers, both in-state and out-of-state, helping them with registration issues. She's also collaborating with East County Business Center to develop courses aimed at aiding new car dealers in passing their DMV dealership licensing exams and setting up their dealerships.
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
