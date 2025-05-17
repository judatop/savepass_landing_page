import {
  Code,
  ExternalLink,
  Github,
  Globe,
  Package,
  Smartphone,
} from "lucide-react";
import { Button } from "../ui/button";
import { useLanguage } from "../language-provider";

export default function RepositoriesDocs() {
  const { translations } = useLanguage();

  return (
    <div className="text-justify py-6">
      <div className="space-y-4 mb-6">
        <h2 className="text-2xl font-bold">{translations.repositoriesTitle}</h2>
        <p>{translations.repositoriesText}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Repository */}
        <div className="bg-background rounded-xl p-6 shadow-sm border">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">SavePass</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            {translations.repositoriesSavePassText}
          </p>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Github className="h-4 w-4 mr-1" />
            <span>savepass</span>
          </div>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a
              href="https://github.com/judatop/savepass"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              {translations.repositoriesOpenText}
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </Button>
        </div>

        {/* Web App Repository */}
        <div className="bg-background rounded-xl p-6 shadow-sm border">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Package className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Atomic Design System</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            {translations.repositoriesADSText}
          </p>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Github className="h-4 w-4 mr-1" />
            <span>atomic_design_system</span>
          </div>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a
              href="https://github.com/judatop/atomic_design_system"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              {translations.repositoriesOpenText}
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </Button>
        </div>

        {/* Mobile App Repository */}
        <div className="bg-background rounded-xl p-6 shadow-sm border">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">SavePass Landing Page</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            {translations.repositoriesSavePassLandingPage}
          </p>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Github className="h-4 w-4 mr-1" />
            <span>savepass_landing_page</span>
          </div>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a
              href="https://github.com/judatop/savepass_landing_page"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              {translations.repositoriesOpenText}
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
