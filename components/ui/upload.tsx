'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface UploadIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface UploadIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const arrowVariants: Variants = {
  normal: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    y: [-4, 0, -4, 0],
    opacity: [0.5, 1, 0.5, 1],
    transition: {
      duration: 1.5,
      repeat: 1,
      ease: "easeInOut",
    },
  },
};

const lineVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1, 0, 1],
    opacity: [0.3, 1, 0.3, 1],
    transition: {
      duration: 1.5,
      repeat: 1,
      ease: "easeInOut",
    },
  },
};

const UploadIcon = forwardRef<UploadIconHandle, UploadIconProps>(
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
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <motion.g variants={arrowVariants} animate={controls}>
            <motion.polyline
              points="7,10 12,5 17,10"
              variants={lineVariants}
              animate={controls}
            />
            <motion.line
              x1="12"
              y1="5"
              x2="12"
              y2="15"
              variants={lineVariants}
              animate={controls}
            />
          </motion.g>
        </svg>
      </div>
    );
  }
);

UploadIcon.displayName = 'UploadIcon';

export { UploadIcon };