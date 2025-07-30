"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

export default function ForexTraderSite() {
  const [showVideo, setShowVideo] = useState(true)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", { name, email })
    setEmail("")
    setName("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20"></div>
      <div className="fixed inset-0 bg-dots-pattern opacity-10"></div>
      <ParticleBackground />

      {/* Video Overlay */}
      {showVideo && <VideoOverlay onClose={() => setShowVideo(false)} />}

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Telegram CTA */}
      <TelegramCTA />

      {/* Affiliate Broker */}
      <AffiliateBroker />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Email Capture */}
      <EmailCapture email={email} setEmail={setEmail} name={name} setName={setName} onSubmit={handleEmailSubmit} />

      {/* Footer */}
      <Footer />
    </div>
  )
}

function VideoOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          ×
        </button>
        <div className="w-[500px] h-[350px] md:w-[700px] md:h-[450px] bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          Trading Success Video
        </div>
      </div>
    </motion.div>
  )
}

function ParticleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Profit Smarter.
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Trade With Me.
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join my 10,000+ Telegram community getting daily Forex signals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
            <GlowButton href="#telegram" primary>
              Join Telegram
            </GlowButton>
            <GlowButton href="#broker">View My Broker</GlowButton>
            <GlowButton href="#premium" premium>
              Join Premium
            </GlowButton>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
            <SocialIcon icon="📘" label="Facebook" platform="facebook" />
            <SocialIcon icon="🐦" label="Twitter" platform="twitter" />
            <SocialIcon icon="📷" label="Instagram" platform="instagram" />
            <SocialIcon icon="📱" label="Telegram" platform="telegram" />
            <SocialIcon icon="💬" label="WhatsApp" platform="whatsapp" />
            <SocialIcon icon="🎮" label="Discord" platform="discord" />
            <SocialIcon icon="🎵" label="TikTok" platform="tiktok" />
            <SocialIcon icon="📊" label="ExpertOption" platform="expertoption" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card p-8">
            <img
              src="/placeholder.svg?height=400&width=300"
              alt="Forex Trader"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Who Am I?
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card p-8"
          >
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              With over 5 years of experience in the Forex markets, I've built a community of successful traders who
              rely on my daily signals and market analysis.
            </p>
            <p className="text-blue-100 text-lg leading-relaxed">
              My proven track record speaks for itself - consistent profits, transparent results, and a commitment to
              helping others achieve financial freedom through smart trading.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <StatCard icon="📈" number={5} suffix="+" label="Years Experience" delay={0.3} />
            <StatCard icon="👥" number={12000} suffix="" label="Community Members" delay={0.4} />
            <StatCard icon="🎯" number={83} suffix="%" label="Signal Accuracy" delay={0.5} />
            <StatCard icon="💰" number={250} suffix="+" label="Winning Trades" delay={0.6} />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon,
  number,
  suffix,
  label,
  delay,
}: {
  icon: string
  number: number
  suffix: string
  label: string
  delay: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < number) {
            return Math.min(prev + Math.ceil(number / 50), number)
          }
          return number
        })
      }, 50)

      return () => clearInterval(timer)
    }
  }, [isInView, number])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
    >
      <div className="text-4xl mb-4 flex items-center justify-center">
        <img
          src={`/placeholder.svg?height=60&width=60&query=${label.toLowerCase()}`}
          alt={label}
          className="w-12 h-12 mr-2"
        />
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-blue-200 text-sm">{label}</div>
    </motion.div>
  )
}

function TelegramCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="telegram" ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className="glass-card p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
          <div className="relative z-10">
            <div className="text-6xl mb-6">📱</div>
            <h2 className="text-4xl font-bold text-white mb-6">Daily Signals. Live Charts. Real Wins.</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get instant access to my private Telegram channel with real-time trading signals and market analysis.
            </p>

            <div className="glass-card p-6 mb-8 max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  FX
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Forex Signals Pro</div>
                  <div className="text-blue-200 text-sm">2 minutes ago</div>
                </div>
              </div>
              <div className="text-left text-blue-100">
                🎯 EUR/USD SELL Signal
                <br />
                Entry: 1.0850
                <br />
                TP: 1.0820 ✅ +30 pips profit!
              </div>
            </div>

            <GlowButton href="#" primary pulse>
              Join My Signal Channel Now
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AffiliateBroker() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="broker" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Start Trading With My Trusted Broker
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 group hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Trade with confidence using the same broker I trust
              </h3>
              <p className="text-blue-100 mb-6">
                After testing dozens of brokers, I've partnered with the most reliable platform that offers competitive
                spreads, fast execution, and excellent customer support.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">1:500</div>
                  <div className="text-blue-200 text-sm">Leverage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">$0</div>
                  <div className="text-blue-200 text-sm">Deposit Fee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">50%</div>
                  <div className="text-blue-200 text-sm">Bonus</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-blue-200 text-sm">Support</div>
                </div>
              </div>

              <GlowButton href="#" primary>
                Register Now
              </GlowButton>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Trading Platform"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      image: "/placeholder.svg?height=100&width=100",
      quote: "Thanks to your signals, I've grown my account 2X in 3 months.",
      name: "Anonymous Trader",
    },
    {
      image: "/placeholder.svg?height=100&width=100",
      quote: "Best forex signals I've ever used. Consistent profits every week.",
      name: "Anonymous Trader",
    },
    {
      image: "/placeholder.svg?height=100&width=100",
      quote: "Finally found a signal provider I can trust. Amazing results!",
      name: "Anonymous Trader",
    },
    {
      image: "/placeholder.svg?height=100&width=100",
      quote: "Your analysis helped me understand the market better. Thank you!",
      name: "Anonymous Trader",
    },
    {
      image: "/placeholder.svg?height=100&width=100",
      quote: "Professional service with real results. Highly recommended!",
      name: "Anonymous Trader",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Results From The Community
        </motion.h2>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 w-max">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 w-80 flex-shrink-0"
              >
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-blue-100 text-center mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-cyan-400 text-center font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EmailCapture({
  email,
  setEmail,
  name,
  setName,
  onSubmit,
}: {
  email: string
  setEmail: (email: string) => void
  name: string
  setName: (name: string) => void
  onSubmit: (e: React.FormEvent) => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass-card p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Don't Miss The Next Big Trade</h2>
          <p className="text-xl text-blue-100 mb-8">Get alerts and updates straight to your inbox.</p>

          <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4">
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>
            <GlowButton type="submit" primary>
              Get Trading Alerts
            </GlowButton>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <SocialIcon icon="📘" label="Facebook" platform="facebook" />
          <SocialIcon icon="🐦" label="Twitter" platform="twitter" />
          <SocialIcon icon="📷" label="Instagram" platform="instagram" />
          <SocialIcon icon="📱" label="Telegram" platform="telegram" />
          <SocialIcon icon="💬" label="WhatsApp" platform="whatsapp" />
          <SocialIcon icon="🎮" label="Discord" platform="discord" />
          <SocialIcon icon="🎵" label="TikTok" platform="tiktok" />
          <SocialIcon icon="📊" label="ExpertOption" platform="expertoption" />
        </div>

        <p className="text-blue-200 mb-4">This is not financial advice. Trade at your own risk.</p>
        <p className="text-blue-300">© {new Date().getFullYear()} Forex Signals Pro. All rights reserved.</p>
      </div>
    </footer>
  )
}

function GlowButton({
  children,
  href,
  primary = false,
  premium = false,
  pulse = false,
  type = "button",
  ...props
}: {
  children: React.ReactNode
  href?: string
  primary?: boolean
  premium?: boolean
  pulse?: boolean
  type?: "button" | "submit"
  [key: string]: any
}) {
  const baseClasses = "px-8 py-4 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group"

  let colorClasses = "bg-white/10 text-white border border-white/20 hover:bg-white/20"

  if (primary) {
    colorClasses = "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500"
  }

  if (premium) {
    colorClasses = "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500"
  }

  const pulseClasses = pulse ? "animate-pulse" : ""

  const Component = href ? "a" : "button"

  return (
    <Component href={href} type={type} className={`${baseClasses} ${colorClasses} ${pulseClasses}`} {...props}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </Component>
  )
}

function SocialIcon({ icon, label, platform }: { icon: string; label: string; platform?: string }) {
  const getIcon = () => {
    switch (platform) {
      case "facebook":
        return "📘"
      case "twitter":
        return "🐦"
      case "instagram":
        return "📷"
      case "telegram":
        return "📱"
      case "whatsapp":
        return "💬"
      case "discord":
        return "🎮"
      case "tiktok":
        return "🎵"
      case "expertoption":
        return "📊"
      default:
        return icon
    }
  }

  return (
    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-colors cursor-pointer group">
      <span className="group-hover:scale-110 transition-transform">{getIcon()}</span>
    </div>
  )
}
