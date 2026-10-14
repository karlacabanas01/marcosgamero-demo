import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "cta" | "ghost" | "ghost-dark" | "nav";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[2px] font-sans text-[13px] tracking-[0.04em] transition-all duration-300 whitespace-nowrap active:translate-y-px";

const variants: Record<ButtonVariant, string> = {
  cta: "bg-dark text-bg-light px-7 py-3.5 hover:bg-botanical",
  ghost:
    "bg-transparent border border-dark text-dark px-7 py-3.5 hover:bg-dark hover:text-bg-light",
  "ghost-dark":
    "bg-transparent border border-bg-light/70 text-bg-light px-7 py-3.5 hover:bg-bg-light hover:text-dark",
  nav: "bg-transparent border border-bg-light/70 text-bg-light px-5 py-2 text-[12px] tracking-[0.04em] hover:bg-bg-light hover:text-dark",
};

export function Button({
  href,
  variant = "cta",
  children,
  className = "",
  type,
}: {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  type?: "submit" | "button";
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
