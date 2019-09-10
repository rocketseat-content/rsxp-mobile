import React from 'react';
import NavigationService from '../../services/navigation';

import {
  Container,
  SmallMask,
  BackButton,
  BackButtonIcon,
  WorkshopTitle
} from './styles';

export default function WorkshopDetailsHeader({ title }) {
  return (
    <Container>
      <SmallMask />
      <BackButton onPress={() => NavigationService.navigate('Workshops')}>
        <BackButtonIcon />
      </BackButton>
      <WorkshopTitle numberOfLines={1}>{title}</WorkshopTitle>
    </Container>
  );
}
