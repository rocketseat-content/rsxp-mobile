import React from 'react';
import { useDispatch } from 'react-redux';

import { signOutRequest } from '../../store/modules/auth/actions';

import {
  Container,
  SmallLogo,
  WorkshopsTitleSeparator,
  WorkshopsTitle,
  InfoIconButton,
  InfoIcon
} from './styles';

export default function WorkshopsHeader() {
  const dispatch = useDispatch();

  return (
    <Container>
      <SmallLogo />
      <WorkshopsTitleSeparator />
      <WorkshopsTitle>WORKSHOPS</WorkshopsTitle>
      <InfoIconButton onPress={() => dispatch(signOutRequest())}>
        <InfoIcon />
      </InfoIconButton>
    </Container>
  );
}
