"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import {
  EN_LANGUAGE,
  ES_LANGUAGE,
  useLanguage,
} from "@/components/language-provider";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import AppDownloadDialog from "@/components/app-download-dialog";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  DOCS_ROUTE,
  HOME_ROUTE,
} from "@/lib/routes";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const { language, translations, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);

  const onOpenDownloadDialog = (open: boolean) => {
    setDownloadDialogOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: translations.home, href: HOME_ROUTE },
    { name: translations.about, href: ABOUT_ROUTE },
    { name: translations.docs, href: DOCS_ROUTE },
    { name: translations.contact, href: CONTACT_ROUTE },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-950/80"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image
            src={theme === "dark" ? "/logo_dark.png" : "/logo_light.png"}
            alt="SavePass App"
            width={30}
            height={30}
            className="object-cover"
            priority
          />
          <span className="text-xl font-bold">SavePass</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
          </Button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(EN_LANGUAGE)}
              className={cn(
                "text-xs px-2 py-1 rounded transition-colors",
                language === EN_LANGUAGE
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage(ES_LANGUAGE)}
              className={cn(
                "text-xs px-2 py-1 rounded transition-colors",
                language === ES_LANGUAGE
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              ES
            </button>
          </div>
          <Button onClick={() => onOpenDownloadDialog(true)}>
            <span>{translations.getStarted}</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle />
            <SheetDescription />
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">SavePass</span>
              </div>
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    <SheetClose>{item.name}</SheetClose>
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "text-xs px-2 py-1 rounded transition-colors",
                    language === "en"
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("es")}
                  className={cn(
                    "text-xs px-2 py-1 rounded transition-colors",
                    language === "es"
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  ES
                </button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="mt-2"
              >
                {theme === "dark" ? (
                  <Sun className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <Moon className="h-[1.2rem] w-[1.2rem]" />
                )}
              </Button>
              <Button asChild onClick={() => onOpenDownloadDialog(true)}>
                <span>{translations.getStarted}</span>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* Download Dialog */}
      <AppDownloadDialog
        open={downloadDialogOpen}
        onOpenChange={setDownloadDialogOpen}
      />
    </header>
  );
}
