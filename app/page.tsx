import { CountDown } from "@/components/count-down"
import { SplineBackground } from "@/components/spline-background"
import { BluebetSection } from "@/components/bluebet-section"
import { PlayerSection } from "@/components/player-section"
import LGBTQSection from "@/components/lgbtq-section"

export default function Page() {
  return (
  <main id="home">
    <SplineBackground />
    <CountDown />
    <BluebetSection />
    <PlayerSection />
    <LGBTQSection />
  </main>
  )
}
