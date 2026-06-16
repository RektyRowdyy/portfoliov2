"use client"

import { useImperativeHandle } from "react"
import { motion, useAnimation } from "motion/react"

export type ChevronsUpDownIconHandle = {
  startAnimation: () => void
  stopAnimation: () => void
}

export type ChevronsUpDownIconProps = React.ComponentPropsWithoutRef<"svg"> & {
  ref?: React.Ref<ChevronsUpDownIconHandle>
  duration?: number
}

export function ChevronsUpDownIcon({
  ref,
  duration = 0.3,
  ...props
}: ChevronsUpDownIconProps) {
  const controls = useAnimation()

  useImperativeHandle(ref, () => ({
    startAnimation: () => controls.start("animate"),
    stopAnimation: () => controls.start("normal"),
  }))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <motion.path
        d="m7 15 5 5 5-5"
        variants={{
          normal: { d: "m7 15 5 5 5-5" },
          animate: { d: "m7 17 5 5 5-5" },
        }}
        initial="normal"
        animate={controls}
        transition={{ duration }}
      />
      <motion.path
        d="m7 9 5-5 5 5"
        variants={{
          normal: { d: "m7 9 5-5 5 5" },
          animate: { d: "m7 7 5-5 5 5" },
        }}
        initial="normal"
        animate={controls}
        transition={{ duration }}
      />
    </svg>
  )
}
