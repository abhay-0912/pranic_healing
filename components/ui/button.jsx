import Link from "next/link";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary: "border-gold-300 bg-gold-300 text-ink-950 hover:bg-gold-200 hover:border-gold-200",
  outline: "border-gold-300/40 bg-transparent text-gold-100 hover:border-gold-200 hover:text-white hover:bg-white/5",
  ghost: "border-transparent bg-transparent px-0 text-ink-300 hover:text-gold-100"
};

export default function Button({ href, variant = "primary", className = "", children, ...props }) {
  const classes = `${baseClasses} ${variants[variant] ?? variants.primary} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
