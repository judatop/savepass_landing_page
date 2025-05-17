import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { ArrowUpRight, Info } from "lucide-react";
import LinkDocs from "./link-docs";
import { useLanguage } from "../language-provider";

export default function CardDocs() {
  const { translations } = useLanguage();

  return (
    <div className="py-6 mt text-justify">
      <h2 className="text-2xl font-bold mb-4">{translations.cardsTitle}</h2>
      <p className="text-lg mb-2">{translations.cardsTypeText}</p>

      <p className="text-lg mb-2">
        {translations.cardsStandarText1}{" "}
        <LinkDocs
          text="Payment Card Industry Data Security Standard (PCI-DSS)"
          url="https://www.pcisecuritystandards.org/"
        />{" "}
        {translations.cardsStandarText2}
      </p>

      <ul className="list-disc text-md space-y-2 mt-8">
        <li>
          <strong>{translations.cardsSensitiveDataTitle}</strong>{" "}
          {translations.cardsSensitiveDataText}
        </li>
        <li>
          <strong>{translations.cardsSecureKeysTitle}</strong>{" "}
          {translations.cardSecureKeysText1}{" "}
          <LinkDocs
            text="PBKDF2"
            url="https://datatracker.ietf.org/doc/html/rfc2898"
          />{" "}
          {translations.cardSecureKeysText2}
          {"  "}
          <LinkDocs
            text="HMAC-SHA256"
            url="https://datatracker.ietf.org/doc/html/rfc2104"
          />{" "}
          {translations.cardSecureKeysText3}
        </li>
        <li>
          <strong>{translations.cardsDataExpositionTitle}</strong>{" "}
          {translations.cardsDataExpositionText}
        </li>
        <li>
          <strong>{translations.cardsIsolationInfoTitle}</strong>{" "}
          {translations.cardsIsolationInfoText}
        </li>
        <li>
          <strong>{translations.cardsSecureAuthTitle}</strong>{" "}
          {translations.cardsSecureAuthText}
        </li>
      </ul>

      <p className="text-lg mt-6 mb-2">{translations.cardsSimilarFlowText}</p>

      <Alert className="bg-primary/5 border-primary/20 my-6">
        <Info className="h-4 w-4" />
        <AlertTitle className="font-semibold">
          {translations.cardsRLSTitle} (
          <LinkDocs
            text="RLS"
            url="https://supabase.com/docs/guides/database/postgres/row-level-security"
          />
          )
        </AlertTitle>
        <AlertDescription>{translations.cardsRLSText}</AlertDescription>
      </Alert>
    </div>
  );
}
