import React from 'react';
import { useDispatch } from 'react-redux';

import { signOutRequest } from '../../store/modules/auth/actions';

import {
  Container,
  SmallLogo,
  WorkshopsTitleSeparator,
  WorkshopsTitle,
  InfoIconButton,
  InfoIcon,
} from './styles';

export default function WorkshopsHeader() {
  const dispatch = useDispatch();

  return (
    <Container>
      <SmallLogo />
      <WorkshopsTitleSeparator />
      <WorkshopsTitle>WORKSHOPS</WorkshopsTitle>
      <InfoIconButton
        hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
        onPress={() => dispatch(signOutRequest())}
      >
        <InfoIcon />
      </InfoIconButton>
    </Container>
  );
}
