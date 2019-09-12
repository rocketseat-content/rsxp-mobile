import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Platform
} from 'react-native';
import { useDispatch } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

import { SignHeader } from '../../components';

import {
  Container,
  InputContainer,
  InputTitle,
  Input,
  EnvelopeIcon,
  LockIcon,
  SubmitButton,
  SubmitButtonText,
  ForgotPasswordButton,
  ForgotPasswordButtonText
} from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  async function handleSubmit() {
    if (!email || !password) return;

    Keyboard.dismiss();

    dispatch(signInRequest(email, password));
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}
    >
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={-100}
      >
        <SignHeader />

        <Container>
          <View>
            <InputTitle>E-MAIL</InputTitle>
            <InputContainer>
              <Input
                placeholder="Digite seu e-mail"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                value={email}
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
              />
              <LockIcon />
            </InputContainer>
          </View>

          <View>
            <SubmitButton onPress={handleSubmit}>
              <SubmitButtonText>EMBARCAR NO FOGUETE</SubmitButtonText>
            </SubmitButton>

            <ForgotPasswordButton
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <ForgotPasswordButtonText>
                Esqueci minha senha
              </ForgotPasswordButtonText>
            </ForgotPasswordButton>
          </View>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
