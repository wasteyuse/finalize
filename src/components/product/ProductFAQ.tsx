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
  return <div className="w-full flex flex-col gap-12 md:px-16 rounded-2xl px-0 py-[13px] bg-slate-50">
      

      <div className="max-w-3xl mx-auto w-full">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => <AccordionItem key={`faq-${index}`} value={`item-${index + 1}`} className={`${index === 0 ? 'border-t ' : ''}border-b border-[#EAEAEA] overflow-hidden`}>
              <AccordionTrigger className="flex justify-between items-center rounded-lg transition-all duration-200 text-[#2E2A39] font-medium px-[21px] py-[11px] bg-slate-50">
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