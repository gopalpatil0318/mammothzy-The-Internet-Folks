"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import type { ActivityFormData } from "@/types/form"

const activitySchema = z.object({
    activityName: z.string().min(1, "Activity name is required"),
    category: z.string().min(1, "Please select a category"),
    otherCategory: z.string().optional(),
    description: z.string().min(1, "Activity description is required"),
    activityType: z.enum(["indoor", "outdoor", "virtual"]),
    locationType: z.enum(["provider", "user"]),
    minMembers: z.string().optional(),
    maxMembers: z.string().optional(),
})

interface ActivityFormProps {
    defaultValues?: Partial<ActivityFormData>
    onSubmit: (data: Partial<ActivityFormData>) => void
}

export function ActivityForm({ defaultValues, onSubmit }: ActivityFormProps) {
    const form = useForm<Partial<ActivityFormData>>({
        resolver: zodResolver(activitySchema),
        defaultValues: {
            activityName: "",
            category: "",
            description: "",
            activityType: "indoor",
            locationType: "provider",
            minMembers: "",
            maxMembers: "",
            ...defaultValues,
        },
    })

    return (
        <div className="border-l border-[#E7E7E7] pl-9 flex flex-col gap-[24px]">
            <h2 className="text-[18px] font-bold text-[#2E2B2B] leading-[24px] text-left">
                Activity Details
            </h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[596px] ">
                    <FormField
                        control={form.control}
                        name="activityName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[14px] font-medium text-[#2E2B2B] mb-2 block leading-[20px] text-left">Activity Name <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Eg: Cooking class in Palo Alto" {...field} className="h-[42px] rounded-full border border-[#E5E5E5] px-4" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel className="text-[14px] font-medium text-[#2E2B2B] mb-2 block leading-[20px] text-left">Select the best category to describe your activity <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="grid grid-cols-1 gap-4"
                                    >
                                        {[
                                            "Adventure & Games",
                                            "Creative Expression",
                                            "Food & Drink",
                                            "Learning & Development",
                                            "Sports and Fitness",
                                            "Volunteering",
                                            "Other",
                                        ].map((category) => (
                                            <div key={category} className="flex items-center space-x-2">
                                                <RadioGroupItem value={category} id={category} className="w-[18px] h-[18px] border-[#202632] checked:bg-[#202632]" />
                                                <Label htmlFor={category} className="text-[14px] font-normal text-[#2E2B2B]">{category}</Label>
                                            </div>
                                        ))}
                                    </RadioGroup>

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {form.watch("category") === "Other" && (
                        <FormField
                            control={form.control}
                            name="otherCategory"
                            render={({ field }) => (
                                <FormItem>

                                    <FormControl>
                                        <Input {...field} className="h-[42px] rounded-full border border-[#E5E5E5] px-4 " placeholder="Specify the category" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[14px] font-medium text-[#2E2B2B] mb-2 block leading-[20px] text-left">About the Activity <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Activity Description"
                                        className="min-h-[148px] border-[1.5px] border-[#E7ECF4] rounded-[10px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="activityType"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel className="text-[14px] font-medium text-[#2E2B2B] mb-2 block leading-[20px] text-left">Please select the activity type <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        {["indoor", "outdoor", "virtual"].map((type) => (
                                            <div key={type} className="flex items-center space-x-2">
                                                <RadioGroupItem value={type} id={type} className="w-[18px] h-[18px] border-[#202632] checked:bg-[#202632]" />
                                                <Label htmlFor={type} className="text-[14px] text-[#2E2B2B] font-normal capitalize">
                                                    {type}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="locationType"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel className="text-[14px] font-medium text-[#2E2B2B] mb-2 block leading-[20px] text-left">Please select the type of location <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="provider" id="provider" className="w-[18px] h-[18px] border-[#202632] checked:bg-[#202632]" />
                                            <Label htmlFor="provider" className="text-[14px] font-normal text-[#2E2B2B]">Provider Location</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="user" id="user" className="w-[18px] h-[18px] border-[#202632] checked:bg-[#202632]" />
                                            <Label htmlFor="user" className="text-[14px] font-normal text-[#2E2B2B]">User Location</Label>
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormLabel className="text-[14px] font-medium text-[#2E2B2B] mb-1 block">How many members can take part in the activity?</FormLabel>
                    <div className="grid grid-cols-2 gap-[16px]">

                        <FormField
                            control={form.control}
                            name="minMembers"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                         
                                            placeholder="Minimum Members"
                                           
                                            {...field}
                                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                                            className="w-full h-[38px] border border-[#E5E5E5] rounded-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="maxMembers"
                            render={({ field }) => (
                                <FormItem>

                                    <FormControl>
                                        <Input
                                          
                                            placeholder="Maximum Members"
                                         
                                            {...field}
                                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                                            className="w-full h-[38px] border border-[#E5E5E5] rounded-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button type="submit" className="w-[169px] h-[44px] rounded-full bg-[#001D44] text-white">
                        Save and Continue
                    </Button>
                </form>
            </Form>
        </div>
    )
}

