import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Check } from 'lucide-react'

interface SuccessModalProps {
  open: boolean
  onClose: () => void
}

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center justify-center p-6 space-y-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
            <Check className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold text-center">Form Submitted</h2>
        </div>
      </DialogContent>
    </Dialog>
  )
}

