import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Alert,
  Platform
} from 'react-native';

import { resetPassword } from '../../services/auth';

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

  async function handleSubmit() {
    if (!email) return;

    Keyboard.dismiss();

    try {
      const response = await resetPassword(email);
    } catch (err) {
      Alert.alert('Houve um erro ao tentar recuperar sua senha.');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        enabled={Platform.OS === 'ios' ? true : false}
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
