"use client";

interface Player {
  name: string;
}

const players: Player[] = [
  {
    name: "Jørgen",
  },
  {
    name: "Jakob",
  },
  {
    name: "Kasper",
  },
  {
    name: "Herman",
  },
  {
    name: "Kristoffer",
  },
  {
    name: "Marius",
  },
  {
    name: "Ludvig",
  },
  {
    name: "Espen",
  },
  {
    name: "Oscar",
  },
  {
    name: "Erik",
  },
  {
    name: "Hemmelig spiller",
  },
  {
    name: "Joakim",
  },
  {
    name: "Magnus",
  },
  {
    name: "Anders",
  },
];

export default function PlayersPage() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center mb-12">The Blue Crew</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all"
          >
            <h2 className="text-2xl font-bold mb-2">{player.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
