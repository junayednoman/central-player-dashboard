import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useFormContext, FieldValues, Path } from "react-hook-form";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface ADateTimePickerProps<TFieldValues extends FieldValues = FieldValues> {
  name: Path<TFieldValues>;
  label: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

export function ADateTimePicker<
  TFieldValues extends FieldValues = FieldValues
>({
  name,
  label,
  placeholder,
  className,
  disabled,
  required,
}: ADateTimePickerProps<TFieldValues>) {
  const { control } = useFormContext<TFieldValues>();
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("space-y-2", className)}>
          <FormLabel className="text-foreground">
            {label} {required && <span className="text-destructive">*</span>}
          </FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-between text-left font-normal",
                  !field.value && "text-muted-foreground",
                  "border-border bg-transparent h-13 rounded-full pr-4 pl-3"
                )}
                disabled={disabled}
              >
                <span className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value
                    ? format(field.value, "PPP")
                    : placeholder || "Pick a date"}
                </span>
                <span className="flex items-center ml-2">
                  <ClockIcon className="mr-1 h-4 w-4" />
                  {field.value ? format(field.value, "HH:mm") : "--:--"}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-card border-border">
              <div className="p-2">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={(date) => {
                    if (date) {
                      const newDate = new Date(date);
                      if (field.value) {
                        newDate.setHours(
                          field.value.getHours(),
                          field.value.getMinutes(),
                          0,
                          0
                        );
                      }
                      field.onChange(newDate);
                    }
                    setOpen(false);
                  }}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
                <div className="mt-2">
                  <Input
                    type="time"
                    value={field.value ? format(field.value, "HH:mm") : ""}
                    onChange={(e) => {
                      const [hours, minutes] = e.target.value.split(":");
                      const newDate = field.value
                        ? new Date(field.value)
                        : new Date();
                      newDate.setHours(
                        parseInt(hours, 10),
                        parseInt(minutes, 10),
                        0,
                        0
                      );
                      field.onChange(newDate);
                    }}
                    className="w-full border-border bg-card text-foreground h-12 rounded-full"
                    disabled={disabled}
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
