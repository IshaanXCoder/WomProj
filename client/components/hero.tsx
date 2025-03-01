"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function Hero() {
  const particlesInitialized = useRef(false)

  useEffect(() => {
    if (!particlesInitialized.current) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine)
      }).then(() => {
        particlesInitialized.current = true
      })
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {particlesInitialized.current && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: ["#ff49db", "#d6409f", "#9f1f9c", "#7928ca"],
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 -z-10"
        />
      )}

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-600/10 border border-pink-500/20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-sm font-medium">
              Empowering Women Worldwide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block">Discover Your</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Limitless Potential
            </span>
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-lg">
            Join our community of ambitious women who are redefining success on their own terms. Access exclusive
            resources, connect with like-minded individuals, and unlock your full potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 h-12 px-8 text-base">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-pink-500/50 text-white hover:bg-pink-500/10 h-12 px-8 text-base"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=40&width=40&text=${i}`}
                    alt="Member"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-white/70 text-sm">
              <span className="text-white font-medium">2,500+</span> women have joined our community
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
              <img src="/placeholder.svg?height=600&width=600" alt="Empowered Women" className="w-full h-auto" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold">95%</span>
                </div>
                <div>
                  <p className="text-white font-medium">Success Rate</p>
                  <p className="text-white/70 text-sm">Among our members</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold">24/7</span>
                </div>
                <div>
                  <p className="text-white font-medium">Support</p>
                  <p className="text-white/70 text-sm">Always available</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a0a1c] to-transparent"></div>
    </section>
  )
}

