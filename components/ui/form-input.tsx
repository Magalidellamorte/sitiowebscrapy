import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const FormInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  return (
    <Input
      className={
        className
      }
      ref={ref}
      {...props}
    />
  );
});

FormInput.displayName = "FormInput";

export { FormInput };

