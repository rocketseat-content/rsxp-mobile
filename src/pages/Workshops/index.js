import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { lighten } from 'polished';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigationFocus } from 'react-navigation';

import api from '../../services/api';

import Placeholder from './Placeholder';

import { WorkshopsHeader } from '../../components';

import {
  Container,
  Content,
  SessionsContainer,
  Session,
  SessionTitle,
  SessionDate,
  SubscriptionStatus,
  TechColor,
  WorkshopInfo,
  WorkshopCards,
  Empty,
  WorkshopCard,
  WorkshopTitle,
  WorkshopInstructorContainer,
  WorkshopInstructorPicture,
  WorkshopInstructorName,
  WorkshopStatus,
} from './styles';

function Workshops({ navigation, isFocused }) {
  const [sections] = useState([
    { id: 1, title: 'SESSÃO 1', time: '13:30h' },
    { id: 2, title: 'SESSÃO 2', time: '15:30h' },
    { id: 3, title: 'SESSÃO 3', time: '16:30h' },
  ]);

  const [firstLoad, setFirstLoad] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function reloadWorkshops() {
    try {
      setRefreshing(true);

      const response = await api.get('/workshops', {
        params: {
          section: currentSection,
        },
      });

      setWorkshops(response.data);
    } catch (err) {
      Alert.alert(
        'Erro ao obter lista de workshops, tente novamente mais tarde!'
      );
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    if (isFocused && firstLoad) {
      reloadWorkshops();
    }
  }, [firstLoad, isFocused]);

  useEffect(() => {
    setLoading(true);

    reloadWorkshops().then(() => {
      setLoading(false);
      setFirstLoad(true);
    });
  }, [currentSection]);

  function renderWorkshops({ item: workshop }) {
    const isSubcribed = !!Number(workshop.__meta__.hasSubscribed);
    const isFull = Number(workshop.__meta__.subscriptions_count) >= 48;

    return (
      <WorkshopCard
        onPress={() => navigation.navigate('WorkshopDetails', { workshop })}
      >
        <TechColor
          colors={
            (workshop.color && [
              workshop.color,
              lighten(0.2, workshop.color),
            ]) || ['#7159c1', '#c759e0']
          }
        />

        <WorkshopInfo>
          <WorkshopTitle numberOfLines={2}>{workshop.title}</WorkshopTitle>
          <WorkshopInstructorContainer>
            <WorkshopInstructorPicture uri={workshop.user.avatar_url} />
            <WorkshopInstructorName>
              {workshop.user.name}
            </WorkshopInstructorName>

            {isSubcribed && <WorkshopStatus>INSCRITO</WorkshopStatus>}
            {!isSubcribed && isFull && (
              <WorkshopStatus full>ESGOTADO</WorkshopStatus>
            )}
          </WorkshopInstructorContainer>
        </WorkshopInfo>
      </WorkshopCard>
    );
  }

  return (
    <Container>
      <WorkshopsHeader />
      <Content>
        <SessionsContainer>
          {sections.map(session => (
            <Session
              key={String(session.id)}
              onPress={() => setCurrentSection(session.id)}
            >
              <SessionTitle isSelected={session.id === currentSection}>
                {session.title}
              </SessionTitle>
              <SessionDate isSelected={session.id === currentSection}>
                {session.time}
              </SessionDate>
            </Session>
          ))}
        </SessionsContainer>
        <SubscriptionStatus>
          Você pode se inscrever em um workshop por seção.
        </SubscriptionStatus>
        {loading ? (
          <Placeholder />
        ) : (
          <WorkshopCards
            data={workshops}
            renderItem={renderWorkshops}
            keyExtractor={workshop => `workshop-card-${workshop.id}`}
            showsVerticalScrollIndicator={false}
            onRefresh={reloadWorkshops}
            refreshing={refreshing}
            ListFooterComponent={<View style={{ height: 20 }} />}
            ListEmptyComponent={<Empty>Nenhum workshop nessa data.</Empty>}
          />
        )}
      </Content>
    </Container>
  );
}

Workshops.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <MaterialIcons name="code" size={24} color={tintColor} />
  ),
};

export default withNavigationFocus(Workshops);
