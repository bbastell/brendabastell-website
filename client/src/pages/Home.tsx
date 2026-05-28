import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Darrilyn",
      excerpt: "I had complete faith in her skills in safely guiding me through this journey and lovingly making it a meaningful and positive experience and it was.",
      full: "When I heard Brenda Bastell guided people through plant medicine journeys, I knew immediately she was the right person. Knowing what kind of person she is, I had complete faith in her skills in safely guiding me through this journey and lovingly making it a meaningful and positive experience and it was.\n\nThroughout this gentle yet eye-opening process, Brenda was by my side walking me through every emotion that was coming up. She worked tirelessly with me. I am very grateful for the healing experiences she helped me have through the medium of plant medicine.\n\nOne of my favourite parts in this journey was the recognition that I had a scar on my heart that I could remove. I decided to peel it off. Knowing how the Earth is able to transform our hurts into something beautiful, I decided to bury the scar in the ground. So, in my mind, I found a spot in the forest, dug a hole and buried it. What happened next made both Brenda and myself laugh, because out of the ground where I buried the scar, I saw beautiful mushrooms begin to sprout.\n\nDuring the journey, I created a strong visual version of myself that I have been able to hang onto. This visual has inspired me take better care of myself physically, walking taller, feeling stronger. It also reminds me to be more playful and take pride in self-care including wearing more colourful clothing simply because of how it makes me feel.",
      rating: 5,
      type: "text"
    },
    {
      id: 2,
      name: "Coleman",
      excerpt: "Watch Coleman's video testimonial about his transformational experience.",
      full: "",
      rating: 5,
      type: "video"
    },
    {
      id: 3,
      name: "Nic",
      excerpt: "Before working with Brenda, I was stuck – going through the motions, carrying old trauma I couldn't name, and watching it show up in how I reacted to everything.",
      full: "Before working with Brenda, I was stuck – going through the motions, carrying old trauma I couldn't name, and watching it show up in how I reacted to everything. I knew something needed to shift, but I couldn't get there on my own.\n\nI'd watched Brenda's own transformation unfold over the years. Whatever she was doing – I wanted that. And in every session, she created this calm, steady space where I felt completely held. The medicine opened things I didn't realize I was still carrying, and Brenda was right there, solid and present, the entire time to help me process.\n\nWhat's surprised me most is what's continued to unfold since. I understand myself differently now. It gave me the clarity to have a conversation with my partner I'd been avoiding for years. It's made me a more present mom. Brenda gave me back parts of myself I didn't know I'd lost – and now that I've found them, I just want to keep going deeper.",
      rating: 5,
      type: "text"
    }
  ];

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
                  src="/brenda-profile.jpeg"
                  alt="Brenda Bastell"
                  className="w-full aspect-square rounded-lg object-cover shadow-lg brightness-110 contrast-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
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
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  {testimonial.type === "video" ? (
                    // Video Testimonial
                    <div className="mb-6">
                      <button
                        onClick={() => setShowVideoModal(true)}
                        className="w-full aspect-video rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent flex items-center justify-center hover:from-accent/30 hover:to-accent/20 transition-colors group"
                      >
                        <Play className="w-12 h-12 text-accent group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  ) : null}

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-honey/30 to-terracotta/30 border border-muted flex items-center justify-center flex-shrink-0">
                      <span className="text-muted-foreground font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-serif font-bold text-foreground">
                        {testimonial.name}
                      </div>
                      {testimonial.type === "video" && (
                        <div className="text-sm text-accent font-medium">
                          Video Testimonial
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground italic mb-4 flex-grow">
                    "{testimonial.type === "placeholder" ? testimonial.excerpt : (expandedTestimonial === testimonial.id ? testimonial.full : testimonial.excerpt)}"
                  </p>

                  {testimonial.type === "text" && testimonial.full && (
                    <button
                      onClick={() => setExpandedTestimonial(expandedTestimonial === testimonial.id ? null : testimonial.id)}
                      className="text-accent hover:text-accent/80 text-sm font-medium mb-4 transition-colors"
                    >
                      {expandedTestimonial === testimonial.id ? "Read Less" : "Read More"}
                    </button>
                  )}

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

          {/* Video Modal */}
          {showVideoModal && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
                <div className="flex justify-between items-center p-6 border-b border-border sticky top-0 bg-card">
                  <h3 className="font-serif font-bold text-foreground">Coleman's Testimonial</h3>
                  <button
                    onClick={() => setShowVideoModal(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <video
                    controls
                    className="w-full rounded-lg"
                    autoPlay
                  >
                    <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663524819532/HkFRcXdlMqfsNMft.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          )}
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
