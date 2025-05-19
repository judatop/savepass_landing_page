"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import { Apple, SmartphoneIcon as Android } from "lucide-react";

interface AppDownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AppDownloadDialog({
  open,
  onOpenChange,
}: AppDownloadDialogProps) {
  const { translations } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-4 sm:p-6 w-[calc(100%-32px)] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="mb-3 sm:mb-5">
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl text-center mb-2">
            {translations.downloadApp}
          </DialogTitle>
          <DialogDescription className="text-center text-sm sm:text-base">
            {translations.scanQrCode}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-2 sm:mt-4">
          {/* <div className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6 border rounded-xl">
            <Apple className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mb-2 sm:mb-3 md:mb-4" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
              App Store
            </h3>
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white p-2 rounded-lg mb-2 sm:mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="iOS QR Code"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground px-1">
              {translations.iosInstructions}
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6 border rounded-xl">
            <Android className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mb-2 sm:mb-3 md:mb-4" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
              Google Play
            </h3>
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white p-2 rounded-lg mb-2 sm:mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Android QR Code"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground px-1">
              {translations.androidInstructions}
            </p>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
