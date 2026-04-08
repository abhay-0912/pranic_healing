import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";

export default function PublicLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-ink-950 text-ink-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,169,110,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(29,97,111,0.08),transparent_28%)]" />
      <CustomCursor />
      <Navbar />
      <main className="relative pt-[88px]">{children}</main>
      <Footer />
    </div>
  );
}
