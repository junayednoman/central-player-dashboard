import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext, FieldValues, Path } from "react-hook-form";
import React from "react";
import { cn } from "@/lib/utils";

interface Option {
  value: string;
  label: string;
}

interface ARadioGroupProps<TFieldValues extends FieldValues = FieldValues> {
  name: Path<TFieldValues>;
  label: string;
  options: Option[];
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

export function ARadioGroup<TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  options,
  className,
  disabled,
  required,
}: ARadioGroupProps<TFieldValues>) {
  const { control } = useFormContext<TFieldValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("space-y-2", className)}>
          <FormLabel className="text-foreground">
            {label} {required && <span className="text-destructive">*</span>}
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className="flex space-x-4"
              disabled={disabled}
            >
              {options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.value}
                    id={`${name}-${option.value}`}
                    className="border-border text-foreground"
                  />
                  <label
                    htmlFor={`${name}-${option.value}`}
                    className="text-foreground"
                  >
                    {option.label}
                    {option.value === "paid" && (
                      <span className="ml-2 text-yellow-400 font-bold">
                        $10.00
                      </span>
                    )}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}