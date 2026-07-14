create extension if not exists pgcrypto;

create table if not exists public.circle3_applications (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  name text not null,
  email text not null,
  email_hash text not null,
  country text not null,
  age_group text not null,
  role text not null check (role in ('speaker', 'observer')),
  purpose text not null,
  language text not null,
  timezone text not null,
  safety_note text not null,
  consent_at timestamptz not null,
  ip_hash text not null,
  status text not null default 'submitted' check (status in ('submitted','reviewing','waitlisted','approved','matched','declined','withdrawn')),
  reviewer_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists circle3_applications_email_hash_idx on public.circle3_applications(email_hash);
create index if not exists circle3_applications_ip_hash_created_idx on public.circle3_applications(ip_hash, created_at desc);
create index if not exists circle3_applications_matching_idx on public.circle3_applications(status, purpose, language, timezone);

create table if not exists public.circle3_rooms (
  id uuid primary key default gen_random_uuid(),
  purpose text not null,
  language text not null,
  timezone text not null,
  status text not null default 'forming' check (status in ('forming','ready','active','paused','closed')),
  safety_level text not null default 'standard',
  created_at timestamptz not null default now(),
  closed_at timestamptz
);

create table if not exists public.circle3_room_members (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.circle3_rooms(id) on delete cascade,
  application_id uuid references public.circle3_applications(id) on delete set null,
  auth_user_id uuid,
  role text not null check (role in ('speaker','observer','moderator')),
  joined_at timestamptz not null default now(),
  left_at timestamptz,
  unique(room_id, auth_user_id)
);

create table if not exists public.circle3_messages (
  id bigint generated always as identity primary key,
  room_id uuid not null references public.circle3_rooms(id) on delete cascade,
  member_id uuid not null references public.circle3_room_members(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 2000),
  message_type text not null default 'message' check (message_type in ('message','prompt','observer_note','system')),
  moderation_status text not null default 'pending' check (moderation_status in ('pending','approved','flagged','removed')),
  created_at timestamptz not null default now()
);

create table if not exists public.circle3_reports (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.circle3_rooms(id) on delete cascade,
  reporter_member_id uuid references public.circle3_room_members(id) on delete set null,
  message_id bigint references public.circle3_messages(id) on delete set null,
  category text not null,
  details text not null,
  status text not null default 'open' check (status in ('open','reviewing','resolved','dismissed')),
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

alter table public.circle3_applications enable row level security;
alter table public.circle3_rooms enable row level security;
alter table public.circle3_room_members enable row level security;
alter table public.circle3_messages enable row level security;
alter table public.circle3_reports enable row level security;

revoke all on public.circle3_applications from anon, authenticated;
revoke all on public.circle3_rooms from anon, authenticated;
revoke all on public.circle3_room_members from anon, authenticated;
revoke all on public.circle3_messages from anon, authenticated;
revoke all on public.circle3_reports from anon, authenticated;

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists circle3_applications_updated_at on public.circle3_applications;
create trigger circle3_applications_updated_at before update on public.circle3_applications
for each row execute function public.set_updated_at();
