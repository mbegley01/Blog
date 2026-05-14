import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

/** Import in MDX: `import MercaditoAccordion from '...'` then `<MercaditoAccordion client:load />` */
export default function MercaditoAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="rounded-base border-border bg-secondary-background shadow-shadow w-full border-2 px-3"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Mercadito</AccordionTrigger>
        <AccordionContent>
          I don't think there are many problems that tacos and guacamole can't solve. The mango guac is INSANE, but the regular is also really good. The atmosphere is also really nice, and it is located in River North.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Pizzeria Portofino</AccordionTrigger>
        <AccordionContent>
          Pizzeria Portofino is located on the river, and the vibes are sophisticated casual. It has a summery aesthetic, and you can sit inside or outside. If you are feeling spicy I would try the hot honey pepperoni pizza, but the vodka pastsa is delish also.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Beatrix</AccordionTrigger>
        <AccordionContent>
          If you are looking for a brunch spot for you and your girlies, look no further. It has a trendy, cozy, and modern aesthetic. They have a huge coffee menu with fun flavors like cinnamon roll latte, mexican cold brew, and hazelnut oat mocha.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
