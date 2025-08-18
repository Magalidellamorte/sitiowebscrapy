"use client"

import React from "react"
import { useWhatsAppRedirect } from "@/lib/whatsapp-redirect"

interface WhatsAppLinkProps {
  phone: string
  text?: string
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}

/**
 * Reusable WhatsApp link component with intelligent redirection
 * Automatically detects device and redirects to app or web appropriately
 */
export default function WhatsAppLink({ 
  phone, 
  text = "", 
  children, 
  className = "",
  ariaLabel = "Contactar por WhatsApp"
}: WhatsAppLinkProps) {
  const { redirect, urls } = useWhatsAppRedirect({
    phone,
    text
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    redirect()
  }

  return (
    <a
      href={urls.webUrl}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}
