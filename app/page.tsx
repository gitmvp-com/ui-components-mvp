import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">UI Components MVP</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container py-12">
        <div className="mx-auto max-w-4xl space-y-12">
          <section className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Beautiful Components
            </h2>
            <p className="text-muted-foreground text-lg">
              A collection of beautifully designed components built with Radix UI and Tailwind CSS.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button asChild>
                <Link href="/docs">Get Started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/components">Components</Link>
              </Button>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Core Components</CardTitle>
                <CardDescription>
                  Essential UI components like buttons, cards, inputs, and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/components">View Components</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Forms & Validation</CardTitle>
                <CardDescription>
                  Built with React Hook Form and Zod for type-safe forms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/examples/forms">View Forms</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Tables</CardTitle>
                <CardDescription>
                  Powerful tables with sorting, filtering, and pagination.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/examples/tables">View Tables</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Charts</CardTitle>
                <CardDescription>
                  Responsive charts built with Recharts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/examples/charts">View Charts</Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-bold">Features</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="font-semibold">🎨 Theming</h4>
                <p className="text-muted-foreground text-sm">
                  Light and dark mode with easy customization.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">♿ Accessible</h4>
                <p className="text-muted-foreground text-sm">
                  Built with Radix UI for excellent accessibility.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">🚀 Modern</h4>
                <p className="text-muted-foreground text-sm">
                  Next.js 16, React 19, and Tailwind CSS 4.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
