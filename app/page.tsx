"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ActivityForm } from "@/components/activity-form"
import { LocationForm } from "@/components/location-form"
import { SuccessModal } from "@/components/success-modal"
import { Sidebar } from "@/components/sidebar"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import type { ActivityFormData, FormStep } from "@/types/form"

export default function CreateActivity() {
  const [formData, setFormData] = useState<Partial<ActivityFormData>>({})
  const [currentStep, setCurrentStep] = useState<FormStep>("activity")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleActivitySubmit = (data: Partial<ActivityFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setCurrentStep("location")
  }

  const handleLocationSubmit = (data: Partial<ActivityFormData>) => {
    const finalData = { ...formData, ...data }
    console.log("Form submitted:", finalData)
    setShowSuccessModal(true)
  }

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false)
    setFormData({})
    setCurrentStep("activity")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-[1216px] mx-auto py-8 px-[32px]">
        <h1 className="text-[24px] font-bold leading-[31.2px] text-[#12151C] mb-[60px]">
          Create new Activity
        </h1>
        <div className="flex gap-[32px]">
          <Sidebar currentStep={currentStep} />
          <div className="flex-1">
            <Tabs value={currentStep} className="w-full">
              <TabsContent value="activity">
                <ActivityForm defaultValues={formData} onSubmit={handleActivitySubmit} />
              </TabsContent>
              <TabsContent value="location">
                <LocationForm
                  defaultValues={formData}
                  onBack={() => setCurrentStep("activity")}
                  onSubmit={handleLocationSubmit}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
      <SuccessModal open={showSuccessModal} onClose={handleSuccessModalClose} />
    </div>
  )
}

