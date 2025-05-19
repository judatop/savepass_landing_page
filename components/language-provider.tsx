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
  accountTitle: string;
  accountTextProviderText: string;
  accountTextMFAText: string;
  accountTextFeaturesText: string;
  accountMasterPasswordTitle: string;
  accountMasterPasswordDescText: string;
  accountSaltTitle: string;
  accountSaltDescText: string;
  accountDerivedKeyTitle: string;
  accountDerivedKeyDescText1: string;
  accountDerivedKeyDescText2: string;
  accountDerivedKeyDescText3: string;
  accountClearMasterPasswordTitle: string;
  accountClearMasterPasswordDescText: string;
  accountHashedMasterPasswordTitle: string;
  accountHashedMasterPasswordDescText: string;
  accountZeroKnowledgeArchTitle: string;
  accountZeroKnowledgeArchText: string;
  passwordsTitle: string;
  passwordsDomainText: string;
  passwordsMasterPasswordText: string;
  passwordsDerivedKeyTitle: string;
  passwordsDerivedKeyText: string;
  passwordsClearPasswordTitle: string;
  passwordsClearPasswordText: string;
  passwordsPasswordNotInServerText1: string;
  passwordsPasswordNotInServerText2: string;
  cardsTitle: string;
  cardsTypeText: string;
  cardsStandarText1: string;
  cardsStandarText2: string;
  cardsSensitiveDataTitle: string;
  cardsSensitiveDataText: string;
  cardsSecureKeysTitle: string;
  cardSecureKeysText1: string;
  cardSecureKeysText2: string;
  cardSecureKeysText3: string;
  cardsDataExpositionTitle: string;
  cardsDataExpositionText: string;
  cardsIsolationInfoTitle: string;
  cardsIsolationInfoText: string;
  cardsSecureAuthTitle: string;
  cardsSecureAuthText: string;
  cardsSimilarFlowText: string;
  cardsRLSTitle: string;
  cardsRLSText: string;
  techToolsTitle: string;
  techToolsFlutterTitle: string;
  techToolsFlutterText: string;
  techToolsFlutterFastText: string;
  techToolsFlutterCrossPlatformText: string;
  techToolsFlutterADSText: string;
  techToolsSupabaseTitle: string;
  techToolsSupabaseAsBackendText: string;
  techToolsSupabaseRLSText1: string;
  techToolsSupabaseRLSText2: string;
  techToolsSupabaseVaultText: string;
  techToolsSupabaseStorageText: string;
  techToolsSupabaseProvidersText: string;
  techToolsSupabaseMailTitle: string;
  techToolsSupabaseMailText: string;
  techToolsSupabaseGoogleTitle: string;
  techToolsSupabaseGoogleText: string;
  techToolsSupabaseGithubTitle: string;
  techToolsSupabaseGithubText: string;
  techToolsJWTText1: string;
  techToolsJWTText2: string;
  repositoriesTitle: string;
  repositoriesText: string;
  repositoriesSavePassText: string;
  repositoriesADSText: string;
  repositoriesSavePassLandingPage: string;
  repositoriesOpenText: string;
  contactText: string;
  contactMailText: string;
  contactPhoneText: string;
  contactMIT: string;
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
    docsText: "How SavePass works?",
    contactTitle: "Get in Touch",
    contactSubtitle: "Have questions or feedback? We'd love to hear from you!",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitButton: "Send Message",
    thankYou: "Thank you for your message. We'll get back to you soon!",
    // scanQrCode: "Scan the QR code with your mobile device to download the app",
    scanQrCode:
      "SavePass is currently being uploaded to the iOS and Android stores, so it will be available for download soon.",
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
    accountTitle: "Account",
    accountTextProviderText:
      "To get started, SavePass allows you to create an account with a provider such as Google or Github, otherwise you can do so by setting your email address and password manually.",
    accountTextMFAText:
      "We recommend that the option selected to create a user has multi-factor authentication (MFA) enabled for added security.",
    accountTextFeaturesText:
      "When creating an account, the user can update the profile picture, change their name, update their master password and delete their account.",
    accountMasterPasswordTitle: "Master Password",
    accountMasterPasswordDescText:
      "The master password is the access point to the application, it is defined after creating the account for the first time. It is important to remember it and keep it secure as it is our keychain of our credentials. The master password is never sent to the servers and is not stored, the generation and encryption process is as follows:",
    accountSaltTitle: "Salt:",
    accountSaltDescText:
      "Random and unique value, generated instantly by a cryptographic generator, represented in Base64 for portability.",
    accountDerivedKeyTitle: "Derived Key:",
    accountDerivedKeyDescText1:
      "Unique and secure key derived on-the-fly using the algorithm",
    accountDerivedKeyDescText2: "with",
    accountDerivedKeyDescText3:
      "and 100,000 iterations, applied on top of the Master Password and Salt for further reinforcement against brute force attacks.",
    accountClearMasterPasswordTitle: "Clear Master Password:",
    accountClearMasterPasswordDescText:
      "This is the user's master password in clear.",
    accountHashedMasterPasswordTitle: "Hashed Master Password:",
    accountHashedMasterPasswordDescText:
      "Hash value generated instantly by SHA-256 on the Derived Key, represented in Base64, secure and non-reversible.",
    accountZeroKnowledgeArchTitle: "Zero-Knowledge Architecture",
    accountZeroKnowledgeArchText:
      "SavePass employs a zero-knowledge architecture, which means we have no way to access your encrypted data. Your clear master password is never sent to our servers, and we don't store it anywhere.",
    passwordsTitle: "Passwords 🔒",
    passwordsDomainText:
      "Your passwords can be stored associated to a domain, for example you can store a password for a social network or a streaming platform. There is the possibility to create a random password generated in the same application.",
    passwordsMasterPasswordText:
      "The creation of the master password described above is of vital importance for password management, because when a user enters the application, the Derived Key is used to encrypt the passwords that the user wants to create.",
    passwordsDerivedKeyTitle: "Derived Key:",
    passwordsDerivedKeyText:
      "Described in the previous section, for passwords the Derived Key is obtained after successful login.",
    passwordsClearPasswordTitle: "Clear Password:",
    passwordsClearPasswordText: "Your clear password to store.",
    passwordsPasswordNotInServerText1:
      "In the same way, your clear password is not stored in our servers because we handle an encryption process and the database uses",
    passwordsPasswordNotInServerText2:
      "to store the encrypted data. Without Derived Key it is impossible to decrypt passwords.",
    cardsTitle: "Cards 💳",
    cardsTypeText:
      "SavePass allows you to store credit or debit cards of any type. Unlike passwords, cards contain various sensitive data such as card number, identifier, expiration and security code.",
    cardsStandarText1: "Therefore, SavePass follows the standard",
    cardsStandarText2:
      "that allows to maintain a secure environment in the processing, storage and transmission of credit card related information. SavePass complies with these principles listed below:",
    cardsSensitiveDataTitle: "Encryption of Sensitive Data:",
    cardsSensitiveDataText:
      "Passwords in SavePass are encrypted using AES (Advanced Encryption Standard), a secure method recognized by PCI-DSS.",
    cardsSecureKeysTitle: "Secure Key Derivation:",
    cardSecureKeysText1: "The use of",
    cardSecureKeysText2: "with",
    cardSecureKeysText3:
      "and 100,000 iterations strengthens protection against brute force attacks, meeting the requirements for robustness in key derivation.",
    cardsDataExpositionTitle: "Protection against Data Exposure:",
    cardsDataExpositionText:
      "Sensitive data, such as passwords, is never stored in plain text. In addition, Random Salt ensures that each hash is unique, even for matching passwords.",
    cardsIsolationInfoTitle: "Critical Information Isolation:",
    cardsIsolationInfoText:
      "Encrypted data and user identifiers are segregated, minimizing the risk of exposure in case of vulnerabilities.",
    cardsSecureAuthTitle: "Secure Authentication:",
    cardsSecureAuthText:
      "The use of biometric authentication and session validation complies with secure access and strong authentication guidelines.",
    cardsSimilarFlowText:
      "The card storage process follows a very similar flow to that of passwords described in the previous section, using the Derived Key and not storing the card data in clear on our servers.",
    cardsRLSTitle: "Row Level Security",
    cardsRLSText:
      "SavePass employs RLS, which is a feature that allows you to define row-level access policies in a database. This means that, even if the data is in the same table, each user can only see and manipulate the information that belongs to him/her, according to the defined rules.",
    techToolsTitle: "Tech Tools",
    techToolsFlutterTitle: "Flutter",
    techToolsFlutterText:
      "SavePass is built with Flutter, designed to store and manage passwords in a secure and accessible way.",
    techToolsFlutterFastText:
      "Leveraging the power and versatility of Flutter, SavePass provides a fast, seamless and secure experience across multiple platforms.",
    techToolsFlutterCrossPlatformText:
      "Flutter is created by Google, which ensures constant updates and security improvements, allows a homogeneous handling on iOS and Android ensuring fast interfaces and smooth transitions.",
    techToolsFlutterADSText:
      "SavePass uses an atomic interface design system (ADS) built in Flutter that allows the use of reusable and well-structured components allowing scalability by incorporating new functionalities without breaking the structure. ADS is also open source to be used in any application built with Flutter.",
    techToolsSupabaseTitle: "Supabase",
    techToolsSupabaseAsBackendText:
      "SavePass uses Supabase as a backend to securely manage and store information, leveraging its advanced database, authentication and file storage services.",
    techToolsSupabaseRLSText1:
      "Supabase uses PostgreSQL as its database, applying a robust security model called",
    techToolsSupabaseRLSText2:
      "that restricts access to data by user, ensuring that only the owner can view and modify their information.",
    techToolsSupabaseVaultText:
      "Passwords, credit cards and master passwords are not stored in the clear in Supabase, everything is handled in an encrypted manner and metadata is properly separated. In addition, Supabase Vault is used, which allows for additional encryption at the disk level.",
    techToolsSupabaseStorageText:
      "SavePass also uses Supabase object storage to securely manage files by providing fast and secure access through signed temporary URLs.",
    techToolsSupabaseProvidersText:
      "SavePass allows login using different authentication providers thanks to Supabase:",
    techToolsSupabaseMailTitle: "Mail and password:",
    techToolsSupabaseMailText: "Classic and secure authentication.",
    techToolsSupabaseGoogleTitle: "Google:",
    techToolsSupabaseGoogleText: "Quick access using Google accounts.",
    techToolsSupabaseGithubTitle: "GitHub:",
    techToolsSupabaseGithubText: "Direct integration for developers.",
    techToolsJWTText1: "Supabase manages the authentication with",
    techToolsJWTText2:
      " ,this facilitates the validation of each request in a secure and scalable way.",
    repositoriesTitle: "Repositories",
    repositoriesText:
      "All repositories are open source and available under the MIT license on Github, leave a star ⭐ if you like the project and want to support it.",
    repositoriesSavePassText:
      "The main application built with Flutter for iOS and Android.",
    repositoriesADSText:
      "The atomic design system for any Flutter application. SavePass uses this design system.",
    repositoriesSavePassLandingPage:
      "The current website is built with NextJs, Typescript, Tailwind CSS and ShadCN components.",
    repositoriesOpenText: "View repository",
    contactText:
      "Have questions, feedback, or need assistance? Feel free to reach out to us through any of the following channels:",
    contactMailText: "Email",
    contactPhoneText: "Phone Number",
    contactMIT: "MIT Licence",
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
    docsText: "Cómo funciona SavePass?",
    contactTitle: "Ponte en Contacto",
    contactSubtitle:
      "¿Tienes preguntas o comentarios? ¡Nos encantaría saber de ti!",
    nameLabel: "Nombre",
    emailLabel: "Correo Electrónico",
    messageLabel: "Mensaje",
    submitButton: "Enviar Mensaje",
    thankYou: "Gracias por tu mensaje. Te responderemos pronto!",
    scanQrCode:
      "SavePass esta en proceso de carga en las tiendas de iOS y Android, asi que estará disponible muy pronto para descargar.",
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
    accountTitle: "Cuenta",
    accountTextProviderText:
      "Para iniciar, SavePass permite crear una cuenta con un proveedor como Google o Github, de lo contrario, podrás hacerlo estableciendo tu dirección de correo electrónico y contraseña manualmente.",
    accountTextMFAText:
      "Recomendamos que la opción seleccionada para crear usuario tenga habilitada la autenticación multifactor (MFA) para mayor seguridad.",
    accountTextFeaturesText:
      "Al crear una cuenta, el usuario puede actualizar la imágen de perfil, cambiar su nombre, actualizar su contraseña maestra y eliminar su cuenta.",
    accountMasterPasswordTitle: "Contraseña maestra",
    accountMasterPasswordDescText:
      "La contraseña maestra es el punto de acceso a la aplicación, se define después de crear la cuenta por primera vez. Es importante recordarla y mantenerla segura pues es nuestro llavero de nuestras credenciales. La contraseña maestra en claro no es enviada nunca a los servidores y no es almacenada, el proceso de generación y cifrado es el siguiente:",
    accountSaltTitle: "Salt:",
    accountSaltDescText:
      "Valor aleatorio y único, generado en el instante mediante un generador criptográfico, representado en Base64 para mayor portabilidad.",
    accountDerivedKeyTitle: "Derived Key:",
    accountDerivedKeyDescText1:
      "Clave única y segura derivada en el momento utilizando el algoritmo",
    accountDerivedKeyDescText2: "con",
    accountDerivedKeyDescText3:
      "y 100,000 iteraciones, aplicada sobre la Master Password y el Salt para un mayor refuerzo contra ataques de fuerza bruta.",
    accountClearMasterPasswordTitle: "Clear Master Password:",
    accountClearMasterPasswordDescText:
      "Es la contraseña maestra del usuario en claro.",
    accountHashedMasterPasswordTitle: "Hashed Master Password:",
    accountHashedMasterPasswordDescText:
      "Valor hash generado en el instante mediante SHA-256 sobre la Derived Key, representado en Base64, seguro y no reversible.",
    accountZeroKnowledgeArchTitle: "Zero-Knowledge Architecture",
    accountZeroKnowledgeArchText:
      "SavePass emplea una arquitectura de conocimiento cero, lo que significa que no tenemos forma de acceder a sus datos encriptados. Tu contraseña maestra nunca se envía a nuestros servidores y no la almacenamos en ningún sitio.",
    passwordsTitle: "Contraseñas 🔒",
    passwordsDomainText:
      "Tus contraseñas pueden ser almacenadas asociadas a un dominio, por ejemplo puedes almacenar una contraseña de una red social o de una plataforma de streaming. Existe la posibilidad de crear una contraseña aleatoria generada en la misma aplicación.",
    passwordsMasterPasswordText:
      "La creación de la contraseña maestra descrita anteriormente es de vital importancia para el manejo de contraseñas, pues al momento de que un usuario ingresa a la aplicación se utliza el Derived Key para poder encriptar las contraseñas que el usuario desea crear.",
    passwordsDerivedKeyTitle: "Derived Key:",
    passwordsDerivedKeyText:
      "Descrita en la sección anterior, para las contraseñas el Derived Key se obtiene luego del inicio de sesión exitoso.",
    passwordsClearPasswordTitle: "Clear Password:",
    passwordsClearPasswordText: "Contraseña en claro.",
    passwordsPasswordNotInServerText1:
      "De la misma forma, tu contraseña en claro no es almacenada en nuestros servidores ya que se maneja un proceso de encriptación y en la base de datos se utilizan",
    passwordsPasswordNotInServerText2:
      "para almacenar los datos cifrados. Sin Derived Key es imposible desencriptar las contraseñas.",
    cardsTitle: "Tarjetas 💳",
    cardsTypeText:
      "SavePass permite almacenar tarjetas de crédito o débito de cualquier tipo. A diferencia de las contraseñas, las tarjetas contienen varios datos sensibles como número de tarjeta, identificador, expiración y código de seguridad.",
    cardsStandarText1: "Por ello, SavePass sigue el estándar",
    cardsStandarText2:
      "que permite mantener un entorno seguro en el procesamiento, almacenamiento y transmición de información relacionado con tarjetas de crédito. SavePass cumple con estos principios listados a continuación:",
    cardsSensitiveDataTitle: "Cifrado de Datos Sensibles:",
    cardsSensitiveDataText:
      "Las contraseñas en SavePass se encriptan utilizando AES (Advanced Encryption Standard), un método seguro y reconocido por PCI-DSS.",
    cardsSecureKeysTitle: "Derivación de Claves Segura:",
    cardSecureKeysText1: "El uso de",
    cardSecureKeysText2: "con",
    cardSecureKeysText3:
      "y 100,000 iteraciones refuerza la protección contra ataques de fuerza bruta, cumpliendo con los requisitos de robustez en la derivación de claves.",
    cardsDataExpositionTitle: "Protección contra Exposición de Datos:",
    cardsDataExpositionText:
      "Los datos sensibles, como contraseñas, nunca se almacenan en texto plano. Además, el Salt aleatorio garantiza que cada hash sea único, incluso para contraseñas iguales.",
    cardsIsolationInfoTitle: "Aislamiento de Información Crítica:",
    cardsIsolationInfoText:
      "Los datos encriptados y los identificadores del usuario están segregados, minimizando el riesgo de exposición en caso de vulnerabilidades.",
    cardsSecureAuthTitle: "Autenticación Segura:",
    cardsSecureAuthText:
      "El uso de autenticación biométrica y validación de sesión cumple con los lineamientos de acceso seguro y autenticación fuerte.",
    cardsSimilarFlowText:
      "El proceso de almacenado de tarjetas sigue un flujo muy similar al de las contraseñas descrito en la sección anterior, utilizando el Derived Key y no almacenando los datos de la tarjeta en claro en nuestros servidores.",
    cardsRLSTitle: "Row Level Security",
    cardsRLSText:
      "SavePass emplea RLS, la cual es una característica que permite definir políticas de acceso a nivel de fila en una base de datos. Esto significa que, incluso si los datos están en la misma tabla, cada usuario solo puede ver y manipular la información que le pertenece, según las reglas definidas.",
    techToolsTitle: "Herramientas Tecnológicas",
    techToolsFlutterTitle: "Flutter",
    techToolsFlutterText:
      "SavePass está construida con Flutter, diseñada para almacenar y gestionar contraseñas de forma segura y accesible.",
    techToolsFlutterFastText:
      "Aprovechando la potencia y versatilidad de Flutter, SavePass proporciona una experiencia rápida, fluida y segura en múltiples plataformas.",
    techToolsFlutterCrossPlatformText:
      "Flutter es creado por Google, lo cual asegura actualizaciones constantes y mejoras de seguridad, permite un manejo homogeneo en iOS y Android garantizando interfaces rápidas y transiciones fluidas.",
    techToolsFlutterADSText:
      "SavePass utiliza un sistema de diseño de interfaces atómico (ADS) construido en Flutter que permite utilizar componentes reutilizables y bien estructurados permitiendo escalabilidad al incorporar nuevas funcionalidades sin romper la estructura. ADS también es de código abierto para ser empleado en cualquier aplicación construida con Flutter.",
    techToolsSupabaseTitle: "Supabase",
    techToolsSupabaseAsBackendText:
      "SavePass utiliza Supabase como backend para gestionar y almacenar información de forma segura, aprovechando sus servicios avanzados de base de datos, autenticación y almacenamiento de archivos.",
    techToolsSupabaseRLSText1:
      "Supabase emplea PostgreSQL como base de datos, aplicando un modelo de seguridad robusto llamado",
    techToolsSupabaseRLSText2:
      "que restringe el acceso a los datos por usuario, asegurando que solo el propietario pueda visualizar y modificar su información.",
    techToolsSupabaseVaultText:
      "Las contraseñas, tarjetas de crédito y contraseña maestra no están almacenados en claro en Supabase, todo se maneja de manera encriptada y los metadatos están debidamente separados. Además, se empleada Supabase Vault, que permite tener un cifrado adicional a nivel de disco.",
    techToolsSupabaseStorageText:
      "SavePass también utiliza el almacenamiento de objetos de Supabase para gestionar archivos de forma segura otorgando acceso rápido y seguro mediante URLs temporales firmadas.",
    techToolsSupabaseProvidersText:
      "SavePass permite el inicio de sesión mediante distintos proveedores de autenticación gracias a Supabase:",
    techToolsSupabaseMailTitle: "Correo electrónico y contraseña:",
    techToolsSupabaseMailText: "La autenticación clásica y segura.",
    techToolsSupabaseGoogleTitle: "Google:",
    techToolsSupabaseGoogleText: "Acceso rápido utilizando cuentas de Google.",
    techToolsSupabaseGithubTitle: "GitHub:",
    techToolsSupabaseGithubText: "Integración directa para desarrolladores.",
    techToolsJWTText1: "Supabase gestiona la autenticación con",
    techToolsJWTText2:
      ", lo cual facilita la validación en cada petición de forma segura y escalable.",
    repositoriesTitle: "Repositorios",
    repositoriesText:
      "Todos los repositorios son de código abierto y están disponibles bajo la licencia MIT en Github, deja una estrella ⭐ si te gusta el proyecto y quieres apoyarlo.",
    repositoriesSavePassText:
      "La aplicación principal construida con Flutter para iOS y Android.",
    repositoriesADSText:
      "El sistema de diseño atómico para cualquier aplicación Flutter. SavePass utiliza este sistema de diseño.",
    repositoriesSavePassLandingPage:
      "El sitio web actual que está construido con NextJs, Typescript, Tailwind CSS y components de ShadCN.",
    repositoriesOpenText: "Ver repositorio",
    contactText:
      "¿Tiene preguntas, comentarios o necesita ayuda? No dude en ponerse en contacto con nosotros a través de cualquiera de los siguientes canales:",
    contactMailText: "Correo",
    contactPhoneText: "Teléfono",
    contactMIT: "MIT Licencia",
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
