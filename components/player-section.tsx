"use client";

import { PlayerCard } from "@/components/player-card";
import type { Player } from "@/components/player-card";


const players: Player[] = [
  {
    isInForm: true,
    name: "Jørgen",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Jakob",
    // isOutOfForm: true,
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Kasper",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Herman",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Kristoffer",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Marius",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Ludvig",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Espen",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Oscar",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Erik",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Hemmelig spiller",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Joakim",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Magnus",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
  {
    name: "Anders",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
  },
];

export function PlayerSection() {
  return (
    <section id="player-section" className="page-section ">
      <div className="py-8 mt-14 flex flex-col gap-4 justify-center">
        <div className="flex flex-col gap-2 items-center ">
          <h1 className="text-4xl font-bold text-center tracking-wider uppercase ">
            The Blue Crew
          </h1>
          <p className="text-center text-lg text-white/90 mb-6  max-w-[550px]">
            Årets spillere minner mer om tangerubakken enn mye annet. Fler har blitt sammenlignet med en død pose.
          </p>
        </div>

        {/* <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between" > */}
        {/*   <div className="flex flex-col gap-2 max-w-[550px]"> */}
        {/*     <h1 className="text-4xl text-white font-bold mb-6 animate-fade-in-down tracking-wider uppercase "> */}
        {/*       Inform :) */}
        {/*     </h1> */}
        {/*     <p className="text-lg text-white/90 mb-6"> */}
        {/*       Satans bra, men vi gidder ikke svare hele tiden så her er en graf som viser AKKURAT hvordan det kommer til å gjøres. Takk for støtten! Dette kommer til å gå heeelt fint... */}
        {/*     </p> */}
        {/*   </div> */}

        {/*   <div className="w-full "> */}
        {/*     <PlayerCard */} 
        {/*       className="max-w-96" */}
        {/*     {...players[0]} */} 
        {/*     /> */}
        {/*   </div> */}
        {/* </div> */}

        {/* <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between" > */}

        {/*   <div className="w-full "> */}
        {/*     <PlayerCard */} 
        {/*       className="max-w-96" */}
        {/*       {...players[1]} */} 
        {/*     /> */}
        {/*   </div> */}

        {/*   <div className="flex flex-col gap-2 max-w-[550px]"> */}
        {/*     <h1 className="text-4xl text-white font-bold mb-6 animate-fade-in-down tracking-wider uppercase "> */}
        {/*       OUT of form :/ */}
        {/*     </h1> */}
        {/*     <p className="text-lg text-white/90 mb-6"> */}
        {/*       Satans bra, men vi gidder ikke svare hele tiden så her er en graf som viser AKKURAT hvordan det kommer til å gjøres. Takk for støtten! Dette kommer til å gå heeelt fint... */}
        {/*     </p> */}
        {/*   </div> */}
        {/* </div> */}


        {/* <div className="flex flex-col items-center "> */}
        {/*   <h1 className="text-4xl font-bold text-center tracking-wider uppercase "> */}
        {/*     Alle deltakere */}
        {/*   </h1> */}
        {/* </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {players.map((player, index) => (
            <PlayerCard key={index} {...player} />
          ))}
        </div>
      </div>
    </section>
  );
}

