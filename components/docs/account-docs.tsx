import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Info } from "lucide-react";
import LinkDocs from "./link-docs";
import { useLanguage } from "../language-provider";
import { useTheme } from "../theme-provider";

export default function AccountDocs() {
  const { translations } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="py-6 text-justify">
      <h2 className="text-2xl font-bold mb-2">{translations.accountTitle}</h2>
      <p className="text-lg mb-2">{translations.accountTextProviderText}</p>
      <p className="text-lg mb-2">{translations.accountTextMFAText}</p>
      <p className="text-lg mb-2">{translations.accountTextFeaturesText}</p>

      <div className="pl-8">
        <h3 className="text-xl font-bold mt-10 mb-2">
          {translations.accountMasterPasswordTitle}
        </h3>
        <p className="text-lg mb-6">
          {translations.accountMasterPasswordDescText}
        </p>
        <div className="flex justify-center">
          <Image
            src={
              theme === "light"
                ? "/docs/master_password_flow_light.png"
                : "/docs/master_password_flow.png"
            }
            alt="Master Password Flow"
            width={800}
            height={200}
            className="object-cover"
          />
        </div>

        <ul className="list-disc text-md space-y-2 mt-8">
          <li>
            <strong>{translations.accountSaltTitle}</strong>{" "}
            {translations.accountSaltDescText}
          </li>
          <li>
            <strong>{translations.accountDerivedKeyTitle}</strong>{" "}
            {translations.accountDerivedKeyDescText1}{" "}
            <LinkDocs
              text="PBKDF2"
              url="https://datatracker.ietf.org/doc/html/rfc2898"
            />{" "}
            {translations.accountDerivedKeyDescText2}
            {"  "}
            <LinkDocs
              text="HMAC-SHA256"
              url="https://datatracker.ietf.org/doc/html/rfc2104"
            />{" "}
            {translations.accountDerivedKeyDescText3}
          </li>
          <li>
            <strong>{translations.accountClearMasterPasswordTitle}</strong>{" "}
            {translations.accountClearMasterPasswordDescText}
          </li>
          <li>
            <strong>{translations.accountHashedMasterPasswordTitle}</strong>{" "}
            {translations.accountHashedMasterPasswordDescText}
          </li>
        </ul>
      </div>

      <Alert className="bg-primary/5 border-primary/20 my-6">
        <Info className="h-4 w-4" />
        <AlertTitle className="font-semibold">
          {translations.accountZeroKnowledgeArchTitle}
        </AlertTitle>
        <AlertDescription>
          {translations.accountZeroKnowledgeArchText}
        </AlertDescription>
      </Alert>
    </div>
  );
}
