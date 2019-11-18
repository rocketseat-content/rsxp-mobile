import React from 'react';
import { useDispatch } from 'react-redux';

import api from '../../services/api';
import { acceptRegulation } from '../../store/modules/auth/actions';
import { Container, Content, Title, Regulation, ApproveButton, ApproveButtonText } from './styles';

export default function RegulationReview({ navigation }) {
  const dispatch = useDispatch();

  async function handleApproveRegulation() {
    await api.post('/accept_regulation');

    dispatch(acceptRegulation());

    navigation.navigate('AppRoutes');
  }

  return (
    <Container>
      <Content>
        <Title>Código de conduta</Title>
        <Regulation>
          O que pode ser considerado como assédio: comentários verbais ofensivos relacionados ao gênero, identidade de gênero e expressão, idade, orientação sexual, deficiência, aparência física, tamanho corporal, cor de pele, etnia, religião, escolhas de tecnologias, imagens sexuais em espaços públicos, intimidação deliberada, perseguição, stalking, fotografias ou filmagens constrangedoras, interrupção contínua das apresentações ou outros eventos, contato físico inadequado e atenção sexual indesejada.
          {"\n\n"}
          Não aceitamos tópicos ofensivos como forma de humor, nem tópicos que fujam ao escopo do grupo como, por exemplo, política. Nenhum conteúdo de cunho comercial ou de captação de dados para disponibilização de gratuidades poderá ser postado.
          {"\n\n"}
          Se alguma das pessoas participantes venha a realizar um ou mais dos comportamentos listados acima, deve interrompê-lo imediatamente assim que solicitado.
          {"\n\n"}
          Se alguma das pessoas participantes venha a realizar um ou mais dos comportamentos listados acima, deve interrompê-lo imediatamente assim que solicitado.
        </Regulation>
      </Content>

      <ApproveButton onPress={handleApproveRegulation}>
        <ApproveButtonText>ACEITO OS TERMOS ACIMA</ApproveButtonText>
      </ApproveButton>
    </Container>
  );
}
