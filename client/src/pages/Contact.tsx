import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Instagram, Linkedin, Mail, Phone, Facebook } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Submit to Formspree endpoint
      const response = await fetch("https://formspree.io/f/hello@brendabastell.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Message sent! I'll be in touch soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Have questions or ready to begin your journey? I'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a
                          href="mailto:hello@brendabastell.com"
                          className="text-accent hover:underline"
                        >
                          hello@brendabastell.com
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <a
                          href="tel:+1234567890"
                          className="text-accent hover:underline"
                        >
                          (123) 456-7890
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                    Connect on Social
                  </h2>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/brendabastell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-lg text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/brendabastell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-lg text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/brendabastell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-lg text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">
                    Response Time
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    I typically respond to inquiries within 24-48 hours. For urgent matters, please call.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg border border-border p-8 md:p-10">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your intentions or questions..."
                        className="w-full min-h-32"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                      size="lg"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground mt-6 text-center">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
              Common Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">
                  What's the best way to reach you?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Email is best for detailed inquiries or scheduling. For urgent matters, feel free to call. I check messages regularly and respond promptly.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">
                  Do you offer virtual sessions?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Breathwork sessions can be conducted virtually. Plant medicine facilitation requires an in-person setting. Contact me to discuss your specific situation.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">
                  What if I have a specific question about a service?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Send me a message with your question, and I'll provide a thorough, personalized response. I'm here to ensure you feel fully informed before booking.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
