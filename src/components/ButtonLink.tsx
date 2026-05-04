import { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "dark";
  icon?: ReactNode;
};

const variants = {
  primary:
    "bg-copper text-graphite shadow-copper hover:bg-copper-2 focus-visible:outline-copper-2",
  secondary:
    "border border-ice/18 bg-ice/[0.06] text-ice hover:border-copper/60 hover:bg-copper/10 focus-visible:outline-copper",
  dark:
    "border border-graphite/15 bg-graphite text-ice hover:bg-mineral focus-visible:outline-graphite",
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  icon,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-5 py-3 text-sm font-bold leading-none transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:px-6 ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon ? <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span> : null}
    </a>
  );
}
