import { createClient } from "@supabase/supabase-js";
import { blogPosts, contactChannels, courses, faqItems, healers, services, testimonials, timeline, values } from "@/lib/site-data";

function getServerSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    return null;
  }
  return createClient(url, key, {
    auth: { persistSession: false }
  });
}

export async function getCourses() {
  const client = getServerSupabaseClient();
  if (!client) return courses;

  const { data } = await client
    .from("courses")
    .select("id, slug, level, title, price, duration, featured, description, topics")
    .eq("active", true)
    .order("id", { ascending: true });

  if (!data || data.length === 0) return courses;

  return data.map((course) => ({
    slug: course.slug,
    level: course.level,
    title: course.title,
    price: course.price,
    duration: course.duration || "2 days",
    featured: Boolean(course.featured),
    excerpt: course.description,
    description: course.description,
    topics: Array.isArray(course.topics) && course.topics.length > 0 ? course.topics : ["Healing foundations", "Practical methods"],
    nextDate: "2026-06-15",
    seatsRemaining: 10,
    image: ""
  }));
}

export async function getHealers() {
  const client = getServerSupabaseClient();
  if (!client) return healers;

  const { data } = await client
    .from("healers")
    .select("id, slug, name, title, speciality, bio, photo_url, years_experience, certifications")
    .eq("active", true)
    .order("id", { ascending: true });

  if (!data || data.length === 0) return healers;

  return data.map((healer) => ({
    slug: healer.slug,
    name: healer.name,
    title: healer.title,
    speciality: healer.speciality,
    experience: `${healer.years_experience || 5} years`,
    rating: 4.8,
    certifications: Array.isArray(healer.certifications) ? healer.certifications : ["Basic", "Advanced"],
    bio: healer.bio,
    availability: ["Mon", "Wed", "Sat"],
    photo: healer.photo_url || ""
  }));
}

export async function getTestimonials() {
  const client = getServerSupabaseClient();
  if (!client) return testimonials;

  const { data } = await client
    .from("testimonials")
    .select("name, text, rating")
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(6);

  if (!data || data.length === 0) return testimonials;

  return data.map((item) => ({
    name: item.name,
    title: "Client",
    quote: item.text,
    rating: item.rating || 5,
    avatar: ""
  }));
}

export async function getBlogPosts() {
  const client = getServerSupabaseClient();
  if (!client) return blogPosts;

  const { data } = await client
    .from("blog_posts")
    .select("slug, title, excerpt, content, tags, created_at")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (!data || data.length === 0) return blogPosts;

  return data.map((post) => ({
    slug: post.slug,
    title: post.title,
    category: Array.isArray(post.tags) && post.tags[0] ? post.tags[0] : "Pranic Healing",
    readTime: "6 min read",
    date: post.created_at ? post.created_at.slice(0, 10) : "2026-04-01",
    excerpt: post.excerpt || "",
    content: Array.isArray(post.content) ? post.content : [post.content || ""]
  }));
}

export async function getContactChannels() {
  return contactChannels;
}

export async function getPageConstants() {
  return { services, faqItems, timeline, values };
}
