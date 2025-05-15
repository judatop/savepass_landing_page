"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

export const EN_LANGUAGE = "en";
export const ES_LANGUAGE = "es";

type Language = "en" | "es";

type Translations = {
  home: string;
  about: string;
  docs: string;
  contact: string;
  getStarted: string;
  navigation: string;
  legal: string;
  privacy: string;
  terms: string;
  allRightsReserved: string;
  heroTitle: string;
  heroSubtitle: string;
  downloadApp: string;
  featuresTitle: string;
  featureSecureTitle: string;
  featureSecureDesc: string;
  featureEasyTitle: string;
  featureEasyDesc: string;
  featureOpenSourceTitle: string;
  featureOpenSourceDesc: string;
  featureCloudTitle: string;
  featureCloudDesc: string;
  featureOfflineTitle: string;
  featureOfflineDesc: string;
  featureMultiplatformTitle: string;
  featureMultiplatformDesc: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutContent: string;
  aboutMission: string;
  aboutMissionContent: string;
  docsTitle: string;
  docsText: string;
  contactTitle: string;
  contactSubtitle: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitButton: string;
  thankYou: string;
  scanQrCode: string;
  iosInstructions: string;
  androidInstructions: string;
  previewTitle: string;
  howItWorksBadge: string;
  howItWorksTitle: string;
  howItWorksText: string;
  howItWorksAccountTitle: string;
  howItWorksAccountText: string;
  howItWorksSaveTitle: string;
  howItWorksSaveText: string;
  howItWorksCopyTitle: string;
  howItWorksCopyText: string;
  developerTitle: string;
  developerText: string;
  developerName: string;
  developerRole: string;
  developerCountry: string;
  developerYearsExperience: number;
  developerExperience: string;
  developerSummary: string;
};

