"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface BenefitCardProps {
  id: string
  title: string
  description: string
  imageUrl?: string
  cost: number
  empresa: {
    name: string
  }
  categories?: string[]
}

export const BenefitCard = ({ 
  id,
  title, 
  description, 
  imageUrl, 
  cost, 
  empresa,
  categories = ["Presencial", "Gastronomía", "Pinamar"]
}: BenefitCardProps) => {
  const handleClick = () => {
    // Redirigir al sistema de beneficios real - sección de cupones
    window.open('https://beneficios.scrapyapp.com/user/coupons', '_blank', 'noopener,noreferrer')
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={handleClick}
    >
      {/* Imagen del beneficio */}
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex flex-col items-center justify-center text-white">
                    <svg class="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span class="text-sm font-medium">${empresa.name}</span>
                  </div>
                `;
              }
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
            <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        )}
        
        {/* Precio en círculo verde (top right) */}
        <div className="absolute top-3 right-3 bg-green-500 text-white rounded-full px-3 py-1 text-sm font-bold">
          {cost}
        </div>
      </div>
      
      {/* Contenido */}
      <div className="p-4">
        {/* Título del beneficio */}
        <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
        
        {/* Nombre de la empresa */}
        <p className="text-sm text-gray-600 font-medium mb-2">{empresa.name}</p>
        
        {/* Descripción */}
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{description}</p>
        
        {/* Tags de categoría */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category, index) => (
            <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              {category}
            </span>
          ))}
        </div>
        
        {/* Botón Canjear */}
        <button 
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          Canjear
        </button>
      </div>
    </div>
  )
}
