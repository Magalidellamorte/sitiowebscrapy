'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface SmartphoneIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SmartphoneIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const screenVariants: Variants = {
  normal: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    opacity: [0.5, 1, 0.5, 1],
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.2,
      repeat: 1,
      ease: "easeInOut",
    },
  },
};

const SmartphoneIcon = forwardRef<SmartphoneIconHandle, SmartphoneIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start('animate'),
        stopAnimation: () => controls.start('normal'),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start('animate');
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start('normal');
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <motion.rect
            width="12"
            height="12"
            x="6"
            y="4"
            variants={screenVariants}
            animate={controls}
            fill="currentColor"
            opacity="0.2"
          />
          <path d="M9 18h6" />
        </svg>
      </div>
    );
  }
);

SmartphoneIcon.displayName = 'SmartphoneIcon';

export { SmartphoneIcon };