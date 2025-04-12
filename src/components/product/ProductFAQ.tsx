import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductFAQProps {
  items: FAQItem[];
}

export const ProductFAQ: React.FC<ProductFAQProps> = ({ items }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="border-t-[rgba(26,26,26,0.12)] border-t border-solid"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-b-[rgba(26,26,26,0.12)] border-b border-solid"
        >
          <AccordionTrigger className="flex justify-between items-center px-0 py-[17px]">
            <span className="text-[15px] font-semibold text-black">
              {item.question}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-sm text-[#4D4D4D] px-0 py-2">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
