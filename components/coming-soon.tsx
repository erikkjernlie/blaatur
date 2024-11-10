"use client";

import { useEffect, useState } from "react";

export function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date("2025-05-08") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">
            Blåkuk 2025
          </h1>

          <div className="flex justify-center space-x-4 mb-12">
            {Object.keys(timeLeft).length ? (
              Object.entries(timeLeft).map(([unit, value]: any) => (
                <div
                  key={unit}
                  className="flex flex-col items-center bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm"
                >
                  <span className="text-3xl md:text-5xl font-bold">
                    {value}
                  </span>
                  <span className="text-sm md:text-base capitalize">
                    {unit}
                  </span>
                </div>
              ))
            ) : (
              <span className="text-2xl md:text-4xl">Time's up!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
