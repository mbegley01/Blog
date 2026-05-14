import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

/** Used from `best-restaurants2.mdx` as `<SouthBendRestaurantsAccordion client:load />`. */
export default function SouthBendRestaurantsAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="rounded-base border-border bg-secondary-background shadow-shadow w-full border-2 px-3"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Fiddler&apos;s Hearth</AccordionTrigger>
        <AccordionContent>
          Such a cozy traditional Irish pub! It has great food and a warm atmosphere.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Carmela&apos;s</AccordionTrigger>
        <AccordionContent>
          You will feel like you are in Italy!! It is decorated to look like an Italian village but inside the restaurant!!:0 The food is also really yummy and they have fun cocktails.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Lauber</AccordionTrigger>
        <AccordionContent>
          Ok so I kind of have a love hate relationship with this one. My freshman year my mom, sister, and I were obsessed with is and went constantly. But then one day we got extremely sick of it and didn&apos;t go for the next two years. However, I recently went again and found its spark once again. Their cauliflower crust pizza is top tier, and they also have good salads.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Social Cantina</AccordionTrigger>
        <AccordionContent>
          This is a Mexican restaurant in Mishawaka with fire tacos. It has a colorful, modern, industrial vibe. It gives millenial hipster in the best way.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Rohr&apos;s</AccordionTrigger>
        <AccordionContent>
          This one is at the Morris Inn on Notre Dame campus which makes it super convenient. It has great ambience and is usually very busy. I have been for brunch and dinner, and they are both great.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
