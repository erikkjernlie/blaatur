"use client"

import { Progress } from "@/components/ui/progress";

function getProgressColor(value: number) {
  return "bg-blue"
  // if (value < 50) {
  //   return "bg-red-500"
  // } else if (value < 75) {
  //   return "bg-yellow-500"
  // } else {
  //   return "bg-green-500"
  // }
}

type PlayerProgressProps = {
  label: string;
  value: number;
}
export function PlayerProgress(props: PlayerProgressProps) {
  const {
    label,
    value,
  } = props

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center gap-2 w-full">
        <span className="text-muted-foreground uppercase">{label}:</span>
        <span className="text-muted-foreground">{value}</span>
      </div>
      <Progress value={value} classNameIndicator={getProgressColor(value)} />
    </div>
  )
}


