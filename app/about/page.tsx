"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function AboutPage() {
  const { translations } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 ">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {translations.aboutTitle}
            </h1>
            <p className="text-xl text-muted-foreground">
              {translations.aboutSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={`/${
                  theme === "light"
                    ? "savepass_ascii_light.png"
                    : "savepass_ascii_dark.png"
                }`}
                alt="About SavePass"
                width={700}
                height={800}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg">{translations.aboutContent}</p>

              <div className="pt-4">
                <h2 className="text-2xl font-semibold mb-3">
                  {translations.aboutMission}
                </h2>
                <p className="text-lg">{translations.aboutMissionContent}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {translations.developerTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {translations.developerText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-background rounded-xl p-8 shadow-sm border"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/savepass_developer.jpeg?height=160&width=160"
                  alt="Developer"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-1">
                  {translations.developerName}
                </h3>
                <p className="text-xl text-primary mb-2">
                  {translations.developerRole}
                </p>
                <p className="text-muted-foreground mb-4">
                  {translations.developerCountry} •{" "}
                  {translations.developerYearsExperience}+{" "}
                  {translations.developerExperience}
                </p>
                <p className="mb-6">{translations.developerSummary}</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <a
                    href="https://github.com/judatop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                  </a>

                  <a
                    href="https://x.com/judatop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2">
                      <X className="h-4 w-4" />
                      Twitter
                    </Button>
                  </a>

                  <a href="mailto:judagarciaclavijo@gmail.com">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
