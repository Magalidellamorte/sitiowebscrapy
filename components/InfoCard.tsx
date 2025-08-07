"use client";

import { ReactNode } from 'react';

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export default function InfoCard({
  icon,
  title,
  description,
  onHoverStart,
  onHoverEnd,
}: InfoCardProps) {
  return (
    <div
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 h-full"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
