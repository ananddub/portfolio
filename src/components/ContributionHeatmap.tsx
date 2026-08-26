"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface Day {
   date: string;
   count: number;
   level: number;
}

const MONTHS = [
   "Jan",
   "Feb",
   "Mar",
   "Apr",
   "May",
   "Jun",
   "Jul",
   "Aug",
   "Sep",
   "Oct",
   "Nov",
   "Dec",
];

// Authentic GitHub Contribution Colors
const GITHUB_COLORS_DARK = [
   "rgba(255, 255, 255, 0.05)", // level 0
   "#0e4429",                    // level 1
   "#006d32",                    // level 2
   "#26a641",                    // level 3
   "#39d353",                    // level 4
];

const GITHUB_COLORS_LIGHT = [
   "#ebedf0",                    // level 0
   "#9be9a8",                    // level 1
   "#40c463",                    // level 2
   "#30a14e",                    // level 3
   "#216e39",                    // level 4
];

function weekdayOf(date: string) {
   return new Date(`${date}T00:00:00Z`).getUTCDay();
}

function monthOf(date: string) {
   return new Date(`${date}T00:00:00Z`).getUTCMonth();
}

interface Week {
   id: string;
   days: (Day | null)[];
}

const WEEKDAY_LABELS = [
   { id: "sun", label: "" },
   { id: "mon", label: "Mon" },
   { id: "tue", label: "" },
   { id: "wed", label: "Wed" },
   { id: "thu", label: "" },
   { id: "fri", label: "Fri" },
   { id: "sat", label: "" },
];

const SKELETON_WEEKS: Week[] = Array.from({ length: 53 }, (_, w) => ({
   id: `skeleton-${w}`,
   days: Array(7).fill(null),
}));

function toWeeks(days: Day[]): Week[] {
   if (days.length === 0) return [];
   const weeks: Week[] = [];
   let current: (Day | null)[] = Array(7).fill(null);

   let cursor = weekdayOf(days[0].date);

   const push = (columnDays: (Day | null)[]) => {
      const first = columnDays.find(Boolean);
      if (first) weeks.push({ id: first.date, days: columnDays });
   };

   for (const day of days) {
      const weekday = weekdayOf(day.date);
      if (weekday < cursor) {
         push(current);
         current = Array(7).fill(null);
      }
      current[weekday] = day;
      cursor = weekday;
   }
   push(current);
   return weeks;
}

interface ContributionHeatmapProps {
   username: string;
}

