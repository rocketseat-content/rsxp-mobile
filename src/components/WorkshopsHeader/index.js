import React from 'react';

import {
  Container,
  InfoIconButton,
  SmallMask,
  SmallLogo,
  WorkshopsTitleSeparator,
  WorkshopsTitle,
  InfoIcon
} from './styles';

export default function WorkshopsHeader() {
  return (
    <Container>
      <SmallMask />
      <SmallLogo />
      <WorkshopsTitleSeparator />
      <WorkshopsTitle>WORKSHOPS</WorkshopsTitle>
      <InfoIconButton>
        <InfoIcon />
      </InfoIconButton>
    </Container>
  );
}
