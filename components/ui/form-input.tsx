import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const FormInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  return (
    <Input
      className={cn(
        "w-full px-6 py-4 rounded-full border border-gray-200 placeholder-gray-400 text-gray-600 focus:ring-2  outline-none h-full focus-visible:ring-2 focus-visible:ring-green-500",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

FormInput.displayName = "FormInput";

export { FormInput };

