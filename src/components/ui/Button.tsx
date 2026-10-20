import type { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center gap-2",
    "rounded-full px-5 py-2.5",
    "font-sans text-sm font-medium",
    "transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  variants: {
    variant: {
      primary: [
        "bg-neutral-900 text-white",
        "hover:bg-neutral-800",
        "focus-visible:outline-neutral-900",
      ],
      secondary: [
        "border border-neutral-400 bg-transparent text-neutral-900",
        "hover:bg-neutral-200",
        "focus-visible:outline-neutral-700",
      ],
      terracotta: [
        "bg-terracotta-700 text-white",
        "hover:bg-terracotta-600",
        "focus-visible:outline-terracotta-700",
      ],
      sun: [
        "bg-sun-200 text-neutral-900",
        "hover:bg-sun-300",
        "focus-visible:outline-neutral-700",
      ],
    },
    size: {
      sm: "px-3 py-2 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-6 py-3 text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps;

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
