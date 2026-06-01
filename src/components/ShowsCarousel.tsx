import * as React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type ShowItem = {
  number: string
  name: string
  imageSrc: string
  comments: string
}

export default function ShowsCarousel(
  props: { shows: ShowItem[] },
) {
  const { shows } = props
  const [active, setActive] = React.useState(0)

  const count = shows.length
  const canNavigate = count > 1

  const prev = () => {
    if (!canNavigate) return
    setActive((i) => (i - 1 + count) % count)
  }

  const next = () => {
    if (!canNavigate) return
    setActive((i) => (i + 1) % count)
  }

  return (
    <div
      className="relative w-full"
      tabIndex={0}
      onKeyDown={(e) => {
        if (!canNavigate) return
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          prev()
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault()
          next()
        }
      }}
    >
      <div
        className="overflow-hidden rounded-base border-border bg-secondary-background shadow-shadow border-2"
        role="region"
        aria-roledescription="carousel"
        aria-label="Comfort shows carousel"
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {shows.map((show) => (
            <div
              key={`${show.number}-${show.name}`}
              className="min-w-full px-4 py-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
                <div className="flex w-full flex-col lg:w-1/3">
                  <div className="font-heading text-4xl leading-none text-foreground">
                    {show.number}
                  </div>
                  <div className="mt-2 font-heading text-xl text-foreground">
                    {show.name}
                  </div>
                  <img
                    className="mt-3 h-80 w-full rounded-base border-2 border-border object-cover shadow-shadow lg:h-[28rem]"
                    src={show.imageSrc}
                    alt={show.name}
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 items-stretch">
                  <div className="w-full rounded-base border-border bg-main p-4 shadow-shadow">
                    <p className="text-main-foreground w-full">
                      {show.comments}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        disabled={!canNavigate}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-base border-2 border-border bg-secondary-background p-2 shadow-shadow disabled:opacity-50"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={next}
        disabled={!canNavigate}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-base border-2 border-border bg-secondary-background p-2 shadow-shadow disabled:opacity-50"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      {count > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {shows.map((show, i) => (
            <button
              key={show.number}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                'h-2 w-2 rounded-full border-2 border-border shadow-shadow',
                i === active ? 'bg-foreground' : 'bg-secondary-background',
              ].join(' ')}
            />
          ))}
        </div>
      )}
    </div>
  )
}

