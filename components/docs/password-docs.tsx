import Image from "next/image";
import LinkDocs from "./link-docs";
import { useLanguage } from "../language-provider";
import { useTheme } from "../theme-provider";

export default function PasswordDocs() {
  const { translations } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="py-6 mt text-justify">
      <h2 className="text-2xl font-bold mb-4">{translations.passwordsTitle}</h2>
      <p className="text-lg mb-2">{translations.passwordsDomainText}</p>
      <p className="text-lg mb-2">{translations.passwordsMasterPasswordText}</p>

      <div className="flex justify-center my-6">
        <Image
          src={
            theme === "light"
              ? "/docs/password_flow_light.png"
              : "/docs/password_flow.png"
          }
          alt="Master Password Flow"
          width={600}
          height={200}
          className="object-cover"
        />
      </div>

      <ul className="list-disc text-md space-y-2 mt-8 mb-6">
        <li>
          <strong>{translations.passwordsDerivedKeyTitle}</strong>{" "}
          {translations.passwordsDerivedKeyText}
        </li>
        <li>
          <strong>{translations.passwordsClearPasswordTitle}</strong>{" "}
          {translations.passwordsClearPasswordText}
        </li>
      </ul>

      <p className="text-lg mb-2">
        {translations.passwordsPasswordNotInServerText1}
        {"  "}
        <LinkDocs
          text="Vaults"
          url="https://supabase.com/docs/guides/database/vault"
        />{" "}
        {translations.passwordsPasswordNotInServerText2}
      </p>
    </div>
  );
}
