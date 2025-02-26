import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Cloud, Code, Database, GitBranch, LineChart, Lock, Network, Zap } from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>DigitalAnthropic - Empowering Developers, Accelerating Innovation</title>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/digitalanthropic.jpg-81ftGwlynziFYOvmANy2fVnxteeNsh.jpeg"
          type="image/jpeg"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/digitalanthropic.jpg-81ftGwlynziFYOvmANy2fVnxteeNsh.jpeg"
              alt="DigitalAnthropic Logo"
              width={32}
              height={32}
              className="mr-2 dark:invert"
            />
            <span className="font-bold">DigitalAnthropic</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
              Services
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Empowering Developers, Accelerating Innovation
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    DigitalAnthropic helps you spin up infrastructure quickly, enabling faster development cycles and
                    time to market.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button asChild>
                    <a href="mailto:dimitri.mititelu@gmail.com">Contact Us</a>
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </section>
          <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                Our Services
              </h2>
              <div className="grid gap-6 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Lock className="h-6 w-6 mb-2" />
                    <CardTitle>Access Control & Permissions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Implement role-based access control to ensure secure and efficient management of your
                    infrastructure.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <GitBranch className="h-6 w-6 mb-2" />
                    <CardTitle>Software Lifecycles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Streamline your development process with optimized software lifecycles and CI/CD pipelines.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Cloud className="h-6 w-6 mb-2" />
                    <CardTitle>Infrastructure Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Simplify your cloud infrastructure with our expert management and optimization services.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Code className="h-6 w-6 mb-2" />
                    <CardTitle>Developer Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Enhance developer productivity and satisfaction with tailored tools and workflows.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Network className="h-6 w-6 mb-2" />
                    <CardTitle>Networking Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Design and implement robust networking solutions, including VPNs and firewalls.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Database className="h-6 w-6 mb-2" />
                    <CardTitle>Compute & Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Optimize your compute and storage resources across multiple cloud providers.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose DigitalAnthropic?</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    We believe in empowering developers to create great products. Our approach focuses on:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Faster development cycles
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Quicker feedback loops
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Reduced time to market
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Increased developer ownership
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Our Approach</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We provide tools and systems that allow developers to manage their own services, deployments, and
                    infrastructure, while maintaining security and best practices.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Zap className="h-6 w-6" />
                    <span>Empower developers to be more successful</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <LineChart className="h-6 w-6" />
                    <span>Comprehensive logging and metrics for easy troubleshooting</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Contact us today to learn how DigitalAnthropic can help accelerate your development and
                    infrastructure management.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Button className="w-full" asChild>
                    <a href="mailto:dimitri.mititelu@gmail.com">Contact Us</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 DigitalAnthropic. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  )
}

