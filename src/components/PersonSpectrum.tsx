import * as React from 'react'

export type PersonTraitAxis = {
  /** Short name for this axis, e.g. "Presence" */
  label: string
  leftLabel: string
  rightLabel: string
  /** 0 = far left, 100 = far right */
  value: number
  note?: string
}

export type PersonSpectrumProps = {
  /** Cast member name */
  name: string
  traits: PersonTraitAxis[]
}

export default function PersonSpectrum({ name, traits }: PersonSpectrumProps) {
  return (
    <section className="my-8 w-full">
      <h3 className="font-heading text-foreground mb-5 text-2xl">{name}</h3>

      <ul className="space-y-5">
        {traits.map((trait) => {
          const clamped = Math.min(100, Math.max(0, trait.value))

          return (
            <li
              key={trait.label}
              className="rounded-base border-border bg-secondary-background border-2 p-4 shadow-shadow"
            >
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-heading text-foreground text-base">
                  {trait.label}
                </span>
                {trait.note && (
                  <span className="text-foreground/70 text-sm">{trait.note}</span>
                )}
              </div>

              <div className="mb-2 flex items-center justify-between gap-2 text-xs font-medium sm:text-sm">
                <span className="text-foreground/80 max-w-[40%] text-left">
                  {trait.leftLabel}
                </span>
                <span className="text-foreground/80 max-w-[40%] text-right">
                  {trait.rightLabel}
                </span>
              </div>

              <div className="relative h-8">
                <div className="border-border bg-main/30 absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 rounded-full border-2" />
                <div
                  className="border-border bg-foreground absolute top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 shadow-shadow"
                  style={{ left: `${clamped}%` }}
                  aria-hidden
                />
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={clamped}
                  readOnly
                  tabIndex={-1}
                  aria-label={`${name} — ${trait.label}: ${trait.leftLabel} to ${trait.rightLabel}`}
                  className="spectrum-range pointer-events-none absolute inset-0 z-20 h-8 w-full appearance-none bg-transparent opacity-0"
                />
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
