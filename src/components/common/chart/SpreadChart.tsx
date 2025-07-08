import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartTooltip,
  ChartContainer,
  // ChartLegend,
  ChartTooltipContent,
  // ChartLegendContent,
} from "@/components/ui/chart";
import * as React from "react";
import ChartHeader from "./ChartHeader";
import { filterChartData } from "@/utils/helper/dateFilter";
import { TimeRange } from "@/utils/interface/commonInterface";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

export const description = "An interactive area chart"

const chartData = [
  { date: "2025-04-01", desktop: 222, mobile: 150 },
  { date: "2025-04-02", desktop: 97, mobile: 180 },
  { date: "2025-04-03", desktop: 167, mobile: 120 },
  { date: "2025-04-04", desktop: 242, mobile: 260 },
  { date: "2025-04-05", desktop: 373, mobile: 290 },
  { date: "2025-04-06", desktop: 301, mobile: 340 },
  { date: "2025-04-07", desktop: 245, mobile: 180 },
  { date: "2025-04-08", desktop: 409, mobile: 320 },
  { date: "2025-04-09", desktop: 59, mobile: 110 },
  { date: "2025-04-10", desktop: 261, mobile: 190 },
  { date: "2025-04-11", desktop: 327, mobile: 350 },
  { date: "2025-04-12", desktop: 292, mobile: 210 },
  { date: "2025-04-13", desktop: 342, mobile: 380 },
  { date: "2025-04-14", desktop: 137, mobile: 220 },
  { date: "2025-04-15", desktop: 120, mobile: 170 },
  { date: "2025-04-16", desktop: 138, mobile: 190 },
  { date: "2025-04-17", desktop: 446, mobile: 360 },
  { date: "2025-04-18", desktop: 364, mobile: 410 },
  { date: "2025-04-19", desktop: 243, mobile: 180 },
  { date: "2025-04-20", desktop: 89, mobile: 150 },
  { date: "2025-04-21", desktop: 137, mobile: 200 },
  { date: "2025-04-22", desktop: 224, mobile: 170 },
  { date: "2025-04-23", desktop: 138, mobile: 230 },
  { date: "2025-04-24", desktop: 387, mobile: 290 },
  { date: "2025-04-25", desktop: 215, mobile: 250 },
  { date: "2025-04-26", desktop: 75, mobile: 130 },
  { date: "2025-04-27", desktop: 383, mobile: 420 },
  { date: "2025-04-28", desktop: 122, mobile: 180 },
  { date: "2025-04-29", desktop: 315, mobile: 240 },
  { date: "2025-04-30", desktop: 454, mobile: 380 },
  { date: "2025-05-01", desktop: 165, mobile: 220 },
  { date: "2025-05-02", desktop: 293, mobile: 310 },
  { date: "2025-05-03", desktop: 247, mobile: 190 },
  { date: "2025-05-04", desktop: 385, mobile: 420 },
  { date: "2025-05-05", desktop: 481, mobile: 390 },
  { date: "2025-05-06", desktop: 498, mobile: 520 },
  { date: "2025-05-07", desktop: 388, mobile: 300 },
  { date: "2025-05-08", desktop: 149, mobile: 210 },
  { date: "2025-05-09", desktop: 227, mobile: 180 },
  { date: "2025-05-10", desktop: 293, mobile: 330 },
  { date: "2025-05-11", desktop: 335, mobile: 270 },
  { date: "2025-05-12", desktop: 197, mobile: 240 },
  { date: "2025-05-13", desktop: 197, mobile: 160 },
  { date: "2025-05-14", desktop: 448, mobile: 490 },
  { date: "2025-05-15", desktop: 473, mobile: 380 },
  { date: "2025-05-16", desktop: 338, mobile: 400 },
  { date: "2025-05-17", desktop: 499, mobile: 420 },
  { date: "2025-05-18", desktop: 315, mobile: 350 },
  { date: "2025-05-19", desktop: 235, mobile: 180 },
  { date: "2025-05-20", desktop: 177, mobile: 230 },
  { date: "2025-05-21", desktop: 82, mobile: 140 },
  { date: "2025-05-22", desktop: 81, mobile: 120 },
  { date: "2025-05-23", desktop: 252, mobile: 290 },
  { date: "2025-05-24", desktop: 294, mobile: 220 },
  { date: "2025-05-25", desktop: 201, mobile: 250 },
  { date: "2025-05-26", desktop: 213, mobile: 170 },
  { date: "2025-05-27", desktop: 420, mobile: 460 },
  { date: "2025-05-28", desktop: 233, mobile: 190 },
  { date: "2025-05-29", desktop: 78, mobile: 130 },
  { date: "2025-05-30", desktop: 340, mobile: 280 },
  { date: "2025-05-31", desktop: 178, mobile: 230 },
  { date: "2025-06-01", desktop: 178, mobile: 200 },
  { date: "2025-06-02", desktop: 470, mobile: 410 },
  { date: "2025-06-03", desktop: 103, mobile: 160 },
  { date: "2025-06-04", desktop: 439, mobile: 380 },
  { date: "2025-06-05", desktop: 88, mobile: 140 },
  { date: "2025-06-06", desktop: 294, mobile: 250 },
  { date: "2025-06-07", desktop: 323, mobile: 370 },
  { date: "2025-06-08", desktop: 385, mobile: 320 },
  { date: "2025-06-09", desktop: 438, mobile: 480 },
  { date: "2025-06-10", desktop: 155, mobile: 200 },
  { date: "2025-06-11", desktop: 92, mobile: 150 },
  { date: "2025-06-12", desktop: 492, mobile: 420 },
  { date: "2025-06-13", desktop: 81, mobile: 130 },
  { date: "2025-06-14", desktop: 426, mobile: 380 },
  { date: "2025-06-15", desktop: 307, mobile: 350 },
  { date: "2025-06-16", desktop: 371, mobile: 310 },
  { date: "2025-06-17", desktop: 475, mobile: 520 },
  { date: "2025-06-18", desktop: 107, mobile: 170 },
  { date: "2025-06-19", desktop: 341, mobile: 290 },
  { date: "2025-06-20", desktop: 408, mobile: 450 },
  { date: "2025-06-21", desktop: 169, mobile: 210 },
  { date: "2025-06-22", desktop: 317, mobile: 270 },
  { date: "2025-06-23", desktop: 480, mobile: 530 },
  { date: "2025-06-24", desktop: 132, mobile: 180 },
  { date: "2025-06-25", desktop: 141, mobile: 190 },
  { date: "2025-06-26", desktop: 434, mobile: 380 },
  { date: "2025-06-27", desktop: 448, mobile: 490 },
  { date: "2025-06-28", desktop: 149, mobile: 200 },
  { date: "2025-06-29", desktop: 103, mobile: 160 },
  { date: "2025-06-30", desktop: 446, mobile: 400 },
  { date: "2025-07-01", desktop: 178, mobile: 200 },
  { date: "2025-07-02", desktop: 470, mobile: 410 },
  { date: "2025-07-03", desktop: 103, mobile: 160 },
  { date: "2025-07-04", desktop: 439, mobile: 380 },
  { date: "2025-07-05", desktop: 88, mobile: 140 },
  { date: "2025-07-06", desktop: 294, mobile: 250 },
  { date: "2025-07-07", desktop: 323, mobile: 370 },
  { date: "2025-07-08", desktop: 385, mobile: 320 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--mainColor)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--mainColorHover)",
  },
} satisfies ChartConfig

function SpreadChart() {

  const [timeRange, setTimeRange] = React.useState<TimeRange>("7d")
  const filteredData = filterChartData(chartData, timeRange)

  return (
    <Card className="pt-0 mt-4">
      <ChartHeader title="Revenue Data Graph" description="Revenue generated from bookings and subscriptions" onValueChange={setTimeRange} value={timeRange} />
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            {/* <ChartLegend content={<ChartLegendContent />} /> */}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default SpreadChart;