import React, { useState, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import {
  Container,
  Title,
  Description,
  FormContainer,
  InputContainer,
  InputTitle,
  Input,
  SubmitButton,
  SubmitButtonText,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
} from './styles';

export default function CreateAccount({ navigation }) {
  const [loading, setLoading] = useState(false);

  const [order_id, setOrderId] = useState('');
  const [ticket_number, setTicketNumber] = useState('');
  const [buyer_email, setBuyerEmail] = useState('');
  const [app_email, setAppEmail] = useState('');
  const [app_password, setAppPassword] = useState('');

  const ticketIdInputRef = useRef();
  const buyerEmailInputRef = useRef();
  const appEmailInputRef = useRef();
  const appPasswordInputRef = useRef();

  async function handleCreateAccount() {
    Keyboard.dismiss();

    try {
      setLoading(true);

      await api.post('/integration', {
        order_id,
        ticket_number,
        buyer_email,
        app_email,
        app_password,
      });

      Alert.alert(
        'Sucesso!',
        'Sua conta foi criada, agora faça login para entrar no app.',
        [
          {
            text: 'Fazer login',
            onPress: () => navigation.navigate('Login'),
          },
        ]
      );
    } catch (err) {
      console.log(err);

      const message =
        err.response && err.response.data && err.response.data.error;

      Alert.alert(
        'Ooopsss',
        message ||
          'Falha na criação de conta, verifique seus dados e tente novamente!'
      );

      setLoading(false);
    }
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
          <FormContainer keyboardShouldPersistTaps="handled">
            <Title>CRIE SUA CONTA</Title>
            <Description>
              Para criar sua conta no app você precisará de algumas informações
              que pode obter através da compra do ingresso no Sympla.
            </Description>

            <InputTitle>ID do pedido (obtido no Sympla)</InputTitle>
            <InputContainer>
              <Input
                placeholder="Digite o ID do pedido"
                autoCapitalize="characters"
                autoCorrect={false}
                onChangeText={setOrderId}
                value={order_id}
                returnKeyType="next"
                onSubmitEditing={() => ticketIdInputRef.current.focus()}
              />
              <MaterialCommunityIcons
                name="ticket-outline"
                size={20}
                color="#999"
              />
            </InputContainer>

            <InputTitle>Nº do ingresso (obtido no Sympla)</InputTitle>
            <InputContainer>
              <Input
                placeholder="Digite o Nº do ingresso"
                autoCapitalize="characters"
                autoCorrect={false}
                onChangeText={setTicketNumber}
                value={ticket_number}
                ref={ticketIdInputRef}
                returnKeyType="next"
                onSubmitEditing={() => buyerEmailInputRef.current.focus()}
              />
              <MaterialCommunityIcons
                name="ticket-outline"
                size={20}
                color="#999"
              />
            </InputContainer>

            <InputTitle>E-mail do comprador (obtido no Sympla)</InputTitle>
            <InputContainer>
              <Input
                placeholder="Digite o e-mail do comprador"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={setBuyerEmail}
                value={buyer_email}
                ref={buyerEmailInputRef}
                returnKeyType="next"
                onSubmitEditing={() => appEmailInputRef.current.focus()}
              />
              <MaterialIcons name="mail-outline" size={20} color="#999" />
            </InputContainer>

            <InputTitle>E-mail de acesso</InputTitle>
            <InputContainer>
              <Input
                placeholder="Digite seu e-mail para login"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={setAppEmail}
                value={app_email}
                ref={appEmailInputRef}
                returnKeyType="next"
                onSubmitEditing={() => appPasswordInputRef.current.focus()}
              />
              <MaterialIcons name="mail-outline" size={20} color="#999" />
            </InputContainer>

            <InputTitle>Senha de acesso</InputTitle>
            <InputContainer>
              <Input
                placeholder="Digite sua senha para login"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={setAppPassword}
                value={app_password}
                ref={appPasswordInputRef}
                returnKeyType="send"
                textContentType="oneTimeCode"
                onSubmitEditing={handleCreateAccount}
              />
              <MaterialCommunityIcons
                name="lock-outline"
                size={20}
                color="#999"
              />
            </InputContainer>

            <SubmitButton onPress={handleCreateAccount}>
              {loading ? (
                <ActivityIndicator color="#FFF" size="small" />
              ) : (
                <SubmitButtonText>CRIAR MINHA CONTA</SubmitButtonText>
              )}
            </SubmitButton>

            <ForgotPasswordButton onPress={() => navigation.navigate('Login')}>
              <ForgotPasswordButtonText>Voltar</ForgotPasswordButtonText>
            </ForgotPasswordButton>
          </FormContainer>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
