import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Alert,
  Platform
} from 'react-native';

import { SignHeader } from '../../components';

import {
  Container,
  InputContainer,
  InputTitle,
  Input,
  EnvelopeIcon,
  SubmitButton,
  SubmitButtonText,
  BackToLoginButton,
  BackToLoginButtonText
} from './styles';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState();

  function validateMail() {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim.test(
      email
    );
  }

  async function handleSubmit() {
    Keyboard.dismiss();

    if (!validateMail()) {
      return Alert.alert('Email inválido. Por favor, verifique seus dados!');
    }

    Alert.alert(
      'Nós lhe enviamos um email com os detalhes da sua recuperação se senha!'
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        enabled={Platform.OS === 'ios'}
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
              />
              <EnvelopeIcon />
            </InputContainer>
          </View>

          <View>
            <SubmitButton onPress={handleSubmit}>
              <SubmitButtonText>RECUPERAR SENHA</SubmitButtonText>
            </SubmitButton>

            <BackToLoginButton onPress={() => navigation.navigate('Login')}>
              <BackToLoginButtonText>Voltar ao login</BackToLoginButtonText>
            </BackToLoginButton>
          </View>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
