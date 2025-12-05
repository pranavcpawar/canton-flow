"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type DatePickerProps = {
  id?: string;
  label?: string;
  value?: Date;
  onChange?: (date?: Date) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

export function DatePicker({
  id = "date",
  label = "Due date",
  value,
  onChange,
  placeholder = "Select date",
  required,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(value);

  React.useEffect(() => {
    setInternalDate(value);
  }, [value]);

  const selectedDate = value ?? internalDate;

  const handleSelect = (date?: Date) => {
    if (onChange) {
      onChange(date);
    } else {
      setInternalDate(date);
    }
    setOpen(false);
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id} className="px-1 text-sm font-semibold">
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" id={id} className="w-full justify-between font-normal">
            {selectedDate
              ? selectedDate.toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : placeholder}
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            captionLayout="dropdown"
            onSelect={(date) => handleSelect(date ?? undefined)}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
