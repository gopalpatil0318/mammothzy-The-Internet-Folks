import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, MapPin } from 'lucide-react'

interface SidebarProps {
  currentStep: 'activity' | 'location'
}

export function Sidebar({ currentStep }: SidebarProps) {
  return (
    <div className="w-[212px] h-[96px] ">
      <Tabs value={currentStep} className="w-full">
        <TabsList className="flex flex-col w-full h-full bg-transparent">
          <TabsTrigger
            value="activity"
            className="flex items-center justify-start w-full px-4 py-3 text-left data-[state=active]:bg-[#F5F5F5]"
          >
            <FileText className="w-4 h-4 mr-2" />
            <span>Activity Details</span>
          </TabsTrigger>
          <TabsTrigger
            value="location"
            className="flex items-center justify-start w-full px-4 py-3 text-left data-[state=active]:bg-[#F5F5F5]"
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span>Location Details</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

