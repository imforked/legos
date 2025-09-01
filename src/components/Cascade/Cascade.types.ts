import { keyframes } from 'styled-components';

export type AnimationDirection = 'normal' | 'reverse';

export type AnimationTiming =
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'linear'
  | 'step-start'
  | 'step-end';

export type AnimationFillMode = 'none' | 'forwards' | 'backwards' | 'both';

export type AnimationPlayState = 'running' | 'paused';

export type AnimationIterationCount = number | 'infinite';

/** Configuration options for item animations */
export interface AnimationConfig {
  /** CSS keyframes or a keyframes object from styled-components */
  keyframes: ReturnType<typeof keyframes>;

  /** Delay before the animation starts (milliseconds) */
  delay?: number;

  /** Direction of the animation (e.g. "normal", "reverse", "alternate") */
  direction?: AnimationDirection;

  /** Duration of the animation (milliseconds) */
  duration?: number;

  /** Number of times the animation repeats (e.g. "infinite" or a number) */
  iterationCount?: AnimationIterationCount;

  /** Timing function (can be standard easing or a cubic-bezier string) */
  timingFunction?: AnimationTiming | string;

  /** Defines how a CSS animation applies styles outside its execution time */
  fillMode?: AnimationFillMode;
}

export interface CascadeProps {
  itemIndex: number;
  item: React.ReactNode;
  itemDefaultCssValues: React.CSSProperties;
  animationConfig: AnimationConfig;
  animationGap?: number;
}
