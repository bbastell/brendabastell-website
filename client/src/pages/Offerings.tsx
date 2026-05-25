import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Offerings() {
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
              Two complementary modalities for deep transformation and healing.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Plant Medicine Facilitation */}
              <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-honey/20 to-terracotta/20 border-b border-border flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-muted-foreground text-sm font-medium">
                      Service Image
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-10 space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                      Plant Medicine Facilitation
                    </h2>
                    <p className="text-accent font-semibold text-lg">
                      Starting at $500 per session
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Plant medicine offers a direct pathway to profound insight, healing, and transformation. In a carefully held, professional container, you'll access deeper layers of consciousness to address limiting beliefs, process trauma, and reconnect with your authentic self.
                  </p>

                  <div className="space-y-3">
                    <h3 className="font-serif font-bold text-foreground">
                      What's Included:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground text-sm">
                          Pre-session consultation and intention setting
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground text-sm">
                          Professional facilitation in a safe, private space
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground text-sm">
                          Grounding and integration support during the experience
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground text-sm">
                          Post-session integration guidance and resources
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground text-sm">
                          Follow-up support for 2 weeks post-session
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      Plant medicine work requires careful screening and preparation. All clients complete a health questionnaire and consultation before booking.
                    </p>
                    <Link href="/book">
                      <Button
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                        size="lg"
                      >
                        Book Plant Medicine Session
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Breathwork Sessions */}
              <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-sea-glass/20 to-sage-mist/20 border-b border-border flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-muted-foreground text-sm font-medium">
                      Service Image
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-10 space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                      Breathwork Sessions
                    </h2>
                    <p className="text-accent font-semibold text-lg">
                      Starting at $150 per session
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Breath is the bridge between body and mind. Through guided breathwork, you'll release stored tension, access clarity, and activate your body's natural healing capacity. Breathwork is accessible to everyone and offers immediate, tangible benefits.
                  </p>

                  <div className="space-y-3">
                    <h3 className="font-serif font-bold text-foreground">
                      What's Included:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground text-sm">
                          Personalized breathwork protocol tailored to your needs
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground text-sm">
                          60-minute guided session in a calm, supportive environment
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground text-sm">
                          Integration discussion and insights
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground text-sm">
                          Take-home practices for daily use
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground text-sm">
                          Ongoing email support between sessions
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      Breathwork is suitable for most people. A brief consultation ensures the practice is right for you.
                    </p>
                    <Link href="/book">
                      <Button
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                        size="lg"
                      >
                        Book Breathwork Session
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
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
                  How do I prepare for a session?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Preparation depends on the modality. For plant medicine, you'll receive detailed pre-session guidelines. For breathwork, simply come with an open mind and wear comfortable clothing.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">
                  Is this work confidential?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Absolutely. Your privacy is sacred. Everything shared in our sessions remains confidential and is held with the utmost professionalism.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">
                  Can I do plant medicine if I'm on medication?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  This is an important question. During your consultation, we'll review your full health history, including medications, to ensure safety and efficacy.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">
                  What if I don't feel anything during a session?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Everyone's experience is unique. Sometimes the most profound work happens subtly. I'll help you recognize and integrate whatever arises.
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
