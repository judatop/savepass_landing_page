"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Apple, SmartphoneIcon as Android } from "lucide-react"

interface AppDownloadDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AppDownloadDialog({ open, onOpenChange }: AppDownloadDialogProps) {
  const { translations } = useLanguage()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-8">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-3xl text-center mb-4">{translations.downloadApp}</DialogTitle>
          <DialogDescription className="text-center text-lg">{translations.scanQrCode}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* iOS App Store */}
          <div className="flex flex-col items-center text-center p-8 border rounded-xl">
            <Apple className="h-16 w-16 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-4">App Store</h3>
            <div className="w-56 h-56 bg-white p-3 rounded-lg mb-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="iOS QR Code"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
            <p className="text-base text-muted-foreground">{translations.iosInstructions}</p>
          </div>

          {/* Android Play Store */}
          <div className="flex flex-col items-center text-center p-8 border rounded-xl">
            <Android className="h-16 w-16 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Google Play</h3>
            <div className="w-56 h-56 bg-white p-3 rounded-lg mb-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Android QR Code"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
            <p className="text-base text-muted-foreground">{translations.androidInstructions}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
