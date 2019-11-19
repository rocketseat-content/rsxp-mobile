import React, { useState, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as WebBrowser from 'expo-web-browser';

import { signInRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Logo,
  FormContainer,
  InputContainer,
  InputTitle,
  Input,
  EnvelopeIcon,
  LockIcon,
  SubmitButton,
  SubmitButtonText,
  NewAccountButton,
  NewAccountButtonText,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
} from './styles';

export default function Login({ navigation }) {
  const loading = useSelector(state => state.auth.loading);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  async function handleSubmit() {
    if (!email || !password) return;

    Keyboard.dismiss();

    dispatch(signInRequest(email, password));
  }

  function handleCreateAccount() {
    WebBrowser.openBrowserAsync(
      'https://rocketseat.com.br/experience/criar-senha',
      {
        toolbarColor: '#100f12',
      }
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}
      >
        <Container>
          <Logo />

          <FormContainer>
            <InputTitle>E-MAIL</InputTitle>
            <InputContainer>
              <Input
                placeholder="Digite seu e-mail"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                value={email}
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current.focus()}
              />
              <EnvelopeIcon />
            </InputContainer>

            <InputTitle>SENHA</InputTitle>
            <InputContainer>
              <Input
                placeholder="Sua senha secreta"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={text => setPassword(text)}
                value={password}
                ref={passwordInputRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
              />
              <LockIcon />
            </InputContainer>

            <SubmitButton onPress={handleSubmit}>
              {loading ? (
                <ActivityIndicator color="#FFF" size="small" />
              ) : (
                <SubmitButtonText>EMBARCAR NO FOGUETE</SubmitButtonText>
              )}
            </SubmitButton>

            <NewAccountButton onPress={handleCreateAccount}>
              {loading ? (
                <ActivityIndicator color="#FFF" size="small" />
              ) : (
                <NewAccountButtonText>
                  AINDA NÃO TENHO CONTA
                </NewAccountButtonText>
              )}
            </NewAccountButton>

            <ForgotPasswordButton
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <ForgotPasswordButtonText>
                Esqueci minha senha
              </ForgotPasswordButtonText>
            </ForgotPasswordButton>
          </FormContainer>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
