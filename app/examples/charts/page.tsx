"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", revenue: 4000, expenses: 2400 },
  { name: "Feb", revenue: 3000, expenses: 1398 },
  { name: "Mar", revenue: 2000, expenses: 9800 },
  { name: "Apr", revenue: 2780, expenses: 3908 },
  { name: "May", revenue: 1890, expenses: 4800 },
  { name: "Jun", revenue: 2390, expenses: 3800 },
]

export default function ChartsPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            UI Components MVP
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="container py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div>
            <h1 className="text-4xl font-bold">Charts</h1>
            <p className="text-muted-foreground mt-2">
              Beautiful charts built with Recharts.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Bar Chart</CardTitle>
                <CardDescription>
                  Monthly revenue vs expenses comparison.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="name" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="revenue" fill="hsl(var(--chart-1))" />
                    <Bar dataKey="expenses" fill="hsl(var(--chart-2))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Line Chart</CardTitle>
                <CardDescription>
                  Trend analysis over time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="name" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                    <Line type="monotone" dataKey="expenses" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
