"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "November", money: 6000 },
  { month: "descember", money: 6000 },
  { month: "January", money: 6000, money2: 6000 },
  { month: "February", money2: 305 },
  { month: "March", money2: 2000 },
  { month: "April", money2: -1000, },
  { month: "May", money2: 90000, },
]

const chartConfig = {
  money: {
    label: "Money",
    color: "hsl(var(--chart-2))",
  },
  money2: {
    label: "Money2",
    color: "grey",
  },
} satisfies ChartConfig

export function BluebetChart() {
  return (
    <Card className="p-0 w-full">
      <CardHeader className="space-y-0 border-b border-border">
        {/* <CardTitle>Blåbett REALTIME</CardTitle> */}
        <CardDescription>Tentativ plan for årets blåbet:</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="fill-foreground"
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="money"
                  hideLabel
                />
              }
            />
            <Line
              dataKey="money"
              type="natural"
              stroke="var(--color-money)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-money)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                dataKey="money"
                formatter={(value: number) =>
                  `${(value / 1000).toFixed(1)}K`
                }
              />
            </Line>

            <Line
              dataKey="money2"
              type="natural"
              strokeDasharray={"3 3"}
              stroke="grey"
              strokeWidth={1}
              dot={{
                fill: "grey",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                dataKey="money2"
                formatter={(value: number) =>
                  `${(value / 1000).toFixed(1)}K`
                }
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="pl-1 h-4 w-4 text-green-800" />
        </div>
      </CardFooter>
    </Card>
  )
}
