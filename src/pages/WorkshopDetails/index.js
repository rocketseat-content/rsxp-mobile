import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import api from '../../services/api';

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
  SubmitButtonText,
} from './styles';

export default function WorkshopDetails({ navigation }) {
  const workshopParam = useMemo(() => navigation.getParam('workshop'), [
    navigation,
  ]);

  const [loading, setLoading] = useState(true);
  const [workshop, setWorkshop] = useState({});

  const handleOpenLink = useCallback(link => {
    WebBrowser.openBrowserAsync(link, { toolbarColor: '#100F12' });
  }, []);

  const handleSubscription = useCallback(() => {
    // Subscribed?
  }, []);

  useEffect(() => {
    setLoading(true);

    api.get(`/workshops/${workshopParam.id}`).then(response => {
      setWorkshop(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Container>
        <WorkshopDetailsHeader
          title={workshopParam.title}
          color={workshopParam.color}
        />
        <Content>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <>
              <WorkshopTitle>{workshop.title}</WorkshopTitle>
              <InstructorContainer>
                <InstructorAvatar uri={workshop.user.avatar_url} />
                <Instructor>
                  <InstructorInfo>
                    <InstructorName>{workshop.user.name}</InstructorName>
                    {workshop.user.title && (
                      <InstructorTitle>{workshop.user.title}</InstructorTitle>
                    )}
                  </InstructorInfo>
                  <IconsContainer>
                    {workshop.user.github && (
                      <TouchableOpacity
                        onPress={() => handleOpenLink(workshop.user.github)}
                      >
                        <GithubIcon />
                      </TouchableOpacity>
                    )}
                    {workshop.user.linkedin && (
                      <TouchableOpacity
                        onPress={() => handleOpenLink(workshop.user.linkedin)}
                      >
                        <LinkedinIcon />
                      </TouchableOpacity>
                    )}
                  </IconsContainer>
                </Instructor>
              </InstructorContainer>

              <Separator />
              <WorkshopDescriptionContainer alwaysBounceVertical>
                <WorkshopDescription>
                  {workshop.description}
                </WorkshopDescription>
              </WorkshopDescriptionContainer>
            </>
          )}
        </Content>

        {!loading && (
          <SubmitButton onPress={handleSubscription}>
            <SubmitButtonText>GARANTIR MINHA VAGA</SubmitButtonText>
          </SubmitButton>
        )}
      </Container>
    </>
  );
}
