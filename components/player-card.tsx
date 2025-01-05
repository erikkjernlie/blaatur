"use client"

import { ComponentProps } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PlayerProgress } from "@/components/player-progress";

export type Player = {
  isInForm?: boolean;
  isOutOfForm?: boolean;
  name: string;
  imgSrc: string;
  birthdate?: string;
}

type PlayerCardProps = ComponentProps<"div"> & Player
export function PlayerCard(props: PlayerCardProps) {
  const {
    className,
    name,
    imgSrc,
    isInForm,
    isOutOfForm,
    birthdate,
    ...divProps
  } = props

  return (
    <Card className={cn(className, "group",
      {
        "inform-player-card-glow border-[#2dffc4] bg-[#2dffc4]": isInForm,
        "out-of-form-player-card-glow border-[#F1A8D0] bg-[#F1A8D0]": isOutOfForm,
      })}
      {...divProps}
    >

      <CardHeader>
        <CardTitle className="flex justify-between items-center gap-4 tracking-wider uppercase" >
          {name}
          <Badge
            variant="outline"
            className={cn("my-2 text-white uppercase",
              {
                "inform-player-card-glow  bg-[#2dffc4]": isInForm,
                "out-of-form-player-card-glow bg-[#F1A8D0]": isOutOfForm,
                "invisible": !isOutOfForm && !isInForm,
              }
            )}>
            {isInForm ? "in-form" : "out-of-form"}
          </Badge>
        </CardTitle>
        <CardDescription>{birthdate || "-"}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="relative w-full h-60 mx-auto">
          <Image
            src={imgSrc}
            alt="Picture of Jørgen"
            fill
            className="rounded-lg object-cover transition-all group-hover:scale-105 "
            priority
          />
        </div>

      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <PlayerProgress value={20} label={"biip"} />
        <PlayerProgress value={40} label={"bleh"} />
        <PlayerProgress value={30} label={"bloooh"} />
      </CardFooter>
    </Card >
  )
}

