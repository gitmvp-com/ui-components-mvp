import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DocsPage() {
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
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h1 className="text-4xl font-bold">Documentation</h1>
            <p className="text-muted-foreground mt-2">
              Learn how to use the component library.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
              <CardDescription>
                Get started by installing the dependencies.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm mb-2">Install dependencies:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>npm install</code>
                </pre>
              </div>
              <div>
                <p className="text-sm mb-2">Start the development server:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>npm run dev</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>
                Import and use components in your application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm mb-2">Example Button usage:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                  <code>{`import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button>Click me</Button>
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Core UI Components</li>
                <li>✅ Dark Mode Support</li>
                <li>✅ Form Validation with Zod</li>
                <li>✅ Data Tables with TanStack Table</li>
                <li>✅ Charts with Recharts</li>
                <li>✅ Animations with Motion</li>
                <li>✅ TypeScript Support</li>
                <li>✅ Tailwind CSS Styling</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
