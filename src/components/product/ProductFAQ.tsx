
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductFAQProps {
  items: FAQItem[];
}

const ProductFAQ = ({ items }: ProductFAQProps) => {
  return (
    <div className="w-full flex flex-col gap-12 py-16 px-6 md:px-16">
      <div className="flex flex-col items-center w-full gap-3">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-center max-w-2xl">
          Find answers to common questions about our digital photo frame
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem 
              key={`faq-${index}`} 
              value={`item-${index + 1}`} 
              className={`${index === 0 ? 'border-t ' : ''}border-b border-[#EAEAEA]`}
            >
              <AccordionTrigger className="flex justify-between items-center px-0 py-[17px]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ProductFAQ;
