'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface MapPinIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MapPinIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const pinVariants: Variants = {
  normal: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    y: [-2, 0, -2, 0],
    scale: [1, 1.1, 1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: 1,
      ease: "easeInOut",
    },
  },
};

const circleVariants: Variants = {
  normal: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    scale: [1, 1.3, 1, 1.3, 1],
    opacity: [1, 0.6, 1, 0.6, 1],
    transition: {
      duration: 2,
      repeat: 1,
      ease: "easeInOut",
    },
  },
};

const MapPinIcon = forwardRef<MapPinIconHandle, MapPinIconProps>(
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
          <motion.g variants={pinVariants} animate={controls}>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <motion.circle
              cx="12"
              cy="10"
              r="3"
              variants={circleVariants}
              animate={controls}
            />
          </motion.g>
        </svg>
      </div>
    );
  }
);

MapPinIcon.displayName = 'MapPinIcon';

export { MapPinIcon };