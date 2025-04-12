import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
interface FAQItem {
  question: string;
  answer: string;
}
interface ProductFAQProps {
  items: FAQItem[];
}
const ProductFAQ = ({
  items
}: ProductFAQProps) => {
  return <div className="w-full flex flex-col gap-12 md:px-16 bg-[#F8F7FD] rounded-2xl px-0 py-[13px]">
      <div className="flex flex-col items-center w-full gap-3">
        <h2 className="text-3xl font-bold text-[#2E2A39] relative">
          FAQs
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
        </h2>
        <p className="text-center text-[#666] max-w-xl mt-4">Everything you need to know about our Remember Frame</p>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => <AccordionItem key={`faq-${index}`} value={`item-${index + 1}`} className={`${index === 0 ? 'border-t ' : ''}border-b border-[#EAEAEA] overflow-hidden`}>
              <AccordionTrigger className="flex justify-between items-center px-4 py-5 hover:bg-white/50 rounded-lg transition-all duration-200 text-[#2E2A39] font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[#666] leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>)}
        </Accordion>
      </div>
    </div>;
};
export default ProductFAQ;