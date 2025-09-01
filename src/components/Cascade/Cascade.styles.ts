import styled, { css } from 'styled-components';
import type { AnimationConfig } from './Cascade.types';
import type React from 'react';

export const Item = styled.div<{
  $index: number;
  $itemDefaultValues?: React.CSSProperties;
  $animationConfig: AnimationConfig;
  $animationGap: number;
}>`
  ${({ $index, $animationConfig, $animationGap, $itemDefaultValues }) => {
    const {
      keyframes,
      delay = 0,
      direction = 'normal',
      duration = 300,
      iterationCount = 1,
      timingFunction = 'ease',
      fillMode = 'forwards',
    } = $animationConfig;

    const totalDelay = delay + $index * $animationGap;

    return css`
      /* Inject default values */
      ${$itemDefaultValues &&
      css({
        ...$itemDefaultValues,
      })}

      /* Animation config */
      animation-name: ${keyframes};
      animation-duration: ${duration}ms;
      animation-delay: ${totalDelay}ms;
      animation-direction: ${direction};
      animation-iteration-count: ${iterationCount};
      animation-timing-function: ${timingFunction};
      animation-fill-mode: ${fillMode};
    `;
  }}
`;
