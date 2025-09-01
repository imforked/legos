import * as S from './Cascade.styles';
import type { CascadeProps } from './Cascade.types';

export const Cascade = ({
  itemIndex,
  item,
  itemDefaultCssValues,
  animationConfig,
  animationGap = 0,
}: CascadeProps) => {
  return (
    <S.Item
      $index={itemIndex}
      $itemDefaultValues={itemDefaultCssValues}
      $animationConfig={animationConfig}
      $animationGap={animationGap}
    >
      {item}
    </S.Item>
  );
};
