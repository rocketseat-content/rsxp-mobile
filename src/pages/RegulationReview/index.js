import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, ActivityIndicator } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import Anchor from '../../components/Anchor';

import api from '../../services/api';
import {
  acceptRegulation,
  signOutRequest,
} from '../../store/modules/auth/actions';

import {
  Container,
  Content,
  Title,
  Subtitle,
  ConductCodeImage,
  Tabs,
  RegulationImage,
  Regulation,
  ApproveButton,
  ApproveButtonText,
  LogoutButton,
  LogoutButtonText,
} from './styles';

function ConductCode() {
  return (
    <Content>
      <Title>Código de conduta</Title>
      <ConductCodeImage />
      <Regulation>
        O que pode ser considerado como assédio: comentários verbais ofensivos
        relacionados ao gênero, identidade de gênero e expressão, idade,
        orientação sexual, deficiência, aparência física, tamanho corporal, cor
        de pele, etnia, religião, escolhas de tecnologias, imagens sexuais em
        espaços públicos, intimidação deliberada, perseguição, stalking,
        fotografias ou filmagens constrangedoras, interrupção contínua das
        apresentações ou outros eventos, contato físico inadequado e atenção
        sexual indesejada.
        {'\n\n'}
        Não aceitamos tópicos ofensivos como forma de humor, nem tópicos que
        fujam ao escopo do grupo como, por exemplo, política. Nenhum conteúdo de
        cunho comercial ou de captação de dados para disponibilização de
        gratuidades poderá ser postado.
        {'\n\n'}
        Se alguma das pessoas participantes venha a realizar um ou mais dos
        comportamentos listados acima, deve interrompê-lo imediatamente assim
        que solicitado.
        {'\n\n'}
        Caso alguém se envolva em algum episódio de perseguição, assédio ou
        discriminação, cabe aos organizadores tomar todas as medidas necessárias
        para solucionar o problema de acordo com o critério que aderirem. Tais
        medidas vão desde uma advertência verbal, até expulsão da pessoa
        participante que infringir as regras.
        {'\n\n'}
        Caso você sofra de perseguição, assédio ou discriminação, testemunhe
        alguém sendo vítima em alguma dessas situações ou tenha alguma dúvida
        geral, entre em contato com um membro da equipe do evento imediatamente.
        Membros da equipe do evento poderão ser identificados por suas camisetas
        e crachás sinalizados como “staff”.
        {'\n\n'}
        Nessas ocasiões, lembre-se de não tomar nenhuma atitudes por conta
        própria e denuncie a situação de forma discreta, assim poderemos manter
        a segurança, a ordem, e o sigilo.
        {'\n\n'}A equipe do evento estará disposta a auxiliar as pessoas
        participantes a contatarem a segurança do local, assim como as devidas
        aplicações da lei local, fornecer escoltas ou ajudar aqueles que
        sofrerem assédio para que se sintam seguros durante todo o evento. Nós
        valorizamos a sua participação e queremos que aproveite o máximo
        possível. Faremos o possível para que você se sinta à vontade, em
        segurança e, acima de tudo, respeitado.
        {'\n\n'}
        Esperamos que os participantes sigam estas regras nas salas de
        apresentação, além de eventos sociais relacionados, como after-parties,
        happy-hours e/ou jantares.
        {'\n\n\n'}
        Crédito e fonte original:
        <Anchor>http://confcodeofconduct.com/</Anchor> &{' '}
        <Anchor href="https://geekfeminism.wikia.org/wiki/Conference_anti-harassment/Policy">
          THE ADA INITIATIVE
        </Anchor>
        {'\n\n'}
        Por favor, ajude a traduzir ou a melhorar:{' '}
        <Anchor>http://github.com/leftlogic/confcodeofconduct.com</Anchor>
        {'\n\n'}
        Esta obra está licenciada sob{' '}
        <Anchor href="http://creativecommons.org/licenses/by/3.0/deed.en_US">
          CREATIVE COMMONS ATTRIBUTION 3.0 UNPORTED LICENSE
        </Anchor>
      </Regulation>
    </Content>
  );
}

