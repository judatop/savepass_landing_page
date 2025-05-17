"use client";

import Link from "next/link";
import { Github, Twitter, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function Footer() {
  const { translations } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold mb-3">
              {translations.navigation}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {translations.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {translations.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {translations.docs}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {translations.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">{translations.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {translations.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {translations.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/savepass"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {translations.contactMIT}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">
              {translations.contact}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href="mailto:contact@savepass.app"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  app.savepass@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +598 92 251 154
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 text-muted-foreground" />
                <a
                  href="https://github.com/judatop/savepass"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} SavePass. {translations.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
