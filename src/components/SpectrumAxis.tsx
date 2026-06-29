import * as React from 'react'

export type SpectrumRow = {
  category: string
  left: string
  right: string
}

export type SpectrumAxisProps = {
  title: string
  leftLabel: string
  rightLabel: string
  rows: SpectrumRow[]
  /** 0 = far left, 100 = far right. Default 50 (center). */
  initialValue?: number
}

function emphasis(value: number): 'left' | 'right' | 'neutral' {
  if (value < 42) return 'left'
  if (value > 58) return 'right'
  return 'neutral'
}

export default function SpectrumAxis({
  title,
  leftLabel,
  rightLabel,
  rows,
  initialValue = 50,
}: SpectrumAxisProps) {
  const [value, setValue] = React.useState(initialValue)
  const side = emphasis(value)

  const leftActive = side === 'left'
  const rightActive = side === 'right'

  return (
    <section className="my-8 w-full">
      <h3 className="font-heading text-foreground mb-4 text-xl">{title}</h3>

      <div className="mb-3 flex items-center justify-between gap-3 text-sm font-medium">
        <span
          className={
            leftActive
              ? 'text-foreground rounded-base border-2 border-border bg-main px-2 py-1 shadow-shadow'
              : 'text-foreground/60'
          }
        >
          {leftLabel}
        </span>
        <span className="text-foreground/40 hidden sm:inline">← drag →</span>
        <span
          className={
            rightActive
              ? 'text-foreground rounded-base border-2 border-border bg-main px-2 py-1 shadow-shadow'
              : 'text-foreground/60'
          }
        >
          {rightLabel}
        </span>
      </div>

      <div className="relative mb-5">
        <div
          className="rounded-base border-border pointer-events-none absolute inset-y-0 left-0 border-2 bg-main/40 transition-all duration-200"
          style={{ width: `${value}%` }}
          aria-hidden
        />
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label={`${leftLabel} to ${rightLabel} spectrum`}
          className="spectrum-range border-border bg-secondary-background relative z-10 h-10 w-full cursor-pointer appearance-none rounded-base border-2 shadow-shadow"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <thead>
            <tr>
              <th className="border-border text-foreground w-28 border-2 bg-secondary-background p-3 font-heading" />
              <th
                className={[
                  'border-border border-2 p-3 font-heading transition-colors duration-200',
                  leftActive
                    ? 'bg-main text-main-foreground shadow-shadow'
                    : 'bg-secondary-background text-foreground/70',
                ].join(' ')}
              >
                {leftLabel}
              </th>
              <th
                className={[
                  'border-border border-2 p-3 font-heading transition-colors duration-200',
                  rightActive
                    ? 'bg-main text-main-foreground shadow-shadow'
                    : 'bg-secondary-background text-foreground/70',
                ].join(' ')}
              >
                {rightLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.category}>
                <th className="border-border text-foreground border-2 bg-secondary-background p-3 align-top font-heading">
                  {row.category}
                </th>
                <td
                  className={[
                    'border-border border-2 p-3 align-top transition-colors duration-200',
                    leftActive
                      ? 'bg-main/80 text-main-foreground font-medium'
                      : 'text-foreground/80',
                  ].join(' ')}
                >
                  {row.left}
                </td>
                <td
                  className={[
                    'border-border border-2 p-3 align-top transition-colors duration-200',
                    rightActive
                      ? 'bg-main/80 text-main-foreground font-medium'
                      : 'text-foreground/80',
                  ].join(' ')}
                >
                  {row.right}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
