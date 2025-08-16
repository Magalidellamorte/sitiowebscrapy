import React, { forwardRef, useState } from 'react'

interface ContactInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

export const ContactInput = forwardRef<HTMLInputElement, ContactInputProps>(
  ({ label, value, onChange, required = false, className = "", ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const hasValue = value.length > 0
    const isActive = isFocused || hasValue
    const isRequired = required
    
    return (
      <div className={`relative ${className}`}>
        <div className="relative">
          <input
            ref={ref}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full px-6 py-4 bg-white text-gray-600 rounded-full border
              focus:outline-none transition-all duration-300 ease-in-out
              ${isFocused 
                ? 'border-green-500 ring-2 ring-green-500' 
                : 'border-gray-200 hover:border-gray-300'
              }
            `}
            style={{
              // Override browser autocomplete styles
              WebkitBoxShadow: '0 0 0 1000px white inset',
              WebkitTextFillColor: '#4B5563', // text-gray-600
              transition: 'background-color 5000s ease-in-out 0s'
            }}
            placeholder=""
            {...props}
          />
          
          <label
            className={`
              absolute left-6 bg-white px-2 pointer-events-none
              transition-all duration-300 ease-in-out origin-left
              ${isActive 
                ? 'top-0 -translate-y-1/2 text-sm scale-90 text-green-600' 
                : 'top-1/2 -translate-y-1/2 text-base text-gray-400'
              }
              ${isFocused && !hasValue 
                ? 'text-green-600' 
                : isActive 
                  ? 'text-gray-600' 
                  : 'text-gray-400'
              }
            `}
          >
            {label} {isRequired && '*'}
          </label>
        </div>
      </div>
    )
  }
)

ContactInput.displayName = 'ContactInput'
