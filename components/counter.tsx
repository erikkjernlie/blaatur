"use client"

import { useEffect, useState } from "react"

type TimeComponentProps = {
  value?: number
  unit: string
}
function TimeComponent(props: TimeComponentProps) {
  const { value, unit } = props
  return (
    <div
      key={unit}
      className="flex flex-col md:flex-row gap-1 items-start md:items-end bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-md border border-border tracking-wider"
    >
      <span className="text-xl md:text-2xl font-bold">{value || "-"}</span>
      <span className="text-sm md:text-base uppercase text-white/50">{unit}</span>
    </div>
  )
}

export function Counter() {
  const [timeLeft, setTimeLeft] = useState<Record<string, number> | null>(null)

  useEffect(() => {
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function calculateTimeLeft() {
    const difference = +new Date("2025-05-08") - +new Date()
    if (difference > 0) {
      return {
        dager: Math.floor(difference / (1000 * 60 * 60 * 24)),
        timer: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutter: Math.floor((difference / 1000 / 60) % 60),
        // sekunder: Math.floor((difference / 1000) % 60),
      }
    }
    return null
  }

  // if (!timeLeft) {
  //   return null // Prevent initial mismatch by not rendering dynamic content
  // }

  return (
    <div className="flex justify-center items-center space-x-2">
      <TimeComponent  value={timeLeft?.dager} unit={"dager"} />
      <span>:</span>
      <TimeComponent  value={timeLeft?.timer} unit={"timer"} />
      <span>:</span>
      <TimeComponent  value={timeLeft?.minutter} unit={"minutter"} />
    </div>
  )
}
