import { useState } from "react";
import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  { q: "Do I need an appointment?", a: "Walk-ins are welcome! However, calling ahead can help ensure we have everything ready for your visit." },
  { q: "What documents should I bring?", a: "This depends on the service needed. Generally, bring your vehicle title, current registration, valid ID, and proof of insurance. Call us and we'll give you a specific list." },
  { q: "How long does it take?", a: "Most services are completed much faster than a DMV visit. Many transactions can be handled the same day." },
  { q: "Are you affiliated with the DMV?", a: "We are an independent vehicle registration and title service provider. We are not the DMV, but we process DMV paperwork on your behalf." },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      "New message from the Doozer Title Workz website:",
      `Name: ${form.name}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Service Needed: ${form.service || "Not provided"}`,
      `Message: ${form.message || "Not provided"}`,
    ].join("\n");

    const html = `
      <h2>New message from the Doozer Title Workz website</h2>
      <p><strong>Name:</strong> ${form.name}</p>
      <p><strong>Phone:</strong> ${form.phone || "Not provided"}</p>
      <p><strong>Service Needed:</strong> ${form.service || "Not provided"}</p>
      <p><strong>Message:</strong><br />${form.message || "Not provided"}</p>
    `;

    try {
      const response = await fetch("https://batlaunch.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "info@doozerstitles.com",
          subject: "Contact request from website form",
          text,
          html,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({ title: "Message Sent!", description: "We'll get back to you as soon as possible." });
      setForm({ name: "", phone: "", service: "", message: "" });
    } catch {
      toast({
        title: "Message Failed",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.95 }} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Ready to skip the DMV? Reach out today — we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-sm text-muted-foreground">270 E Douglas Ave, Suite 104<br />El Cajon, CA</p>
                    <p className="text-xs text-muted-foreground italic">Inside East County Biz Center</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3"><Phone className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:6194577943" className="text-sm text-primary hover:underline">(619) 457-7943</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3"><Mail className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:info@doozerstitles.com" className="text-sm text-primary hover:underline">info@doozerstitles.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3"><Clock className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Hours</h3>
                    <p className="text-sm text-muted-foreground">Mon–Fri: 9:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  title="Doozers Title Workz location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.8!2d-116.9625!3d32.7948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s270+E+Douglas+Ave+El+Cajon+CA!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                  <p className="text-sm text-muted-foreground mb-6">Fill out the form and we'll get back to you quickly.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Name *</label>
                      <Input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                      <Input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(619) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Service Needed</label>
                      <Input
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        placeholder="e.g. Title Transfer, Registration Renewal"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                      <Textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us how we can help..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90 hover:scale-105">
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="border border-border">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
