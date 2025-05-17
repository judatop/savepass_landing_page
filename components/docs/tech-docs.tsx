import { useLanguage } from "../language-provider";
import LinkDocs from "./link-docs";

export default function TechDocs() {
  const { translations } = useLanguage();

  return (
    <div className="text-justify py-6">
      <h2 className="text-2xl font-bold mb-4">{translations.techToolsTitle}</h2>
      <h3 className="text-xl font-bold mb-2">
        <LinkDocs
          text={translations.techToolsFlutterTitle}
          url="https://flutter.dev/"
        />
      </h3>
      <p className="text-lg mb-2">{translations.techToolsFlutterText}</p>
      <p className="text-lg mb-2">{translations.techToolsFlutterFastText}</p>
      <p className="text-lg mb-2">
        {translations.techToolsFlutterCrossPlatformText}
      </p>
      <p className="text-lg mb-2">{translations.techToolsFlutterADSText}</p>

      <h3 className="text-xl font-bold mt-6 mb-2">
        <LinkDocs
          text={translations.techToolsSupabaseTitle}
          url="https://supabase.com/"
        />
      </h3>
      <p className="text-lg mb-2">
        {translations.techToolsSupabaseAsBackendText}
      </p>
      <p className="text-lg mb-2">
        {translations.techToolsSupabaseRLSText1}{" "}
        <LinkDocs
          text="Row-Level Security (RLS)"
          url="https://supabase.com/docs/guides/database/postgres/row-level-security"
        />{" "}
        {translations.techToolsSupabaseRLSText2}
      </p>
      <p className="text-lg mb-2">{translations.techToolsSupabaseVaultText}</p>
      <p className="text-lg mb-2">
        {translations.techToolsSupabaseStorageText}
      </p>
      <p className="text-lg mb-2">
        {translations.techToolsSupabaseProvidersText}
      </p>
      <div className="mt-6 pl-8">
        <ul className="list-disc text-md space-y-2 mt-2">
          <li>
            <strong>{translations.techToolsSupabaseMailTitle} </strong>{" "}
            {translations.techToolsSupabaseMailText}
          </li>
          <li>
            <strong>{translations.techToolsSupabaseGoogleTitle}</strong>{" "}
            {translations.techToolsSupabaseGoogleText}
          </li>
          <li>
            <strong>{translations.techToolsSupabaseGithubTitle}</strong>{" "}
            {translations.techToolsSupabaseGithubText}
          </li>
        </ul>
      </div>
      <p className="text-lg mt-6 mb-2">
        {translations.techToolsJWTText1}{" "}
        <LinkDocs
          text="JWT (JSON Web Tokens)"
          url="https://datatracker.ietf.org/doc/html/rfc7519"
        />{" "}
        {translations.techToolsJWTText2}
      </p>
    </div>
  );
}
