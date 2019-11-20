import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Modal,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { MaterialIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

import api from '../../services/api';
import subscribedAnimation from '../../../assets/subscribed_animation.json';

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
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalCloseButton,
  ModalCloseButtonText,
} from './styles';

export default function WorkshopDetails({ navigation }) {
  const modalContainerRef = useRef();
  const modalContentRef = useRef();

  const workshopParam = useMemo(() => navigation.getParam('workshop'), [
    navigation,
  ]);

  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingSubscription, setLoadingSubscription] = useState(false);
  const [workshop, setWorkshop] = useState({});

  const showSuccessModal = useCallback(async () => {
    setModalOpen(true);

    await modalContainerRef.current.fadeIn(500);
    await modalContentRef.current.fadeInUp(500);
  }, []);

  const hideSuccessModal = useCallback(async () => {
    await modalContentRef.current.fadeOutDown(500);
    await modalContainerRef.current.fadeOut(500);

    setModalOpen(false);
  }, []);

  const handleOpenLink = useCallback(link => {
    WebBrowser.openBrowserAsync(link, { toolbarColor: '#100F12' });
  }, []);

  const handleSubscribe = useCallback(async () => {
    try {
      setLoadingSubscription(true);

      await api.post(`/workshops/${workshopParam.id}/subscriptions`);

      setWorkshop({ ...workshop, subscribed: true });
      showSuccessModal();
    } catch (err) {
      const message =
        err.response && err.response.data
          ? err.response.data.error
          : 'Falha na inscrição para o workshop';

      Alert.alert('Ooopsss', message);
    } finally {
      setLoadingSubscription(false);
    }
  }, [workshop]);

  const unsubscribeUser = useCallback(async () => {
    try {
      setLoadingSubscription(true);

      await api.delete(`/workshops/${workshopParam.id}/subscriptions`);

      setWorkshop({ ...workshop, subscribed: false });
    } catch (err) {
      const message =
        err.response && err.response.data
          ? err.response.data.error
          : 'Falha na remoção da inscrição para o workshop';

      Alert.alert('Ooopsss', message);
    } finally {
      setLoadingSubscription(false);
    }
  }, [workshop]);

  const handleUnsubscribe = useCallback(async () => {
    Alert.alert(
      'Tem certeza que deseja fazer isso?',
      'Remover sua inscrição liberará uma vaga para esse workshop e você pode acabar perdendo sua vaga.',
      [
        {
          text: 'Desfazer',
        },
        {
          text: 'Prosseguir',
          onPress: unsubscribeUser,
        },
      ]
    );
  }, [workshop]);

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
          <>
            {!workshop.subscribed ? (
              <SubmitButton onPress={handleSubscribe}>
                {loadingSubscription ? (
                  <ActivityIndicator color="#FFF" size="small" />
                ) : (
                  <SubmitButtonText>GARANTIR MINHA VAGA</SubmitButtonText>
                )}
              </SubmitButton>
            ) : (
              <SubmitButton subscribed onPress={handleUnsubscribe}>
                {loadingSubscription ? (
                  <ActivityIndicator color="#FFF" size="small" />
                ) : (
                  <SubmitButtonText>REMOVER INSCRIÇÃO</SubmitButtonText>
                )}
              </SubmitButton>
            )}
          </>
        )}
      </Container>

      <Modal visible={modalOpen} transparent>
        <ModalContainer ref={modalContainerRef}>
          <ModalContent ref={modalContentRef}>
            <LottieView
              style={{ width: 200, marginBottom: 20, alignSelf: 'center' }}
              resizeMode="contain"
              autoSize
              autoPlay
              source={subscribedAnimation}
            />
            <ModalTitle>Vaga garantida!</ModalTitle>
            <ModalDescription>
              Já consegue sentir o frio na barriga? Nossa viagem já tem um
              destino.
            </ModalDescription>
            <ModalCloseButton onPress={hideSuccessModal}>
              <MaterialIcons name="close" size={18} color="#111" />
              <ModalCloseButtonText>FECHAR</ModalCloseButtonText>
            </ModalCloseButton>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
}
