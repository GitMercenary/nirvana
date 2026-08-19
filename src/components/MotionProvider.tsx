'use client'

import { MotionConfig } from 'framer-motion'

/**
 * Honors the user's OS "reduce motion" setting: with reducedMotion="user",
 * framer-motion renders every animation at its END state (visible) instead of
 * playing opacity/transform tweens. Zero change for everyone else — normal
 * visitors still get the fade-ins. Also means motion-sensitive users and any
 * crawler advertising reduced-motion see fully-rendered content immediately.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
