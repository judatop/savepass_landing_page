"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/components/language-provider";
import { Apple, SmartphoneIcon as Android, Link } from "lucide-react";
import { Button } from "./ui/button";
import { QRCodeSVG } from "qrcode.react";

interface AppDownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const APP_STORE_URL = "https://apps.apple.com/us/app/savepass/id6751149518";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.juda.savepass";

export default function AppDownloadDialog({
  open,
  onOpenChange,
}: AppDownloadDialogProps) {
  const { translations } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-6 sm:p-8 w-[calc(100%-32px)] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="mb-1">
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl text-center mb-2">
            {translations.downloadApp}
          </DialogTitle>
          <DialogDescription className="text-center text-sm sm:text-base px-20 mt-3">
            {translations.downloadInstructions}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 sm:mt-4">
          <div className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6 border rounded-xl">
            <Apple className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mb-2 sm:mb-3 md:mb-4" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
              App Store
            </h3>
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white p-2 rounded-lg mb-2 sm:mb-4">
              <QRCodeSVG
                value={APP_STORE_URL}
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-row mt-4">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" onClick={() => {}}>
                  {translations.openIOS}
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6 border rounded-xl">
            <Android className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mb-2 sm:mb-3 md:mb-4" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
              Google Play
            </h3>
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white p-2 rounded-lg mb-2 sm:mb-4">
              <QRCodeSVG
                value={PLAY_STORE_URL}
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-row mt-4">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" onClick={() => {}}>
                  {translations.openAndroid}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
