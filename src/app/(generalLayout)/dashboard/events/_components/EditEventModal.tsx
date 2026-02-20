"use client";

import { useState } from "react";
import AForm from "@/components/form/AForm";
import { AInput } from "@/components/form/AInput";
import { ASelect } from "@/components/form/ASelect";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ADateTimePicker } from "@/components/form/ADateAndTimePicker";
import { ATextarea } from "@/components/form/ATextarea";
import { ARadioGroup } from "@/components/form/ARadioGroup";
import { toast } from "sonner";

// Define the event schema using zod
const eventSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  type: z.string().min(1, "Event type is required"),
  location: z.string().min(1, "Event location is required"),
  dateTime: z.date({ required_error: "Date and time are required" }),
  description: z.string().optional(),
  isFree: z.enum(["free", "paid"]),
});

type TEventType = z.infer<typeof eventSchema>;

const EditEventModal = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const types = [
    { value: "competition", label: "Competition" },
    { value: "workshop", label: "Workshop" },
    { value: "concert", label: "Concert" },
  ];

  const locations = [
    { value: "central_park", label: "Central Park" },
    { value: "times_square", label: "Times Square" },
    { value: "brooklyn_bridge", label: "Brooklyn Bridge" },
  ];

  const eventTypes = [
    { value: "free", label: "Free Event" },
    { value: "paid", label: "Paid Event" },
  ];

  const onSubmit = (data: TEventType) => {
    console.log("Form submitted:", data);
    toast.success("Event updated successfully");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogOverlay className="fixed inset-0 bg-black/30 backdrop-blur-[.8px]" />
      <DialogContent className="min-w-[700px]">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl!">Edit Event</DialogTitle>
        </DialogHeader>
        <AForm
          schema={eventSchema}
          defaultValues={{
            name: "",
            type: "",
            location: "",
            dateTime: new Date(), // Default to current date and time (05:03 PM +06, Oct 24, 2025)
            description: "",
            isFree: "free", // Default to Free Event
          }}
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <AInput name="name" label="Event name" type="text" required />
            </div>
            <ASelect
              name="type"
              label="Event type"
              options={types}
              placeholder="Select event type"
              required
            />
            <ASelect
              name="location"
              label="Event location"
              options={locations}
              placeholder="Select location"
              required
            />
            <div className="col-span-1">
              <AInput
                name="image"
                label="Image"
                type="file"
                className="py-3 pl-3"
                required={false}
              />
            </div>
            <div className="col-span-1">
              <AInput
                name="video"
                label="Video"
                type="file"
                className="py-3 pl-3"
                required={false}
              />
            </div>
            <div className="col-span-2">
              <ADateTimePicker
                name="dateTime"
                label="Date and Time"
                placeholder="Pick a date and time"
                required
              />
            </div>
            <div className="col-span-2">
              <ATextarea
                name="description"
                label="Description"
                placeholder="Enter event description"
                required={false}
              />
            </div>
            <div className="col-span-2">
              <ARadioGroup
                name="isFree"
                label="Event Type"
                options={eventTypes}
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="h-13 w-full bg-grad text-white rounded-full"
          >
            Save
          </Button>
        </AForm>
      </DialogContent>
    </Dialog>
  );
};

export default EditEventModal;
