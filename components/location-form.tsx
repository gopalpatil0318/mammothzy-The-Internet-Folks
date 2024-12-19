"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { ActivityFormData } from "@/types/form"

const locationSchema = z.object({
  addressLine1: z.string().min(1, "Address is required"),
  addressLine2: z.string().optional(),
  zipCode: z.string().min(1, "ZIP code is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
  contactName: z.string().min(1, "Contact name is required"),
})

interface LocationFormProps {
  defaultValues?: Partial<ActivityFormData>
  onBack: () => void
  onSubmit: (data: Partial<ActivityFormData>) => void
}

export function LocationForm({ defaultValues, onBack, onSubmit }: LocationFormProps) {
  const form = useForm<Partial<ActivityFormData>>({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
      city: "",
      state: "",
      contactNumber: "",
      contactName: "",
      ...defaultValues,
    },
  })

  return (
    <div className="border-l border-[#E7E7E7] pl-9 flex flex-col gap-[24px]">
      <h2 className="text-[18px] font-bold text-[#2E2B2B] leading-[24px] text-left">
        Activity Details
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[596px]">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] font-medium text-[#2E2B2B] mb-2 block leading-[20px] text-left">Address Line 1 <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="House number and street name" {...field} className="h-[42px] rounded-full border border-[#E5E5E5] px-4" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="addressLine2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line 2</FormLabel>
                <FormControl>
                  <Input placeholder="Other information, e.g., building name, landmark, etc." {...field} className="h-[42px] rounded-full border border-[#E5E5E5] px-4" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] font-medium text-[#2E2B2B] mb-2 block leading-[20px] text-left">ZIP Code <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="eg: 123 457" {...field} className="h-[42px] rounded-full border border-[#E5E5E5] px-4" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] font-medium text-[#2E2B2B] mb-2 block leading-[20px] text-left">City <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Your City" {...field} className="h-[42px] rounded-full border border-[#E5E5E5] px-4" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] font-medium text-[#2E2B2B] mb-2 block leading-[20px] text-left">State <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                      <SelectTrigger>
                        <SelectValue placeholder="Your State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                        {/* Add more states as needed */}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact details</h3>
            <p className="text-sm text-muted-foreground">
              Please provide contact information for this activity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number *</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <Select defaultValue="US" disabled >
                        <SelectTrigger>
                          <SelectValue>
                            <span className="flex items-center">
                              <span className="ml-2">+1</span>
                            </span>
                          </SelectValue>
                        </SelectTrigger>
                      </Select>
                      <Input className="flex-1 ml-2 h-[42px] rounded-full border border-[#E5E5E5] px-4" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="h-[42px] rounded-full border border-[#E5E5E5] px-4" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-between space-x-4">
            <Button type="button" variant="outline" onClick={onBack} className="w-[169px] h-[44px] rounded-full">
              Previous
            </Button>
            <Button type="submit" className="w-[169px] h-[44px] rounded-full bg-[#001D44] text-white">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

