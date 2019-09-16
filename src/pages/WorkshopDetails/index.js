import React from 'react';
import { useDispatch } from 'react-redux';

import { subscribeToWorkshop } from '../../store/modules/workshop/actions';

import { WorkshopDetailsHeader } from '../../components';

import {
  Container,
  Content,
  WorkshopTitle,
  WorkshopDescriptionContainer,
  WorkshopDescription,
  Separator,
  InstructorContainer,
  Instructor,
  InstructorInfo,
  InstructorAvatar,
  InstructorName,
  InstructorTitle,
  IconsContainer,
  GithubIcon,
  LinkedinIcon,
  SubmitButton,
  SubmitButtonText
} from './styles';

export default function WorkshopDetails({ navigation }) {
  const workshop = navigation.getParam('workshop');
  const { user } = workshop;

  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <WorkshopDetailsHeader title={workshop.title} color={workshop.color} />
        <Content>
          <WorkshopTitle>{workshop.title}</WorkshopTitle>
          <InstructorContainer>
            <InstructorAvatar
              source={{
                uri: user.avatar_url
              }}
            />
            <Instructor>
              <InstructorInfo>
                <InstructorName>{user.name}</InstructorName>
                <InstructorTitle>{user.title}</InstructorTitle>
              </InstructorInfo>
              <IconsContainer>
                <GithubIcon />
                <LinkedinIcon />
              </IconsContainer>
            </Instructor>
          </InstructorContainer>

          <Separator />
          <WorkshopDescriptionContainer alwaysBounceVertical>
            <WorkshopDescription>{workshop.description}</WorkshopDescription>
          </WorkshopDescriptionContainer>
        </Content>
      </Container>

      <SubmitButton onPress={() => dispatch(subscribeToWorkshop(workshop.id))}>
        <SubmitButtonText>GARANTIR MINHA VAGA</SubmitButtonText>
      </SubmitButton>
    </>
  );
}
