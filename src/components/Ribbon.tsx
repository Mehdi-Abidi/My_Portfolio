import { stack } from "@/data/site";

// Continuously scrolling strip of the tech stack. The list is doubled so the
// loop is seamless when the animation wraps at 50 percent.
export function Ribbon() {
  const items = [...stack, ...stack];
  return (
    <div className="overflow-hidden border-y border-line py-5">
      <div className="ribbon flex w-max gap-14 whitespace-nowrap">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-14 font-mono text-xs uppercase tracking-[0.3em] text-mute">
            {s}
            <span className="h-1 w-1 rounded-full bg-ink/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
