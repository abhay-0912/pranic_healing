export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.42em] text-gold-200/85">
      <span className="h-px w-12 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
      <span>{children}</span>
      <span className="h-px w-12 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
    </div>
  );
}
