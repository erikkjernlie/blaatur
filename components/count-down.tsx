"use client";

import { Counter } from "@/components/counter";
// import { BluebetChart } from "./bluebet-chart";
import Link from "next/link";

export function CountDown() {
  return (
    <section className="px-4 md:px-10 mx-auto max-w-7xl ">

      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col gap-3 h-full justify-center items-center">
          {/* <h1 className="text-2xl md:text-4xl font-bold mb-4 animate-fade-in-down tracking-wider	uppercase"> */}
          {/*   Blåkuk is coming... */}
          {/* </h1> */}

          <Counter />

          <div className="w-full">
            <div
              className="flex flex-col gap-1 items-center bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-md border border-border tracking-wider text-white/80"
            >
              <div className="flex gap-1 text-center">
                  Les mer om blåbetten
                <Link
                  href="https://www.youtube.com/watch?v=K48AasRJpag"
                  className="hover:text-black underline pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  her
                </Link>.
              </div>
              <div className="flex gap-1 text-center">
                  Les mer om LGBTQ+
                <Link
                  href="https://jorgenlegenden.my.canva.site/dagfxhgjyqg"
                  className="hover:text-black underline pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  her
                </Link>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
