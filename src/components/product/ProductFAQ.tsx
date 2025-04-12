
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProductFAQ = () => {
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
          <AccordionItem value="item-1" className="border-t border-b border-[#EAEAEA]">
            <AccordionTrigger className="flex justify-between items-center px-0 py-[17px]">
              How long does the battery last?
            </AccordionTrigger>
            <AccordionContent>
              The battery lasts up to 5 hours, so you can enjoy your memories uninterrupted throughout the day, making it perfect for events or as a daily decor piece.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-[#EAEAEA]">
            <AccordionTrigger className="flex justify-between items-center px-0 py-[17px]">
              Can I easily upload new photos?
            </AccordionTrigger>
            <AccordionContent>
              Yes, simply connect the frame to your computer with the USB cable and upload up to 16GB of photos and videos for seamless enjoyment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b border-[#EAEAEA]">
            <AccordionTrigger className="flex justify-between items-center px-0 py-[17px]">
              Does the frame support sound?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely, it features an internal speaker that plays audio with your videos, enhancing the overall experience and making your memories more vivid.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b border-[#EAEAEA]">
            <AccordionTrigger className="flex justify-between items-center px-0 py-[17px]">
              Is it easy to set up?
            </AccordionTrigger>
            <AccordionContent>
              Yes, the frame comes with straightforward instructions, allowing you to display your cherished memories in minutes without any hassle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-b border-[#EAEAEA]">
            <AccordionTrigger className="flex justify-between items-center px-0 py-[17px]">
              What if I'm not satisfied?
            </AccordionTrigger>
            <AccordionContent>
              We offer a 30-day money-back guarantee, ensuring you're completely satisfied with your purchase or your money back.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductFAQ;
