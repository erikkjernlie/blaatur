"use client";

interface Player {
  name: string;
  age: number;
  salary: string;
  strengths: string[];
  weaknesses: string[];
}

const players: Player[] = [
  {
    name: "Erik Andersson",
    age: 28,
    salary: "$85,000",
    strengths: ["Leadership", "Strategic thinking", "Team player"],
    weaknesses: ["Impatient", "Workaholic"],
  },
  {
    name: "Sofia Berg",
    age: 31,
    salary: "$92,000",
    strengths: ["Creative", "Problem solver", "Detail-oriented"],
    weaknesses: ["Perfectionist", "Takes on too much"],
  },
  // Add 12 more players with similar structure
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
            <p className="text-lg mb-1">Age: {player.age}</p>
            <p className="text-lg mb-4">Salary: {player.salary}</p>

            <div className="mb-3">
              <h3 className="text-lg font-semibold mb-2">Strengths:</h3>
              <ul className="list-disc list-inside">
                {player.strengths.map((strength, idx) => (
                  <li key={idx}>{strength}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Weaknesses:</h3>
              <ul className="list-disc list-inside">
                {player.weaknesses.map((weakness, idx) => (
                  <li key={idx}>{weakness}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
