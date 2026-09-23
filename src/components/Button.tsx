import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "cta" | "ghost" | "ghost-dark" | "nav";

const base =
  "inline-flex items-center justify-center gap-2 rounded font-semibold text-[13px] tracking-[0.04em] transition-all duration-300 whitespace-nowrap active:translate-y-px";

const variants: Record<ButtonVariant, string> = {
  cta: "bg-carbon text-linen px-7 py-3.5 hover:bg-terracotta",
  ghost:
    "bg-transparent border border-carbon text-carbon px-7 py-3.5 hover:bg-carbon hover:text-linen",
  "ghost-dark":
    "bg-transparent border border-linen/60 text-linen px-7 py-3.5 hover:bg-linen hover:text-carbon",
  nav: "bg-terracotta text-linen px-5 py-2.5 text-[11.5px] tracking-[0.1em] hover:bg-terracotta-deep",
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
