"use client";

import AccountDocs from "@/components/docs/account-docs";
import CardDocs from "@/components/docs/card-docs";
import PasswordDocs from "@/components/docs/password-docs";
import RepositoriesDocs from "@/components/docs/repositories-docs";
import TechDocs from "@/components/docs/tech-docs";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

export default function DocsPage() {
  const { translations } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {translations.docsTitle}
            </h1>
            <p className="text-xl text-muted-foreground">
              {translations.docsText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AccountDocs />
              <PasswordDocs />
              <CardDocs />
              <TechDocs />
              <RepositoriesDocs />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
