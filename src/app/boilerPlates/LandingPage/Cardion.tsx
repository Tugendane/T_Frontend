"use client";
import React from "react";
import {Accordion, AccordionItem, NextUIProvider } from "@nextui-org/react";
import { title } from "process";
import { Content } from "next/font/google";

function Cardion({ Title, Content }: { Title: String; Content: String }) {
  return (
    <NextUIProvider>
      <Accordion variant="splitted" className="w-[1000px]">
        <AccordionItem key="1" aria-label="Accordion 1" title={Title}>
          {Content}
        </AccordionItem>
      </Accordion>
    </NextUIProvider>
  );
}

export default Cardion;
