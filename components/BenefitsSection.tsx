"use client"

import React from "react"

interface Card {
  icon: React.ReactNode
  title: string
  description: string
}

export interface Slide {
  cards: Card[]
}

interface BenefitsSectionProps {
  backgroundColor: string
  title: string
  description: string
  slides: Slide[]
  currentSlide: number
  setCurrentSlide: (index: number) => void
  nextSlide: () => void
  prevSlide: () => void
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  backgroundColor,
  title,
  description,
  slides,
  currentSlide,
  setCurrentSlide,
  nextSlide,
  prevSlide,
}) => {
  return (
    <section className="py-20" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight">
            {title}
          </h2>
          <p className="text-green-500 font-semibold text-2xl mt-4">Principales beneficios</p>
          <p className="text-lg md:text-xl text-gray-500 mt-4 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden pt-4 pb-8 px-4">
            <div
              className="flex transition-transform duration-300 ease-in-out -mx-4"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                  {slide.cards.map((card, cardIndex) => (
                    <div
                      key={cardIndex}
                      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                    >
                      <div className="absolute top-6 right-6">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          {card.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">{card.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{card.description}</p>
                    </div>
                  ))}
                  {slide.cards.length % 2 !== 0 && <div className="hidden md:block"></div>}
                </div>
              ))}
            </div>
          </div>

          {slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10 hidden md:block"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10 hidden md:block"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="flex justify-center mt-2 space-x-2">
                {Array.from({ length: slides.length }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "bg-green-400" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