function HackathonRegulation() {
  return (
    <Content>
      <Title>Regulamento do Hackathon</Title>
      <RegulationImage />
      <Regulation>
        Este regulamento contém as informações básicas e regras aplicáveis ao
        Hackathon realizado na Rocketseat Experience e colocamos a disposição
        dos participantes para entendimento e direcionamento de toda realização
        do evento. Portanto, os participantes, no ato da inscrição aderem
        integralmente a todas as suas disposições, declarando que aceitam todos
        os termos deste regulamento.
      </Regulation>
      <Subtitle>1. DO OBJETIVO E DO DESAFIO</Subtitle>
      <Regulation>
        1.1. A 1ª edição da Rocketseat Experience tem como objetivo ser um
        evento referência no cenário da programação e fornecer oportunidades de
        aprendizado na prática à comunidade, além de servir como suporte e
        tutoria para quem deseja ampliar conexões no mercado de trabalho.
        {'\n\n'}
        1.2. O desafio e a mecânica do Hackathon serão divulgados no início do
        evento, no ato de formação das equipes participantes.
      </Regulation>
      <Subtitle>2. DAS DATAS E DO LOCAL</Subtitle>
      <Regulation>
        2.1. A Rocketseat Experience acontecerá nos dias 25, 26 e 27 de novembro
        (segunda, terça e quarta), das 8h às 19h nos respectivos dias.
        {'\n\n'}
        2.2. O evento será realizado na São Paulo Expo, localizada na Rodovia
        dos Imigrantes, quilômetro 1,5, em São Paulo.
      </Regulation>
      <Subtitle>3. DAS INSCRIÇÕES</Subtitle>
      <Regulation>
        3.1. Podem participar do Hackathon pessoas físicas com idade igual ou
        superior a 18 (dezoito) anos, desde que aceitem os termos deste referido
        documento e tenham ingresso da Rocketseat Experience em seu nome.
        Menores de 18 anos também podem comparecer no evento e participar das
        atividades, desde que acompanhados de um adulto responsável e com
        autorização escrita.
        {'\n\n'}
        3.2. É permitida somente 01 (uma) inscrição por CPF (pessoa física).
        {'\n\n'}
        3.3. A confirmação dos participantes no Hackathon será feita
        presencialmente, no primeiro dia do evento, no ato de formação de
        equipes para a atividade.
      </Regulation>
      <Subtitle>4. DA PARTICIPAÇÃO/INSCRIÇÃO</Subtitle>
      <Regulation>
        4.1. A participação nas atividades da Rocketseat Experience é
        voluntária, nominativa e intransferível.
        {'\n\n'}
        4.2. A pessoa participante que não estiver presente no local do
        credenciamento até às 8h dos dias 25, 26 e 27 de novembro poderá ser
        desclassificada.
        {'\n\n'}
        4.3. As pessoas participantes competirão no Hackathon em equipes
        formadas por 05 (cinco) a 06 (seis) integrantes, devendo sempre ser
        observado o tema macro desta edição.
        {'\n\n'}
        4.4. No que se refere à formação das equipes:
        {'\n\n'}
        a) Somente poderão ter menos de 05 (cinco) integrantes, se aprovado pela
        Comissão Organizadora; ou
        {'\n'}
        b) A Comissão Organizadora será responsável por organizar e liderar o
        processo de formação de equipes incompletas e da inclusão de
        participantes ainda sem equipe.
        {'\n\n'}
        4.4.1. Caberá à Comissão Organizadora aprovar qualquer formação de
        equipe diferente daquela descrita nos itens 4.3 e 4.4.
        {'\n\n'}
        4.5. Caberá a pessoa participante levar consigo o próprio
        laptop/notebook para utilização durante todo o evento. O espaço
        disponibilizará rede Wi-Fi 5.0 para uso livre dos participantes.
        {'\n\n'}
        4.6. A pessoa participante deverá manter visível o crachá fornecido no
        ato do credenciamento durante todo o período e espaços do evento.
      </Regulation>
      <Subtitle>5. DA PROGRAMAÇÃO</Subtitle>
      <Regulation>
        5.1. A programação da Rocketseat Experience compreende sessões e
        atividades de mentorias, oficinas e avaliações para a seleção das
        melhores soluções desenvolvidas. Mais informações no aplicativo do
        evento ou no site rocketseat.com.br/experience
      </Regulation>
      <Subtitle>6. DOS CRITÉRIOS DE AVALIAÇÃO</Subtitle>
      <Regulation>
        6.1. No dia 27 de novembro de 2019, no horário que constar na
        programação do evento, as equipes participarão da banca avaliadora. Esta
        banca será convidada pela Comissão Organizadora e fará as análises e
        avaliações para validar a melhor solução do desafio.
        {'\n\n'}
        6.1.1. Para referida análise, serão considerados os seguintes pontos:
        {'\n\n'}
        a) criatividade e disrupção da solução;
        {'\n'}
        b) aplicabilidade do sistema para solucionar os problemas atinentes ao
        tema;
        {'\n'}
        c) modelo de negócio da solução/monetização;
        {'\n'}
        d) qualidade e avanço no desenvolvimento do protótipo conceitual;
        {'\n'}
        e) viabilidade de execução real da solução desenvolvida.
      </Regulation>
      <Subtitle>7. DA PREMIAÇÃO</Subtitle>
      <Regulation>
        7.1. No dia 27 de novembro de 2019, no encerramento da Rocketseat
        Experience, de acordo com a programação e no mesmo local do evento, será
        realizada a cerimônia de premiação.
        {'\n\n'}
        7.2. O prêmio definitivo para a equipe vencedora será divulgado durante
        o evento.
        {'\n\n'}
        7.3. É vedada a apuração por meio eletrônico;
      </Regulation>
      <Subtitle>8. DO JULGAMENTO</Subtitle>
      <Regulation>
        8.1. Como padrão de ética e de forma a garantir a imparcialidade, as
        pessoas integrantes que farão parte das bancas julgadoras comprometem-se
        a informar à Comissão Organizadora qualquer conflito de interesse na
        avaliação da solução desenvolvida, assim que for identificado.
      </Regulation>
      <Subtitle>9. DA COMUNICAÇÃO</Subtitle>
      <Regulation>
        9.1. Em todas as etapas da Rocketseat Experience a Comissão Organizadora
        se comunicará com os participantes inscritos por contato telefônico e,
        preferencialmente, por meios eletrônicos: e-mail e site.
        {'\n\n'}
        9.2. Os participantes inscritos são responsáveis por acompanharem a
        programação, os resultados e eventuais alterações do evento.
      </Regulation>
      <Subtitle>10. DAS CONSIDERAÇÕES FINAIS</Subtitle>
      <Regulation>
        10.1. A Rocketseat Experience será coordenada por uma Comissão
        Organizadora que irá designar e convidar pessoas mentoras e pessoas
        avaliadoras que farão parte das bancas julgadoras.
        {'\n\n'}
        10.2. Os participantes também autorizam a utilização de todos os dados
        fornecidos no momento da inscrição, apenas para fins não comerciais,
        pela Rocketseat Experience.
        {'\n\n'}
        10.3. As pessoas participantes se responsabilizam pela originalidade de
        todo conteúdo por eles produzidos no âmbito do presente Regulamento,
        respondendo integral e exclusivamente por eventuais danos ou ônus a
        terceiros, excluindo e indenizando o Rocketseat Experience em caso de
        demanda judicial ou extrajudicial intentada por terceiros, sob qualquer
        alegação relacionada à violação de direitos de propriedade intelectual,
        industrial, patentes, imagem, voz e nome.
        {'\n\n'}
        10.4. Ao acessar o evento você autoriza o uso da sua imagem e voz pela
        Rocketseat em campanhas de divulgação, anúncios e etc.
        {'\n\n'}
        10.5. Suspeitas de conduta antiética, do não cumprimento deste
        Regulamento, das normas internas dos espaços nos quais ocorrerá o
        evento, serão analisadas e julgadas pela Comissão Organizadora, podendo
        ainda resultar na desclassificação do respectivo participante.
        {'\n\n'}
        10.6. Não serão aceitas nenhuma atitude racista, machista, homofóbica
        e/ou preconceituosa de qualquer gênero. Se identificada a situação será
        analisada pela Organização, podendo ocasionar na desclassificação do
        participantes.
        {'\n\n'}
        10.7. Não serão aceitas soluções copiadas ou reproduzidas, de forma
        total ou parcial, de outras fontes e/ou competições. A identificação de
        uma cópia, total ou parcial, será punida com a desclassificação do
        respectivo participante.
        {'\n\n'}
        10.8. Os participantes arcarão com as despesas referentes a transporte,
        alimentação, hospedagem, material de consumo e quaisquer outras
        necessárias para a participação no evento.
        {'\n\n'}
        10.9. A Rocketseat Experience não se responsabilizará por perdas,
        furtos, roubos, extravios ou danos de objetos pessoais dos participantes
        (como, a título exemplificativo, notebook, tablet ou celular), durante
        os dias do evento. Cabe exclusivamente às pessoas participantes o dever
        de guarda e cuidado com tais pertences. Caso a pessoa participante se
        ausente do local do evento, ainda que por pouco tempo, deve levar
        consigo seus pertences e equipamentos.
        {'\n\n'}
        10.10. Todos participantes se comprometem a zelar e cuidar de todo o
        espaço no qual será realizado o evento, bem como dos equipamentos e
        materiais disponibilizados. Caso algo seja danificado, identificado o
        responsável, será cobrada o valor para que aquele item seja consertado.
        {'\n\n'}
        10.11. As decisões das pessoas integrantes das bancas julgadoras no que
        tange à seleção e à premiação das equipes participantes, além das
        decisões que a Comissão Organizadora venha a dirimir, serão soberanas e
        irrecorríveis, não sendo cabível qualquer contestação das mesmas, bem
        como dos seus resultados.
        {'\n\n'}
        10.12. A Rocketseat Experience tem finalidade exclusivamente cultural,
        visando reconhecer e divulgar as soluções desenvolvidas que tenham
        potencial inovador, estimulando a difusão do tema no meio empresarial,
        não possuindo caráter comercial, não estando condicionada, em hipótese
        alguma à sorte, nem objetivando resultados financeiros, e não implica em
        qualquer ônus de qualquer natureza para as pessoas participantes
        inscritas e para as pessoas premiadas ao final do concurso, além de não
        vincular a participação à aquisição, uso e/ou compra de produtos ou de
        serviços da entidade organizadora ou dos parceiros.
        {'\n\n'}
        10.13. A Rocketseat Experience a seu exclusivo critério, poderá, a
        qualquer tempo, se julgar necessário, alterar as regras deste
        Regulamento, assim como substituir qualquer um dos prêmios por outros de
        igual valor, mediante comunicação no site do evento.
        {'\n\n'}
        10.14. O evento poderá ser interrompido ou suspenso por motivos de força
        maior ou devido a problemas de acesso à rede de Internet, com
        servidores, entre outros, não sendo devida qualquer indenização ou
        compensação às pessoas participantes do concurso e/ou aos eventuais
        terceiros. A Rocketseat Experience envidará, nesses casos, os melhores
        esforços para dar prosseguimento ao evento tão logo haja a regularização
        do problema, resguardando-se, no entanto, a possibilidade de
        cancelamento definitivo, na hipótese de impossibilidade de sua
        realização.
        {'\n\n'}
        10.15. Os casos omissos não previstos neste Regulamento serão julgados
        pela Comissão Organizadora.
        {'\n\n'}
        10.16. As pessoas participantes detêm todos os direitos de propriedade
        intelectual assegurados pela legislação brasileira que recaiam sobre o
        código fonte desenvolvido para o desafio.
        {'\n\n'}
        10.17. Os candidatos/participantes, no ato de seu cadastro e inscrição,
        aderem integralmente a todas as disposições aqui descritas, declarando
        que aceitam todos os termos deste regulamento.
      </Regulation>
    </Content>
  );
}

