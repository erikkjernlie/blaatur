"use client";

import { Counter } from "@/components/counter";
import { BluebetChart } from "./bluebet-chart";

export function CountDown() {
  return (
    <section className="px-4 md:px-10 mx-auto max-w-7xl ">

      <div className="absolute bottom-24 md:bottom-40 left-0 right-0 pointer-events-none">
        <div className="flex flex-col h-full justify-center items-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 animate-fade-in-down tracking-wider	uppercase">
            Blåkuk is coming...
          </h1>

          <Counter />
        </div>
      </div>
    </section>
  );
}
