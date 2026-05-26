import { Link } from "wouter";
import { Instagram, Linkedin, Mail, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-16 md:mt-24">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-2">
              Brenda Bastell
            </h3>
            <p className="text-muted-foreground text-sm">
              Transformational Guide
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-accent transition-colors text-sm cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/offerings">
                  <span className="text-muted-foreground hover:text-accent transition-colors text-sm cursor-pointer">
                    Offerings
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/book">
                  <span className="text-muted-foreground hover:text-accent transition-colors text-sm cursor-pointer">
                    Book a Session
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-accent transition-colors text-sm cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/brendabastell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/brendabastell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/brendabastell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@brendabastell.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Disclaimer */}
          <div className="mb-6 pb-6 border-b border-border">
            <p className="text-center text-muted-foreground text-xs leading-relaxed max-w-4xl mx-auto">
              The facilitation services offered by Brenda Bastell are intended for personal growth, self-exploration, and ceremonial purposes only. They do not constitute medical, psychological, or therapeutic treatment and are not a substitute for professional mental health or medical care. Brenda Bastell is not a licensed medical or mental health practitioner. Participation is entirely voluntary and at the individual's own discretion.
            </p>
          </div>
          
          {/* Copyright */}
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Brenda Bastell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
