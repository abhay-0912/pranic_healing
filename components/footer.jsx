import Link from "next/link";
import Button from "@/components/ui/button";

const services = ["Personal Healing", "Distance Healing", "Pranic Psychotherapy", "Relationship Healing", "Prosperity Healing", "Twin Hearts Meditation"];
const courses = ["Basic Pranic Healing", "Advanced Pranic Healing", "Pranic Psychotherapy", "Pranic Crystal Healing", "Arhatic Yoga"];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950 px-6 pb-8 pt-16 sm:px-10 lg:px-16 lg:pt-20">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-4">
        <div className="space-y-5">
          <div>
            <p className="font-display text-3xl font-light tracking-[0.25em] text-gold-300">Pranic</p>
            <p className="mt-1 text-sm italic tracking-[0.3em] text-white/85">Healing Center</p>
          </div>
          <p className="max-w-sm text-sm leading-7 text-ink-500">
            Dedicated to bringing the transformative science of Pranic Healing to all who seek it in compassion, integrity, and service.
          </p>
          <div className="flex gap-3 text-sm text-gold-200">
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">YouTube</Link>
            <Link href="#">WhatsApp</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.35em] text-gold-200/80">Services</h3>
          <ul className="space-y-3 text-sm text-ink-300">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.35em] text-gold-200/80">Courses</h3>
          <ul className="space-y-3 text-sm text-ink-300">
            {courses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.35em] text-gold-200/80">Connect</h3>
          <div className="space-y-3 text-sm text-ink-300">
            <p>Email: info@pranichealing.center</p>
            <p>Phone: +91 12345 67890</p>
            <p>Address: Lucknow, Uttar Pradesh, India</p>
            <p>Weekly meditation: Sunday 7AM IST</p>
          </div>
          <div className="mt-5 flex gap-2">
            <input className="min-w-0 flex-1 rounded-full border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white outline-none placeholder:text-ink-500" placeholder="Email for newsletter" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col gap-3 border-t border-white/5 pt-6 text-xs uppercase tracking-[0.25em] text-ink-500 lg:flex-row lg:items-center lg:justify-between">
        <p>© 2025 Pranic Healing Center. All rights reserved.</p>
        <p className="font-display text-sm italic text-gold-200 normal-case tracking-normal">Healing the world, one soul at a time.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}
