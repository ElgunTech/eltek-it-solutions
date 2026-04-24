"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
}

const variantClasses: Record<Variant, string> = {
  primary: [
    "bg-eltek-500 hover:bg-eltek-600 active:bg-eltek-700",
    "text-white",
    "shadow-glow-sm hover:shadow-glow",
    "border border-eltek-400/30",
  ].join(" "),

  secondary: [
    "bg-eltek-500/10 hover:bg-eltek-500/20",
    "text-eltek-500 dark:text-eltek-400",
    "border border-eltek-500/30 hover:border-eltek-500/60",
  ].join(" "),

  ghost: [
    "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800",
    "text-slate-700 dark:text-slate-300",
  ].join(" "),

  outline: [
    "bg-transparent",
    "border border-slate-300 dark:border-slate-700",
    "text-slate-700 dark:text-slate-300",
    "hover:border-eltek-500/50 hover:text-eltek-500 dark:hover:text-eltek-400",
  ].join(" "),
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

/**
 * Reusable Button component with multiple variants, sizes, and loading state.
 * Renders as <a> when href is provided, otherwise <button>.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      href,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      // Base
      "inline-flex items-center justify-center font-display font-semibold",
      "rounded-2xl transition-all duration-200 active:scale-[0.97]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eltek-500 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      // Variant & size
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
        ) : leftIcon ? (
          <span aria-hidden="true">{leftIcon}</span>
        ) : null}
        {children}
        {!isLoading && rightIcon ? (
          <span aria-hidden="true">{rightIcon}</span>
        ) : null}
      </>
    );

    if (href) {
      return (
        <a href={href} className={baseClasses}>
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
