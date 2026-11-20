create table if not exists public.portfolio_visit_counts (
  counter_name text primary key,
  total bigint not null default 0 check (total >= 0)
);

alter table public.portfolio_visit_counts enable row level security;
revoke all on table public.portfolio_visit_counts from anon, authenticated;

create or replace function public.increment_portfolio_visits()
returns bigint
language sql
security definer
set search_path = ''
as $function$
  insert into public.portfolio_visit_counts as counters (counter_name, total)
  values ('portfolio', 1)
  on conflict (counter_name) do update
  set total = counters.total + 1
  returning total;
$function$;

revoke all on function public.increment_portfolio_visits() from public;
grant execute on function public.increment_portfolio_visits() to anon, authenticated;
