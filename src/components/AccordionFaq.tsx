import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

/** Use in MDX as `<AccordionFaq client:load />` so the whole tree hydrates together. */
export default function AccordionFaq() {
  return (
    <Accordion
      type="single"
      collapsible
      className="rounded-base border-border bg-secondary-background shadow-shadow w-full border-2 px-3"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It follows the WAI-ARIA accordion pattern via Radix UI.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I use more items?</AccordionTrigger>
        <AccordionContent>
          Add more <code>AccordionItem</code> blocks with unique <code>value</code>{' '}
          strings inside this component file (or copy the pattern into your own
          component).
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
