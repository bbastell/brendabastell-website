import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Info } from "lucide-react";

export default function Offerings() {
  const offerings = [
    {
      id: 1,
      title: "THE FOUNDATION",
      subtitle: "Mini Psilocybin Session",
      duration: "1.5 hours",
      price: "$500",
      description: "Low-dose introductory psilocybin experience. Entry point for people curious but not ready for a full journey.",
      includes: [
        "Brief preparation and intention setting",
        "Facilitated low-dose journey",
        "Grounding and integration support",
        "Professional facilitation in a safe, private space"
      ],
      color: "from-honey/20 to-terracotta/20"
    },
    {
      id: 2,
      title: "THE DEEP DIVE",
      subtitle: "Full Sacred Medicine Session",
      duration: "5-6 hours",
      price: "$2,250",
      description: "Using psilocybin, MDMA, or combination with IFS (Parts Work), NLP, and Somatic Work.",
      includes: [
        "Discovery call to understand your intentions",
        "Comprehensive preparation session",
        "5-6 hour facilitated journey",
        "Integration call 5-10 days later",
        "Professional facilitation with advanced modalities"
      ],
      color: "from-sea-glass/20 to-sage-mist/20"
    },
    {
      id: 3,
      title: "BREATHWORK SESSION",
      subtitle: "Conscious Connected Breathing",
      duration: "60 minutes",
      price: "$150",
      description: "Release physical tension and recalibrate your nervous system through guided conscious connected breathing.",
      includes: [
        "Personalized breathwork protocol",
        "60-minute guided session in a calm environment",
        "Integration discussion and insights",
        "Take-home practices for daily use",
        "Ongoing email support between sessions"
      ],
      color: "from-terracotta/20 to-honey/20"
    },
    {
      id: 4,
      title: "THE CATALYST",
      subtitle: "3-Month Transformation Container",
      duration: "Ongoing",
      price: "$3,500",
      description: "Comprehensive transformation journey combining medicine work, breathwork, and deep integration coaching.",
      includes: [
        "1 Full Sacred Medicine Session (5-6 hrs)",
        "1-2 Mini Psilocybin Sessions (1.5 hrs)",
        "1 Breathwork Session",
        "6 bi-weekly integration and coaching sessions (IFS & NLP)",
        "Text support between sessions"
      ],
      color: "from-sage-mist/20 to-honey/20"
    },
    {
      id: 5,
      title: "THE MASTERWORK",
      subtitle: "6-Month Transformation Container",
      duration: "Ongoing",
      price: "$7,500",
      description: "Deep, sustained transformation with multiple medicine sessions, breathwork, and intensive coaching over six months.",
      includes: [
        "2 Full Sacred Medicine Sessions (5-6 hrs), spaced ~3 months apart",
        "2-3 Mini Psilocybin Sessions (1.5 hrs)",
        "2-3 Breathwork Sessions",
        "12 bi-weekly deep-dive coaching and integration sessions",
        "Priority scheduling and 24/7 text/Voxer support",
        "Customized somatic practices for daily application"
      ],
      color: "from-terracotta/20 to-sea-glass/20"
    },
    {
      id: 6,
      title: "FIRE WITHIN RETREAT",
      subtitle: "Co-facilitated with Andrea Warkentin",
      duration: "4 days / 3 nights",
      price: "$1,850",
      description: "Immersive retreat experience on private acreage outside Edmonton with facilitated medicine journeys and comprehensive support.",
      includes: [
        "2 facilitated sacred medicine journeys",
        "Breathwork session",
        "Heart-mind exercises and nervous system education",
        "Nature walks",
        "All meals and snacks",
        "$500 non-refundable deposit required"
      ],
      color: "from-honey/20 to-sage-mist/20"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Offerings
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Transformational work designed to meet you where you are—from introductory sessions to deep, sustained containers for lasting change.
            </p>
          </div>
        </section>

        {/* Discovery Call Note */}
        <section className="py-8 md:py-12 bg-accent/5 border-b border-accent/20">
          <div className="container">
            <div className="flex gap-4 items-start max-w-3xl">
              <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground font-semibold mb-1">
                  New Clients: Complimentary Discovery Call
                </p>
                <p className="text-muted-foreground text-sm">
                  All new clients start with a complimentary discovery call before booking any medicine-based services. This ensures we're a good fit and allows me to understand your intentions, health history, and readiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {offerings.map((offering) => (
                <div
                  key={offering.id}
                  className="bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`h-32 bg-gradient-to-br ${offering.color} border-b border-border flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                        {offering.duration}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 space-y-6">
                    <div>
                      <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-1">
                        {offering.title}
                      </h2>
                      <p className="text-sm text-muted-foreground font-medium mb-3">
                        {offering.subtitle}
                      </p>
                      <p className="text-accent font-bold text-xl">
                        {offering.price}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {offering.description}
                    </p>

                    <div className="space-y-3">
                      <h3 className="font-serif font-bold text-foreground text-sm">
                        Includes:
                      </h3>
                      <ul className="space-y-2">
                        {offering.includes.map((item, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-accent font-bold flex-shrink-0 text-sm">
                              ✓
                            </span>
                            <span className="text-muted-foreground text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-border pt-6">
                      <Link href="/book">
                        <Button
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                          size="lg"
                        >
                          Book Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">
                  How do I get started?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Schedule a complimentary discovery call. We'll discuss your intentions, health history, and which offering is right for you. From there, we'll move into preparation and scheduling.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">
                  What's the difference between the Foundation and Deep Dive?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Foundation is a low-dose introductory experience (1.5 hours) perfect for people new to plant medicine. The Deep Dive is a full 5-6 hour journey with more intensive medicine and advanced modalities like IFS and somatic work.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">
                  Are the Transformation Containers right for me?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you're committed to deep, sustained change over several months, a container offers the most powerful results. We'll discuss this during your discovery call to see if it's the right fit.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">
                  Can I do plant medicine if I'm on medication?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  This is an important question. During your consultation, we'll review your full health history, including medications, to ensure safety and efficacy. Some medications are compatible; others require careful consideration.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">
                  What is the Fire Within Retreat like?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  It's a 4-day immersive experience on private acreage with 2 facilitated medicine journeys, breathwork, nature, education, and all meals included. It's co-facilitated with Andrea Warkentin and designed for deep transformation in community.
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
