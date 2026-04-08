-- Pranic Healing Center - Full Supabase SQL
-- Paste this file in Supabase SQL Editor and run once.

create extension if not exists pgcrypto;

-- ======================================================
-- TABLES
-- ======================================================

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  phone text,
  city text,
  bio text,
  avatar_url text,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.healers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  title text not null,
  bio text,
  speciality text,
  years_experience int default 0,
  certifications text[] default '{}',
  photo_url text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  level text not null,
  title text not null,
  description text,
  topics text[] default '{}',
  price numeric(10,2) not null default 0,
  duration text,
  featured boolean not null default false,
  image_url text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  status text not null default 'enrolled' check (status in ('enrolled', 'in_progress', 'completed', 'cancelled')),
  payment_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, course_id)
);

create table if not exists public.booking_slots (
  id uuid primary key default gen_random_uuid(),
  healer_id uuid not null references public.healers(id) on delete cascade,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  is_available boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  healer_id uuid references public.healers(id) on delete set null,
  slot_id uuid references public.booking_slots(id) on delete set null,
  service_type text not null,
  session_type text not null default 'in_person' check (session_type in ('in_person', 'online')),
  amount numeric(10,2) not null default 0,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'completed', 'cancelled')),
  notes text,
  meeting_link text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  amount numeric(10,2) not null,
  provider text not null default 'razorpay',
  provider_order_id text,
  provider_txn_id text,
  status text not null default 'created' check (status in ('created', 'paid', 'failed', 'refunded')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  course_id uuid references public.courses(id) on delete set null,
  healer_id uuid references public.healers(id) on delete set null,
  name text not null,
  text text not null,
  rating int not null default 5 check (rating between 1 and 5),
  approved boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  content text,
  tags text[] default '{}',
  cover_image_url text,
  published boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  interest text,
  source text default 'website',
  status text not null default 'new' check (status in ('new', 'contacted', 'converted', 'closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ======================================================
-- INDEXES
-- ======================================================

create index if not exists idx_profiles_role on public.profiles(role);
create index if not exists idx_healers_active on public.healers(active);
create index if not exists idx_courses_active on public.courses(active);
create index if not exists idx_booking_slots_healer_time on public.booking_slots(healer_id, starts_at);
create index if not exists idx_bookings_user on public.bookings(user_id);
create index if not exists idx_bookings_status on public.bookings(status);
create index if not exists idx_enrollments_user on public.enrollments(user_id);
create index if not exists idx_testimonials_approved on public.testimonials(approved);
create index if not exists idx_blog_posts_published on public.blog_posts(published);
create index if not exists idx_contact_leads_status on public.contact_leads(status);

-- ======================================================
-- TRIGGERS/FUNCTIONS
-- ======================================================

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_profiles_updated_at on public.profiles;
create trigger trg_profiles_updated_at before update on public.profiles for each row execute function public.set_updated_at();

drop trigger if exists trg_healers_updated_at on public.healers;
create trigger trg_healers_updated_at before update on public.healers for each row execute function public.set_updated_at();

drop trigger if exists trg_courses_updated_at on public.courses;
create trigger trg_courses_updated_at before update on public.courses for each row execute function public.set_updated_at();

drop trigger if exists trg_enrollments_updated_at on public.enrollments;
create trigger trg_enrollments_updated_at before update on public.enrollments for each row execute function public.set_updated_at();

drop trigger if exists trg_booking_slots_updated_at on public.booking_slots;
create trigger trg_booking_slots_updated_at before update on public.booking_slots for each row execute function public.set_updated_at();

drop trigger if exists trg_bookings_updated_at on public.bookings;
create trigger trg_bookings_updated_at before update on public.bookings for each row execute function public.set_updated_at();

drop trigger if exists trg_payments_updated_at on public.payments;
create trigger trg_payments_updated_at before update on public.payments for each row execute function public.set_updated_at();

drop trigger if exists trg_testimonials_updated_at on public.testimonials;
create trigger trg_testimonials_updated_at before update on public.testimonials for each row execute function public.set_updated_at();

drop trigger if exists trg_blog_posts_updated_at on public.blog_posts;
create trigger trg_blog_posts_updated_at before update on public.blog_posts for each row execute function public.set_updated_at();

drop trigger if exists trg_contact_leads_updated_at on public.contact_leads;
create trigger trg_contact_leads_updated_at before update on public.contact_leads for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email, phone)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    new.email,
    coalesce(new.raw_user_meta_data ->> 'phone', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- ======================================================
-- RLS
-- ======================================================

alter table public.profiles enable row level security;
alter table public.healers enable row level security;
alter table public.courses enable row level security;
alter table public.enrollments enable row level security;
alter table public.booking_slots enable row level security;
alter table public.bookings enable row level security;
alter table public.payments enable row level security;
alter table public.testimonials enable row level security;
alter table public.blog_posts enable row level security;
alter table public.contact_leads enable row level security;

-- profiles
create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);

-- healers: public read active only, admin writes
create policy "healers_public_read" on public.healers for select using (active = true);
create policy "healers_admin_write" on public.healers for all using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
) with check (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

-- courses: public read active only, admin writes
create policy "courses_public_read" on public.courses for select using (active = true);
create policy "courses_admin_write" on public.courses for all using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
) with check (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

-- enrollments: users own, admin all
create policy "enrollments_select_own_or_admin" on public.enrollments for select using (
  user_id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);
create policy "enrollments_insert_own" on public.enrollments for insert with check (user_id = auth.uid());
create policy "enrollments_update_own_or_admin" on public.enrollments for update using (
  user_id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

-- booking_slots: public read available only, admin writes
create policy "slots_public_read_available" on public.booking_slots for select using (is_available = true);
create policy "slots_admin_write" on public.booking_slots for all using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
) with check (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

-- bookings: own read/insert/update, admin all
create policy "bookings_select_own_or_admin" on public.bookings for select using (
  user_id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);
create policy "bookings_insert_own" on public.bookings for insert with check (user_id = auth.uid());
create policy "bookings_update_own_or_admin" on public.bookings for update using (
  user_id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

-- payments: own read/insert, admin all
create policy "payments_select_own_or_admin" on public.payments for select using (
  user_id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);
create policy "payments_insert_own" on public.payments for insert with check (user_id = auth.uid());

-- testimonials: public read approved, logged in insert, admin manage
create policy "testimonials_public_read_approved" on public.testimonials for select using (approved = true);
create policy "testimonials_insert_logged_in" on public.testimonials for insert with check (auth.uid() is not null);
create policy "testimonials_admin_manage" on public.testimonials for all using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
) with check (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

-- blog_posts: public read published, admin writes
create policy "blog_public_read_published" on public.blog_posts for select using (published = true);
create policy "blog_admin_write" on public.blog_posts for all using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
) with check (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

-- contact_leads: anyone insert, admin read/update
create policy "leads_insert_anyone" on public.contact_leads for insert with check (true);
create policy "leads_admin_select_update" on public.contact_leads for select using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);
create policy "leads_admin_update" on public.contact_leads for update using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

-- ======================================================
-- SEED DATA
-- ======================================================

insert into public.healers (name, slug, title, bio, speciality, years_experience, certifications, active)
values
('Anita Rai', 'anita-rai', 'Senior Pranic Healer', 'Anita blends disciplined healing technique with gentle communication and strong client care.', 'Emotional healing, relationship work', 12, array['Basic','Advanced','Psychotherapy'], true),
('Arjun Mehta', 'arjun-mehta', 'Certified Pranic Healer', 'Arjun focuses on practical, results-oriented healing sessions supported by clear aftercare.', 'Distance healing, prosperity work', 8, array['Basic','Advanced','Crystal'], true),
('Meenakshi Sharma', 'meenakshi-sharma', 'Meditation Facilitator', 'Meenakshi supports new students and groups with warmth, clarity, and grounded pacing.', 'Twin Hearts, beginner support', 10, array['Basic','Meditation','Arhatic prep'], true)
on conflict (slug) do nothing;

insert into public.courses (slug, level, title, description, topics, price, duration, featured, active)
values
('basic-pranic-healing', 'Level 01', 'Basic Pranic Healing', 'Foundations of scanning, cleansing, and energising the energy body.', array['Aura and chakras','Scanning','Cleansing','Energising','Self-healing'], 6500, '2 days', false, true),
('advanced-pranic-healing', 'Level 02', 'Advanced Pranic Healing', 'Advanced techniques including colour pranas and deeper cleansing protocols.', array['Color pranas','Advanced scanning','Deeper cleansing','Healing acceleration','Application practice'], 8900, '2 days', true, true),
('pranic-psychotherapy-course', 'Specialised', 'Pranic Psychotherapy', 'Working with emotional patterns, thoughts, and subconscious imprints.', array['Emotional cleansing','Thought forms','Trauma support','Inner calm','Case practice'], 9600, '2 days', false, true)
on conflict (slug) do nothing;

insert into public.blog_posts (slug, title, excerpt, content, tags, published)
values
('what-is-pranic-healing', 'What is Pranic Healing?', 'A practical introduction to the science, process, and philosophy behind the healing system.', 'Pranic Healing is a structured energy-based system that works on the subtle body before physical symptoms are addressed.', array['Pranic Healing'], true),
('meditation-on-twin-hearts', 'Meditation on Twin Hearts and Daily Stability', 'How a simple weekly practice can improve peace, clarity, and inner steadiness.', 'Twin Hearts meditation works with the crown and heart chakras to generate a cleaner and more coherent field.', array['Meditation'], true),
('energy-hygiene-for-modern-life', 'Energy Hygiene for Modern Life', 'Small energetic habits that support resilience, focus, and recovery.', 'Energy hygiene is the subtle equivalent of physical hygiene: regular, simple, and preventive.', array['Health'], true)
on conflict (slug) do nothing;

insert into public.testimonials (name, text, rating, approved)
values
('Rohit Verma', 'The sessions brought a calm I had not felt in years. I left with clarity and better sleep.', 5, true),
('Sana Khan', 'Twin Hearts meditation became a weekly reset. The atmosphere is disciplined and compassionate.', 5, true),
('Amit Joshi', 'The process is practical, respectful, and surprisingly structured. It helped me stay centered.', 4, true)
on conflict do nothing;
