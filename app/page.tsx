"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Shield,
  Smartphone,
  Code,
  Download,
  Layers,
  Lock,
  ScanFace,
} from "lucide-react";
import AppDownloadDialog from "@/components/app-download-dialog";
import { useTheme } from "@/components/theme-provider";
import { Badge } from "@/components/ui/badge";

const screenshots = [
  {
    id: 1,
    path: "/ss/get_started.png",
    darkPath: "/ss/get_started_dark.png",
  },
  {
    id: 2,
    path: "/ss/auth.png",
    darkPath: "/ss/auth_dark.png",
  },
  {
    id: 3,
    path: "/ss/home.png",
    darkPath: "/ss/home_dark.png",
  },
  {
    id: 4,
    path: "/ss/password_list.png",
    darkPath: "/ss/password_list_dark.png",
  },
  {
    id: 5,
    path: "/ss/create_password.png",
    darkPath: "/ss/create_password_dark.png",
  },
  {
    id: 6,
    path: "/ss/new_card.png",
    darkPath: "/ss/new_card_dark.png",
  },
  {
    id: 7,
    path: "/ss/biometrics.png",
    darkPath: "/ss/biometrics_dark.png",
  },
  {
    id: 8,
    path: "/ss/settings.png",
    darkPath: "/ss/settings_dark.png",
  },
];

export default function Home() {
  const { translations } = useLanguage();
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);

  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });
  const featuresControls = useAnimation();
  const ctaControls = useAnimation();
  const { theme } = useTheme();

  useEffect(() => {
    if (featuresInView) {
      featuresControls.start("visible");
    }
    if (ctaInView) {
      ctaControls.start("visible");
    }
  }, [featuresInView, ctaInView, featuresControls, ctaControls]);

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-40 overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 items-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center">
                {translations.heroTitle}
              </h1>
              <p className="text-xl text-muted-foreground text-center">
                {translations.heroSubtitle}
              </p>
              <div className="flex flex-row mt-4">
                <Button size="lg" onClick={() => setDownloadDialogOpen(true)}>
                  <Download className="mr-2 h-4 w-4" />
                  {translations.downloadApp}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-40" ref={featuresRef}>
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresControls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {translations.featuresTitle}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              custom={0}
              initial="hidden"
              animate={featuresControls}
              variants={featureVariants}
              className="bg-background rounded-xl p-6 shadow-sm border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {translations.featureSecureTitle}
              </h3>
              <p className="text-muted-foreground">
                {translations.featureSecureDesc}
              </p>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              animate={featuresControls}
              variants={featureVariants}
              className="bg-background rounded-xl p-6 shadow-sm border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {translations.featureEasyTitle}
              </h3>
              <p className="text-muted-foreground">
                {translations.featureEasyDesc}
              </p>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              animate={featuresControls}
              variants={featureVariants}
              className="bg-background rounded-xl p-6 shadow-sm border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {translations.featureOpenSourceTitle}
              </h3>
              <p className="text-muted-foreground">
                {translations.featureOpenSourceDesc}
              </p>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              animate={featuresControls}
              variants={featureVariants}
              className="bg-background rounded-xl p-6 shadow-sm border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {translations.featureCloudTitle}
              </h3>
              <p className="text-muted-foreground">
                {translations.featureCloudDesc}
              </p>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate={featuresControls}
              variants={featureVariants}
              className="bg-background rounded-xl p-6 shadow-sm border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ScanFace className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {translations.featureOfflineTitle}
              </h3>
              <p className="text-muted-foreground">
                {translations.featureOfflineDesc}
              </p>
            </motion.div>

            <motion.div
              custom={5}
              initial="hidden"
              animate={featuresControls}
              variants={featureVariants}
              className="bg-background rounded-xl p-6 shadow-sm border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {translations.featureMultiplatformTitle}
              </h3>
              <p className="text-muted-foreground">
                {translations.featureMultiplatformDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-40">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresControls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {translations.previewTitle}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex overflow-x-auto gap-8 pb-6 snap-x"
          >
            {screenshots.map((item) => (
              <div
                key={item.id}
                className="min-w-[280px] h-[560px] snap-center rounded-2xl overflow-hidden shadow-lg flex-shrink-0 p-2 border border-gray-100 dark:border-transparent dark:bg-[#0A0A0D]"
              >
                <Image
                  src={theme === "light" ? item.path : item.darkPath}
                  alt={`App Screenshot ${item}`}
                  width={320}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <Badge
              className="rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              {translations.howItWorksBadge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {translations.howItWorksTitle}
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              {translations.howItWorksText}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

            {[
              {
                step: "01",
                title: translations.howItWorksAccountTitle,
                description: translations.howItWorksAccountText,
              },
              {
                step: "02",
                title: translations.howItWorksSaveTitle,
                description: translations.howItWorksSaveText,
              },
              {
                step: "03",
                title: translations.howItWorksCopyTitle,
                description: translations.howItWorksCopyText,
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center space-y-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40" ref={ctaRef}>
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate={ctaControls}
            variants={ctaVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {translations.ctaTitle}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {translations.ctaSubtitle}
            </p>
            <Button size="lg" onClick={() => setDownloadDialogOpen(true)}>
              <Download className="mr-2 h-4 w-4" />
              {translations.downloadApp}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Download Dialog */}
      <AppDownloadDialog
        open={downloadDialogOpen}
        onOpenChange={setDownloadDialogOpen}
      />
    </div>
  );
}
