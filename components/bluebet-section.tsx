import { BluebetChart } from "@/components/bluebet-chart"

export function BluebetSection() {

  return (
    <main className="bg-white">
      <section id="bluebet-section" className="page-section py-24 ">
        <div className="flex flex-col items-center gap-2 py-8 ">
          <h1 className="text-4xl font-bold text-foreground text-center tracking-wider uppercase">
            Blåbet
          </h1>
          <p className="text-center text-lg text-muted-foreground mb-6 max-w-[550px]">
            Vi har pengene deres, og vil lage masses mer penger av de. Takk for støtten! Dette kommer til å gå heeelt fint...
          </p>
        </div>

        <BluebetChart />

        {/* <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between" > */}
        {/*   <div className="flex flex-col gap-2 max-w-[550px]"> */}
        {/*     <h1 className="text-4xl text-foreground font-bold mb-6 animate-fade-in-down tracking-wider uppercase "> */}
        {/*       Hvordan går det med Blåbet akkurat nå? */}
        {/*     </h1> */}
        {/*     <p className="text-lg text-muted-foreground mb-6"> */}
        {/*       Satans bra, men vi gidder ikke svare hele tiden så her er en graf som viser AKKURAT hvordan det kommer til å gjøres. Takk for støtten! Dette kommer til å gå heeelt fint... */}
        {/*     </p> */}
        {/*   </div> */}

        {/*   <div className="w-full "> */}
        {/*     {/1* <div className="absolute rounded-lg top-0 right-0 bottom-4 left-4 p-4 bg-blue" /> *1/} */}
        {/*     <BluebetChart /> */}
        {/*   </div> */}
        {/* </div> */}
      </section>
    </main>
  );
}

