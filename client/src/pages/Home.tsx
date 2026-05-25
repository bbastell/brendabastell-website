import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                    Transformational Healing Through Plant Medicine & Breathwork
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                    I facilitate deeply grounded, evidence-informed sessions that help you access profound clarity, healing, and growth. Whether through plant medicine facilitation or breathwork, I create a safe, professional space for your transformation.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link href="/book">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    >
                      Book a Session
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent/5"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Profile Image */}
              <div className="flex items-center justify-center">
                <img
                  src="/manus-storage/IMG_9248_cbe576ed.jpeg"
                  alt="Brenda Bastell"
                  className="w-full aspect-square rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Preview Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Transformations in Progress
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real stories from clients who have experienced profound shifts through our work together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-honey/30 to-terracotta/30 border border-muted flex items-center justify-center">
                      <span className="text-muted-foreground font-semibold">
                        {i}
                      </span>
                    </div>
                    <div>
                      <div className="font-serif font-bold text-foreground">
                        Client Name
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Profession
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Placeholder testimonial. Real client testimonials will be added here as they share their experiences with the transformational work."
                  </p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-accent">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-gradient-to-r from-sage-mist/10 to-sea-glass/10 rounded-lg p-12 md:p-16 text-center border border-muted">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Ready to Begin Your Transformation?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take the first step toward clarity and healing. Book a session today and discover what's possible for you.
              </p>
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Schedule Your Session
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
