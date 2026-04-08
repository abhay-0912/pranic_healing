import Link from "next/link";

export default function BrandMark() {
  return (
    <Link href="/" className="group inline-flex flex-col leading-none">
      <span className="font-display text-2xl font-light tracking-[0.35em] text-gold-300 transition-colors duration-300 group-hover:text-gold-200 sm:text-[1.9rem]">
        Pranic
      </span>
      <span className="mt-1 text-[0.8rem] italic font-light tracking-[0.3em] text-white/85 transition-colors duration-300 group-hover:text-white">
        Healing Center
      </span>
    </Link>
  );
}
