"use client"

import { useState, useEffect, useMemo, FC, ReactNode } from "react"

interface CarouselCard {
  id: number
  icon: ReactNode
  title: string
  description: string
}

interface BenefitsCarouselProps {
  cards: CarouselCard[]
  title: string
  subtitle: string
  isMobile: boolean
}

const BenefitsCarousel: FC<BenefitsCarouselProps> = ({ cards, title, subtitle, isMobile }) => {
  const N = cards.length
  const extendedCards = useMemo(() => [...cards, ...cards, ...cards], [cards])
  const [index, setIndex] = useState(N)
  const [immediate, setImmediate] = useState(false)
  const VISIBLE_CARDS = isMobile ? 1 : 2
  const slideWidthPct = 100 / VISIBLE_CARDS

  const nextSlide = () => {
    setImmediate(false)
    setIndex((i) => i + 1)
  }

  const prevSlide = () => {
    setImmediate(false)
    setIndex((i) => i - 1)
  }

  const handleTransitionEnd = () => {
    if (index >= 2 * N) {
      setImmediate(true)
      setIndex((i) => i - N)
    } else if (index < N) {
      setImmediate(true)
      setIndex((i) => i + N)
    }
  }

  useEffect(() => {
    if (!immediate) return
    const id = requestAnimationFrame(() => setImmediate(false))
    return () => cancelAnimationFrame(id)
  }, [immediate])

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight">
            {title}
          </h2>
          <p className="text-green-500 font-semibold text-2xl mt-4">Principales beneficios</p>
          <p className="text-lg md:text-xl text-gray-500 mt-4 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl py-4 px-3">
            <div
              className="flex will-change-transform"
              style={{
                transform: `translateX(-${index * slideWidthPct}%)`,
                transition: immediate ? "none" : "transform 300ms ease-in-out",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedCards.map((card, i) => (
                <div key={`${card.id}-${i}`} className="w-full md:w-1/2 flex-shrink-0 px-3">
                  <div className="bg-white rounded-3xl p-8 carousel-card relative mx-2">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">{card.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 nav-button z-10"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 nav-button z-10"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {(() => {
          const maxStart = N - VISIBLE_CARDS
          const normalizedStart = ((index - N) % N + N) % N
          const activeDot = Math.min(normalizedStart, maxStart)
          const dotsCount = N 
          return (
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: dotsCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(N + i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeDot === i ? "bg-green-400 scale-110" : "bg-gray-300"
                  }`}
                  aria-label={`Ir al slide ${i + 1}`}
                />
              ))}
            </div>
          )
        })()}
      </div>
    </section>
  )
}

export default BenefitsCarousel

