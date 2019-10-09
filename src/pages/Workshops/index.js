import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { lighten } from 'polished';

import { getWorkshopsRequest } from '../../store/modules/workshop/actions';

import Placeholder from './Placeholder';

import { WorkshopsHeader } from '../../components';

import {
  Container,
  Content,
  SessionsContainer,
  Session,
  SessionTitle,
  SessionDate,
  WorkshopsContainer,
  WorkshopCards,
  WorkshopCard,
  WorkshopTitle,
  WorkshopInstructorContainer,
  WorkshopInstructorPicture,
  WorkshopInstructorName
} from './styles';

export default function Workshops({ navigation }) {
  const { loadingWorkshops, workshops } = useSelector(state => state.workshop);

  const dispatch = useDispatch();

  function loadWorkshops() {
    dispatch(getWorkshopsRequest());
  }

  useEffect(() => {
    loadWorkshops();
  }, []);

  function renderWorkshops({ item: workshop }) {
    return (
      <WorkshopsContainer
        onPress={() => navigation.navigate('WorkshopDetails', { workshop })}
      >
        <WorkshopCard
          colors={
            (workshop.color && [
              workshop.color,
              lighten(0.2, workshop.color)
            ]) || ['#7159c1', '#c759e0']
          }
        >
          <WorkshopTitle numberOfLines={2}>{workshop.title}</WorkshopTitle>
          <WorkshopInstructorContainer>
            <WorkshopInstructorPicture
              source={{
                uri: workshop.user.avatar_url
              }}
            />
            <WorkshopInstructorName>
              {workshop.user.name}
            </WorkshopInstructorName>
          </WorkshopInstructorContainer>
        </WorkshopCard>
      </WorkshopsContainer>
    );
  }

  return (
    <Container>
      <WorkshopsHeader />
      <Content>
        {loadingWorkshops ? (
          <Placeholder />
        ) : (
          <>
            <SessionsContainer>
              <Session>
                <SessionTitle isSelected>SESSÃO 1</SessionTitle>
                <SessionDate isSelected>13:30h</SessionDate>
              </Session>
              {/* <Session>
                <SessionTitle isSelected>SESSÃO 2</SessionTitle>
                <SessionDate isSelected>15:00h</SessionDate>
              </Session>
              <Session>
                <SessionTitle>SESSÃO 3</SessionTitle>
                <SessionDate>16:30h</SessionDate>
              </Session> */}
            </SessionsContainer>
            <WorkshopCards
              data={workshops}
              renderItem={renderWorkshops}
              keyExtractor={workshop => `workshop-card-${workshop.id}`}
              onRefresh={loadWorkshops}
              refreshing={false}
              ListFooterComponent={<View style={{ height: 20 }}></View>}
            />
          </>
        )}
      </Content>
    </Container>
  );
}
