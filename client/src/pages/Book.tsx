import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Book() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Book a Session
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Schedule your transformational experience with ease.
            </p>
          </div>
        </section>

        {/* Booking Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Info */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">
                    How It Works
                  </h2>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-serif font-bold text-accent flex-shrink-0">
                        1
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Choose your session type (Plant Medicine or Breathwork)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-serif font-bold text-accent flex-shrink-0">
                        2
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Select a date and time that works for you
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-serif font-bold text-accent flex-shrink-0">
                        3
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Complete a brief health questionnaire (if applicable)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-serif font-bold text-accent flex-shrink-0">
                        4
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Receive confirmation and pre-session guidance
                      </span>
                    </li>
                  </ol>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">
                    Before Your Session
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-accent font-bold flex-shrink-0">
                        •
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Wear comfortable clothing
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent font-bold flex-shrink-0">
                        •
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Arrive 10 minutes early
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent font-bold flex-shrink-0">
                        •
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Minimize caffeine 2 hours before
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent font-bold flex-shrink-0">
                        •
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Have water available
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">
                    Questions?
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    Reach out anytime. I'm here to support your journey.
                  </p>
                  <a
                    href="mailto:hello@brendabastell.com"
                    className="inline-block px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded font-medium transition-colors text-sm"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              {/* Right Column - Calendly Embed */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
                  {/* Calendly Placeholder */}
                  <div className="aspect-video md:aspect-auto md:h-screen bg-gradient-to-br from-sage-mist/10 to-sea-glass/10 border-b border-border flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <div className="text-4xl font-serif font-bold text-muted-foreground/30">
                        📅
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-serif font-bold text-foreground">
                          Calendly Embed
                        </h3>
                        <p className="text-muted-foreground max-w-sm">
                          Your Calendly scheduling widget will appear here. This placeholder shows where the booking calendar will be integrated.
                        </p>
                      </div>
                      <div className="pt-4 space-y-2">
                        <p className="text-sm text-muted-foreground">
                          To integrate Calendly:
                        </p>
                        <ol className="text-sm text-muted-foreground space-y-1">
                          <li>1. Create a Calendly account</li>
                          <li>2. Set up your availability</li>
                          <li>3. Get your embed code</li>
                          <li>4. Replace this placeholder</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Alternative Contact Info */}
                  <div className="p-8 bg-muted/20 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      In the meantime, you can reach out directly to schedule:
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">
                        Email:{" "}
                        <a
                          href="mailto:hello@brendabastell.com"
                          className="text-accent hover:underline"
                        >
                          hello@brendabastell.com
                        </a>
                      </p>
                      <p className="font-medium text-foreground">
                        Phone:{" "}
                        <a
                          href="tel:+1234567890"
                          className="text-accent hover:underline"
                        >
                          (123) 456-7890
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial CTA */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                What Clients Say
              </h2>
              <div className="bg-card rounded-lg p-8 border border-border">
                <p className="text-lg text-muted-foreground italic mb-6">
                  "Placeholder testimonial. Real client feedback will appear here, sharing their transformation and experience with Brenda's work."
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-accent text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-serif font-bold text-foreground">
                  Client Name
                </p>
                <p className="text-sm text-muted-foreground">
                  Profession / Background
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