export function ContributionHeatmap({ username }: ContributionHeatmapProps) {
   const [days, setDays] = useState<Day[]>([]);
   const [total, setTotal] = useState(0);
   const [state, setState] = useState<"loading" | "ready" | "error">("loading");

   const scrollRef = useRef<HTMLElement>(null);
   const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
   const [isDragging, setIsDragging] = useState(false);

   useEffect(() => {
      let cancelled = false;

      (async () => {
         try {
            // First try internal Next.js API route
            let res = await fetch(`/api/github/contributions?username=${username}`);
            if (!res.ok) {
               // Fallback to direct public endpoint
               res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
            }
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            if (cancelled) return;

            const contributions: Day[] = data.contributions ?? [];
            setDays(contributions);
            setTotal(
               data.total?.lastYear ??
                  contributions.reduce((sum, d) => sum + (d.count || 0), 0),
            );
            setState("ready");
         } catch {
            if (!cancelled) setState("error");
         }
      })();

      return () => {
         cancelled = true;
      };
   }, [username]);

   const weeks = useMemo(() => toWeeks(days), [days]);

   const monthLabels = useMemo(() => {
      let previous = -1;
      return weeks.map((week) => {
         const first = week.days.find(Boolean);
         if (!first) return { id: week.id, label: null };
         const month = monthOf(first.date);
         if (month === previous) return { id: week.id, label: null };
         previous = month;
         return { id: week.id, label: MONTHS[month] };
      });
   }, [weeks]);

   useEffect(() => {
      const container = scrollRef.current;
      if (!container || state !== "ready") return;

      let timer: ReturnType<typeof setTimeout> | null = null;
      const observer = new IntersectionObserver(
         (entries) => {
            for (const entry of entries) {
               if (!entry.isIntersecting) continue;
               timer = setTimeout(() => {
                  container.scrollTo({
                     left: container.scrollWidth,
                     behavior: "smooth",
                  });
               }, 600);
               observer.disconnect();
            }
         },
         { threshold: 0.1 },
      );

      observer.observe(container);
      return () => {
         observer.disconnect();
         if (timer) clearTimeout(timer);
      };
   }, [state]);

   const startDrag = (e: React.MouseEvent) => {
      const container = scrollRef.current;
      if (!container) return;
      dragRef.current = {
         active: true,
         startX: e.pageX,
         scrollLeft: container.scrollLeft,
      };
      setIsDragging(true);
   };

   const onDrag = (e: React.MouseEvent) => {
      const container = scrollRef.current;
      if (!dragRef.current.active || !container) return;
      e.preventDefault();
      container.scrollLeft =
         dragRef.current.scrollLeft - (e.pageX - dragRef.current.startX);
   };

   const endDrag = () => {
      dragRef.current.active = false;
      setIsDragging(false);
   };

   return (
      <div className="rounded-2xl border border-border-primary bg-bg-secondary/60 backdrop-blur-md p-[4vw] md:p-6">
         {/* Top Header */}
         <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
               <span className="h-2.5 w-2.5 rounded-full bg-[#39d353] animate-pulse" />
               <span className="font-mono text-xs uppercase tracking-widest text-fg-primary">
                  GitHub Contribution Activity
               </span>
            </div>
            <a
               href={`https://github.com/${username}`}
               target="_blank"
               rel="noopener noreferrer"
               className="font-mono text-xs text-accent hover:underline"
            >
               @{username} ↗
            </a>
         </div>

         {state === "error" ? (
            <p className="py-[6vw] md:py-8 text-center font-mono text-[2.5vw] md:text-sm text-fg-muted">
               Contribution graph unavailable right now.
            </p>
         ) : (
            <>
               <section
                  ref={scrollRef}
                  aria-label={`${username} GitHub contribution graph`}
                  onMouseDown={startDrag}
                  onMouseMove={onDrag}
                  onMouseUp={endDrag}
                  onMouseLeave={endDrag}
                  className={`scrollbar-none select-none overflow-x-auto ${
                     isDragging ? "cursor-grabbing" : "cursor-grab"
                  }`}
               >
                  <div className="w-fit">
                     <div className="mb-1.5 flex gap-1 md:gap-1.5 pl-6.5 md:pl-8">
                        {monthLabels.map(({ id, label }) => (
                           <span
                              key={id}
                              className="w-3 md:w-3.5 shrink-0 font-mono text-[8px] md:text-[10px] text-fg-muted"
                           >
                              {label}
                           </span>
                        ))}
                     </div>

                     <div className="flex gap-1 md:gap-1.5">
                        <div className="mr-1 flex w-7 shrink-0 flex-col gap-1 md:gap-1.5">
                           {WEEKDAY_LABELS.map(({ id, label }) => (
                              <span
                                 key={id}
                                 className="flex h-3 md:h-3.5 items-center font-mono text-[8px] md:text-[10px] leading-none text-fg-muted"
                              >
                                 {label}
                              </span>
                           ))}
                        </div>

                        {(state === "loading" ? SKELETON_WEEKS : weeks).map(
                           (week, w) => (
                              <div
                                 key={week.id}
                                 className="flex flex-col gap-1 md:gap-1.5"
                              >
                                 {week.days.map((day, d) => {
                                    if (!day) {
                                       return (
                                          <div
                                             key={`${week.id}-${WEEKDAY_LABELS[d].id}`}
                                             className={`h-3 w-3 md:h-3.5 md:w-3.5 shrink-0 rounded-[3px] ${
                                                state === "loading"
                                                   ? "animate-pulse bg-fg-primary/6"
                                                   : "bg-transparent"
                                             }`}
                                          />
                                       );
                                    }
                                    const darkBg = GITHUB_COLORS_DARK[day.level] || GITHUB_COLORS_DARK[0];
                                    return (
                                       <div
                                          key={day.date}
                                          title={`${day.count} contribution${
                                             day.count === 1 ? "" : "s"
                                          } on ${day.date}`}
                                          className="h-3 w-3 md:h-3.5 md:w-3.5 shrink-0 rounded-[3px] transition-transform duration-200 hover:scale-125 cursor-pointer"
                                          style={{
                                             backgroundColor: darkBg,
                                             boxShadow:
                                                day.level >= 3
                                                   ? "0 0 8px rgba(57, 211, 83, 0.4)"
                                                   : undefined,
                                          }}
                                       />
                                    );
                                 })}
                              </div>
                           ),
                        )}
                     </div>
                  </div>
               </section>

               {/* Total + intensity legend */}
               <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border-primary/30 pt-3">
                  <span className="font-mono text-[2.5vw] md:text-sm text-fg-secondary">
                     {state === "loading"
                        ? "Loading live contributions…"
                        : `${total.toLocaleString()} contributions in the last year`}
                  </span>
                  <div className="flex items-center gap-2">
                     <span className="font-mono text-[2.5vw] md:text-xs text-fg-muted">
                        Less
                     </span>
                     <div className="flex gap-1">
                        {GITHUB_COLORS_DARK.map((color, idx) => (
                           <div
                              key={`level-${idx}`}
                              className="h-3 w-3 md:h-3.5 md:w-3.5 rounded-[3px]"
                              style={{ backgroundColor: color }}
                           />
                        ))}
                     </div>
                     <span className="font-mono text-[2.5vw] md:text-xs text-fg-muted">
                        More
                     </span>
                  </div>
               </div>
            </>
         )}
      </div>
   );
}
