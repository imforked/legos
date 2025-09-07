import * as S from './ComponentLibrary.styles';
import { LIBRARY_DATA } from './ComponentLibrary.config';

function ComponentLibrary() {
  return LIBRARY_DATA.map(({ metaData, component }, index) => (
    <S.ComponentContainer key={`${metaData.title}-${index}`}>
      <S.MetaDescriptionContainer>
        <S.Title>{metaData.title}</S.Title>
        <S.Description>{metaData.description}</S.Description>
      </S.MetaDescriptionContainer>
      {component}
    </S.ComponentContainer>
  ));
}

export default ComponentLibrary;
