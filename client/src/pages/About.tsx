import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              About Brenda
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A grounded guide to deep personal change.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <img
                    src="/brenda-profile.jpeg"
                    alt="Brenda Bastell"
                    className="w-full aspect-square rounded-lg object-cover shadow-lg brightness-110 contrast-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                    My Story
                  </h2>
                 
                   <p className="text-muted-foreground leading-relaxed mb-4">
  I spent 40 years in real estate and 30 years behind a camera. I was good at what I did — genuinely good. And for a long time, I thought that was enough.
</p>
<p className="text-muted-foreground leading-relaxed mb-4">
  In 2024, a plant medicine journey changed that. Not because something was broken, but because something was ready. I saw clearly, maybe for the first time, how much of my life I'd been performing instead of living. It cracked something open in me that I couldn't — and didn't want to — close.
</p>
<p className="text-muted-foreground leading-relaxed mb-4">
  That experience led me to a year of formal training and certification in sacred medicine facilitation and breathwork. What started as my own healing became a calling.
</p>
<p className="text-muted-foreground leading-relaxed mb-4">
  Today I hold space for people who are ready to go deeper. I'm not a healer. I'm a guide. You do your own healing — I just make sure you feel safe enough to let it happen.
</p>
<p className="text-muted-foreground leading-relaxed mb-4">
  I bring the same grounded, professional approach to this work that I've built over a lifetime. But I also bring something I didn't used to have: the willingness to be honest about what's real.
</p>
<p className="text-muted-foreground leading-relaxed mb-4">
  <em>Please note: Sacred medicine facilitation is not a substitute for medical or psychological treatment. Always consult a qualified healthcare provider regarding your individual needs.</em>
</p>
                <div className="border-t border-border pt-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                    My Approach
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I believe in meeting people exactly where they are. My work is grounded in several core principles:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-foreground mb-1">
                          Professionalism & Integrity
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Your safety and privacy are my top priorities. I approach this work with the same strong ethics I bring to every area of my life.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-foreground mb-1">
                          Evidence & Respect
                        </div>
                        <p className="text-muted-foreground text-sm">
                          I honor the science behind these practices while respecting their historical roots. I stay current with modern research to ensure a balanced, informed approach.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-foreground mb-1">
                          Personalization
                        </div>
                        <p className="text-muted-foreground text-sm">
                          There is no one-size-fits-all path to transformation. I tailor each session to your unique needs, intentions, and readiness.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-foreground mb-1">
                          Integration & Grounding
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Insights mean nothing without integration. I support you in translating your experience into meaningful change in your daily life.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                    Credentials & Training
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-muted-foreground">
                        Certified Plant Medicine Facilitator
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-muted-foreground">
                        Advanced Breathwork Practitioner
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-muted-foreground">
                        Internal Family Systems (IFS / Parts Work)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-muted-foreground">
                        Neuro-Linguistic Programming (NLP)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-muted-foreground">
                        Somatic processing and nervous system regulation
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-6">
                    Specific certifications and training organizations available upon request. I maintain active credentials and participate in ongoing professional development to ensure the highest standards of care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