const translations: Record<Language, Translations> = {
  en: {
    home: "Home",
    about: "About",
    docs: "Docs",
    contact: "Contact",
    getStarted: "Get Started",
    navigation: "Navigation",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    allRightsReserved: "All rights reserved.",
    heroTitle: "A different way to store passwords",
    heroSubtitle:
      "SavePass is a mobile application that allows you to store passwords and cards easily and securely.",
    downloadApp: "Download",
    featuresTitle: "Why Choose SavePass",
    featureSecureTitle: "Secure",
    featureSecureDesc:
      "Advanced encryption to keep your passwords safe and protected.",
    featureEasyTitle: "User-Friendly",
    featureEasyDesc:
      "Intuitive interface designed for ease of use across all devices.",
    featureOpenSourceTitle: "Open Source",
    featureOpenSourceDesc:
      "The code is completely open and auditable, guaranteeing transparency and security for all.",
    featureCloudTitle: "Confidentiality",
    featureCloudDesc:
      "Your passwords are stored securely encrypted, accessible only by you.",
    featureOfflineTitle: "Biometrics",
    featureOfflineDesc:
      "Access quickly and securely using your fingerprint or facial recognition.",
    featureMultiplatformTitle: "Multi-Platform",
    featureMultiplatformDesc: "Available for iOS & Android.",
    ctaTitle: "Ready to Secure Your Passwords?",
    ctaSubtitle: "SavePass is completely free",
    ctaButton: "Get Started Now",
    aboutTitle: "About SavePass",
    aboutSubtitle: "How it started",
    aboutContent:
      "SavePass was created with a simple goal: to provide a secure, easy-to-use, and open-source solution for password management. We believe that everyone deserves access to tools that protect their digital identity without compromising on usability or transparency.",
    aboutMission: "Our Goal",
    aboutMissionContent:
      "To empower users with a secure, accessible, and transparent password management solution that respects their privacy and gives them control over their digital security.",
    docsTitle: "Documentation",
    docsText: "How is SavePass built and why is it secure?",
    contactTitle: "Get in Touch",
    contactSubtitle: "Have questions or feedback? We'd love to hear from you!",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitButton: "Send Message",
    thankYou: "Thank you for your message. We'll get back to you soon!",
    scanQrCode: "Scan the QR code with your mobile device to download the app",
    iosInstructions:
      "Open your camera app and point it at the QR code to download from the App Store",
    androidInstructions:
      "Use your camera app or a QR scanner to download from Google Play",
    previewTitle: "Preview",
    howItWorksBadge: "How It Works",
    howItWorksTitle: "Simple Process, Safe Results",
    howItWorksText: "Get started in seconds and save your passwords.",
    howItWorksAccountTitle: "Create Account",
    howItWorksAccountText:
      "Sign up in seconds with your email, google or github account.",
    howItWorksSaveTitle: "Save Passwords",
    howItWorksSaveText: "Create and save your passwords or credit cards.",
    howItWorksCopyTitle: "Copy and Use",
    howItWorksCopyText: "Any moment, copy and use your passwords or cards.",
    developerTitle: "Developer",
    developerText: "Meet the developer behind SavePass",
    developerName: "Juan García",
    developerRole: "Software Engineer",
    developerCountry: "🇪🇨 Ecuador",
    developerYearsExperience: 7,
    developerExperience: "years of experience",
    developerSummary:
      "Passionate developing enterprise systems for a variety of industries like startups, telecommunications, financial and fintech. I've collaborated in the development of web and mobile applications, APIs and microservices, often leading teams to create modern products with scalable architecture.",
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    docs: "Documentación",
    contact: "Contacto",
    getStarted: "Comenzar",
    navigation: "Navegación",
    legal: "Legal",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
    allRightsReserved: "Todos los derechos reservados.",
    heroTitle: "Una forma diferente de almacenar contraseñas",
    heroSubtitle:
      "SavePass es un gestor de contraseñas de código abierto que te ayuda a almacenar y gestionar tus contraseñas de forma segura.",
    downloadApp: "Descargar",
    featuresTitle: "¿Por qué elegir SavePass?",
    featureSecureTitle: "Seguro",
    featureSecureDesc:
      "Encriptación avanzada para mantener tus contraseñas seguras y protegidas.",
    featureEasyTitle: "Fácil de Usar",
    featureEasyDesc:
      "Interfaz intuitiva diseñada para facilitar su uso en todos los dispositivos.",
    featureOpenSourceTitle: "Código Abierto",
    featureOpenSourceDesc:
      "El código es totalmente abierto y auditable, lo que garantiza transparencia y seguridad para todos.",
    featureCloudTitle: "Confidencialidad",
    featureCloudDesc:
      "Sus contraseñas se almacenan cifradas de forma segura y sólo usted puede acceder a ellas.",
    featureOfflineTitle: "Biométricos",
    featureOfflineDesc:
      "Accede de forma rápida y segura utilizando tu huella dactilar o el reconocimiento facial.",
    featureMultiplatformTitle: "Multi-Plataforma",
    featureMultiplatformDesc: "Disponible para iOS & Android",
    ctaTitle: "¿Listo para Asegurar tus Contraseñas?",
    ctaSubtitle: "SavePass es completamente gratis.",
    ctaButton: "Comenzar Ahora",
    aboutTitle: "Acerca de SavePass",
    aboutSubtitle: "Cómo empezó todo",
    aboutContent:
      "SavePass fue creado con un objetivo simple: proporcionar una solución segura, fácil de usar y de código abierto para la gestión de contraseñas. Creemos que todos merecen acceso a herramientas que protejan su identidad digital sin comprometer la usabilidad o la transparencia.",
    aboutMission: "Nuestra Meta",
    aboutMissionContent:
      "Empoderar a los usuarios con una solución de gestión de contraseñas segura, accesible y transparente que respete su privacidad y les dé control sobre su seguridad digital.",
    docsTitle: "Documentación",
    docsText: "Cómo SavePass esta construido y porqué es seguro ?",
    contactTitle: "Ponte en Contacto",
    contactSubtitle:
      "¿Tienes preguntas o comentarios? ¡Nos encantaría saber de ti!",
    nameLabel: "Nombre",
    emailLabel: "Correo Electrónico",
    messageLabel: "Mensaje",
    submitButton: "Enviar Mensaje",
    thankYou: "Gracias por tu mensaje. Te responderemos pronto!",
    scanQrCode:
      "Escanea el código QR con tu dispositivo móvil para descargar la aplicación",
    iosInstructions:
      "Abre la aplicación de la cámara y apúntala al código QR para descargar desde App Store",
    androidInstructions:
      "Usa la aplicación de la cámara o un escáner QR para descargar desde Google Play",
    previewTitle: "Vista previa",
    howItWorksBadge: "Cómo funciona",
    howItWorksTitle: "Proceso simple, Resultados seguros",
    howItWorksText: "Empieza en segundos y guarde sus contraseñas.",
    howItWorksAccountTitle: "Crea una cuenta",
    howItWorksAccountText:
      "Regístrate en segundos con tu correo electrónico, cuenta de google o github.",
    howItWorksSaveTitle: "Guardar contraseñas",
    howItWorksSaveText: "Crea y guarda tus contraseñas o tarjetas.",
    howItWorksCopyTitle: "Copia y utiliza",
    howItWorksCopyText:
      "En cualquier momento, copia tus contraseñas o tarjetas.",
    developerTitle: "Desarrollador",
    developerText: "Conoce al desarrollador detrás de SavePass",
    developerName: "Juan García",
    developerRole: "Ingeniero de Software",
    developerCountry: "🇪🇨 Ecuador",
    developerYearsExperience: 7,
    developerExperience: "años de experiencia",
    developerSummary:
      "Apasionado desarrollando sistemas empresariales para una variedad de industrias como startups, telecomunicaciones, financieras y fintech. He colaborado en el desarrollo de aplicaciones web y móviles, APIs y microservicios, en ocasiones liderando equipos para crear productos modernos con arquitectura escalable.",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(EN_LANGUAGE);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