export default function RegulationReview({ navigation }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [navigationIndex, setNavigationIndex] = useState(0);
  const [navigationRoutes] = useState([
    { key: 'conduct-code', title: 'Código de conduta' },
    { key: 'hackaton-regulation', title: 'Regulamento Hackathon' },
  ]);

  async function handleApproveRegulation() {
    setLoading(true);

    try {
      await api.post('/accept_regulation');

      dispatch(acceptRegulation());

      navigation.navigate('AppRoutes');
    } catch (err) {
      Alert.alert(
        'Ooopps...',
        'Falha ao aceitar termos, tente novamente mais tarde!'
      );
      setLoading(false);
    }
  }

  function handleLogout() {
    dispatch(signOutRequest());
  }

  return (
    <Container>
      <TabView
        renderTabBar={props => <Tabs {...props} />}
        navigationState={{ index: navigationIndex, routes: navigationRoutes }}
        renderScene={SceneMap({
          'conduct-code': ConductCode,
          'hackaton-regulation': HackathonRegulation,
        })}
        onIndexChange={setNavigationIndex}
        // initialLayout={{ width: Dimensions.get('window').width }}
      />

      <ApproveButton onPress={handleApproveRegulation}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <ApproveButtonText>ACEITO OS TERMOS ACIMA</ApproveButtonText>
        )}
      </ApproveButton>

      <LogoutButton onPress={handleLogout}>
        <LogoutButtonText>SAIR</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
}
