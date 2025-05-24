import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()

  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative overflow-hidden py-20 text-center"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: `center ${offsetY * 0.15}px`, // subtle parallax
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Fog overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 fog" />

      {/* Main content */}
      <div className="relative z-20 container mx-auto text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to ShopFront</h2>
        <p className="text-lg mb-6">
          Your one-stop shop for everything awesome.
        </p>
        <Button className="cursor-pointer" onClick={() => navigate("/products")}>Shop Now</Button>
      </div>

      {/* Inline fog animation */}
      <style>{`
        .fog {
          background: linear-gradient(
            to bottom,
            rgba(255, 0, 0, 0.2),
            rgba(0, 0, 0, 0) 60%
          );
          animation: drift 6s ease-in-out infinite alternate;
        }
        @keyframes drift {
          from { transform: translateY(0); }
          to   { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  )
}

export default Hero
