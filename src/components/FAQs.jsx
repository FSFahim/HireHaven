import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import faqs from "../data/faqs.json";

const FAQs = () => {
  return (
    <Accordion type="single" collapsible>
      {faqs.map((faq, index) => {
        return (
          <AccordionItem
            className="bg-card"
            key={index}
            value={`item-${index + 1}`}
          >
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FAQs;
