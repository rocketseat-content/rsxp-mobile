import React, { useRef, useCallback, useState } from 'react';
import {
  Switch,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { useActionSheet } from '@expo/react-native-action-sheet';

import { updateProfileSuccess } from '../../store/modules/auth/actions';
import api from '../../services/api';

import {
  Container,
  Content,
  AvatarInput,
  AvatarDesc,
  FormContainer,
  InputContainer,
  InputTitle,
  Input,
  SwitchContainer,
  SwitchText,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const { showActionSheetWithOptions } = useActionSheet();

  const githubInputRef = useRef();
  const linkedinInputRef = useRef();
  const oldPasswordInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const profile = useSelector(state => state.auth.user);

  const [avatar_url, setAvatarUrl] = useState(profile.avatar_url);
  const [name, setName] = useState(profile.name);
  const [github, setGithub] = useState(profile.github);
  const [linkedin, setLinkedin] = useState(profile.linkedin);

  const [old_password, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const [changePassword, setChangePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSaveProfile = useCallback(async () => {
    try {
      setLoading(true);

      const data = new FormData(); //eslint-disable-line

      data.append('name', name);
      data.append('github', github);
      data.append('linkedin', linkedin);

      if (old_password) {
        data.append('old_password', old_password);
        data.append('password', password);
        data.append('password_confirmation', password_confirmation);
      }

      if (avatar_url !== profile.avatar_url) {
        const filename = avatar_url.split('/').pop();
        data.append('avatar', {
          uri: avatar_url,
          name: filename,
          type: 'image',
        });
      }

      await api.put('/profile', data);

      dispatch(
        updateProfileSuccess({
          name,
          github,
          linkedin,
          avatar_url,
        })
      );

      Alert.alert('Sucesso!', 'Perfil atualizado com sucesso.');
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.error;

      Alert.alert(
        'Ooopsss',
        message || 'Falha na atualização do perfil, confira seus dados.'
      );
    } finally {
      setLoading(false);
    }
  }, [
    name,
    github,
    linkedin,
    old_password,
    password,
    password_confirmation,
    avatar_url,
  ]);

  const selectAvatar = useCallback(async result => {
    const image = await ImageManipulator.manipulateAsync(result.uri, [
      { resize: { width: 400 } },
    ]);

    setAvatarUrl(image.uri);
  }, []);

  const handleSelectAvatar = useCallback(() => {
    const options = ['Tirar foto', 'Buscar da galeria', 'Cancelar'];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      async buttonIndex => {
        let result;

        switch (buttonIndex) {
          case 0:
            if (Constants.platform.ios) {
              const { status } = await Permissions.askAsync(
                Permissions.CAMERA,
                Permissions.CAMERA_ROLL
              );

              if (status !== 'granted') {
                Alert.alert(
                  'Eita!',
                  'Precisamos da permissão da câmera para você tirar uma foto'
                );
                break;
              }
            }

            result = await ImagePicker.launchCameraAsync({
              mediaTypes: 'Images',
              aspect: [1, 1],
              allowsEditing: true,
              quality: 0.8,
            });

            if (result.cancelled) {
              break;
            }

            selectAvatar(result);

            break;
          case 1:
            if (Constants.platform.ios) {
              const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
              );

              if (status !== 'granted') {
                Alert.alert(
                  'Eita!',
                  'Precisamos da permissão da galeria para selecionar uma imagem'
                );
                break;
              }
            }

            result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: 'Images',
              aspect: [1, 1],
              allowsEditing: true,
              quality: 0.8,
            });

            if (result.cancelled) {
              break;
            }

            selectAvatar(result);

            break;
          default:
            break;
        }
      }
    );
  }, []);

  return (
    <Container>
      <Content keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={handleSelectAvatar}>
          <AvatarInput source={{ uri: avatar_url }} />
        </TouchableWithoutFeedback>
        <AvatarDesc>Clique na imagem para alterar seu avatar</AvatarDesc>

        <FormContainer>
          <InputTitle>NOME COMPLETO</InputTitle>
          <InputContainer>
            <Input
              placeholder="Digite seu nome"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={setName}
              value={name}
              returnKeyType="next"
              onSubmitEditing={() => githubInputRef.current.focus()}
            />
            <MaterialIcons name="person-pin" size={20} color="#999" />
          </InputContainer>

          <InputTitle>GITHUB</InputTitle>
          <InputContainer>
            <Input
              placeholder="Link do seu Github"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="url"
              ref={githubInputRef}
              onChangeText={setGithub}
              value={github}
              returnKeyType="next"
              onSubmitEditing={() => linkedinInputRef.current.focus()}
            />
            <FontAwesome5 name="github" size={20} color="#999" />
          </InputContainer>

          <InputTitle>LINKEDIN</InputTitle>
          <InputContainer>
            <Input
              placeholder="Link do seu Linkedin"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="url"
              ref={linkedinInputRef}
              onChangeText={setLinkedin}
              value={linkedin}
              returnKeyType={changePassword ? 'next' : 'send'}
              onSubmitEditing={() =>
                changePassword
                  ? oldPasswordInputRef.current.focus()
                  : handleSaveProfile()
              }
            />
            <FontAwesome5 name="linkedin" size={20} color="#999" />
          </InputContainer>

          <SwitchContainer>
            <SwitchText>Alterar senha</SwitchText>
            <Switch
              trackColor="#7159c1"
              value={changePassword}
              onValueChange={setChangePassword}
            />
          </SwitchContainer>

          {changePassword && (
            <>
              <InputTitle>SENHA ATUAL</InputTitle>
              <InputContainer>
                <Input
                  placeholder="Sua senha atual"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  ref={oldPasswordInputRef}
                  onChangeText={setOldPassword}
                  value={old_password}
                  returnKeyType="next"
                  onSubmitEditing={() => passwordInputRef.current.focus()}
                />
                <MaterialIcons name="lock" size={20} color="#999" />
              </InputContainer>

              <InputTitle>NOVA SENHA</InputTitle>
              <InputContainer>
                <Input
                  placeholder="Sua nova senha"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  ref={passwordInputRef}
                  onChangeText={setPassword}
                  value={password}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    confirmPasswordInputRef.current.focus()}
                />
                <MaterialIcons name="lock" size={20} color="#999" />
              </InputContainer>

              <InputTitle>CONFIRMAR SENHA</InputTitle>
              <InputContainer>
                <Input
                  placeholder="Confirme a nova senha"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  ref={confirmPasswordInputRef}
                  onChangeText={setPasswordConfirmation}
                  value={password_confirmation}
                  returnKeyType="send"
                  onSubmitEditing={handleSaveProfile}
                />
                <MaterialIcons name="lock" size={20} color="#999" />
              </InputContainer>
            </>
          )}

          <SubmitButton onPress={handleSaveProfile}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <SubmitButtonText>Salvar perfil</SubmitButtonText>
            )}
          </SubmitButton>
        </FormContainer>
      </Content>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <MaterialIcons name="person" size={24} color={tintColor} />
  ),
};
