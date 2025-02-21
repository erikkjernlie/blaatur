"use client";

import { Counter } from "@/components/counter";
import { BluebetChart } from "./bluebet-chart";
import Link from "next/link";

export function CountDown() {
  return (
    <section className="px-4 md:px-10 mx-auto max-w-7xl ">

      <div className="absolute bottom-16 md:bottom-16 left-0 right-0">
        <div className="flex flex-col gap-2 h-full justify-center items-center">
          {/* <h1 className="text-2xl md:text-4xl font-bold mb-4 animate-fade-in-down tracking-wider	uppercase"> */}
          {/*   Blåkuk is coming... */}
          {/* </h1> */}

          <Counter />
          <div className="flex gap-1 text-center">
            Hvordan går blåbetten? Les mer
            <Link 
              href="https://coinmarketcap.com/currencies/hawktuuuah/?fbclid=IwZXh0bgNhZW0CMTEAAR3enHBfkM7wyvpJxWZUgasLylXYboTFBIbQ7T3P-HbrLwnwAv8poHFpK6M_aem_BKmhP95hxwwYEVXBI-h60A" 
              className="hover:text-blue underline pointer"
            >
              her
            </Link>.

          </div>
        </div>
      </div>
    </section>
  );
}
