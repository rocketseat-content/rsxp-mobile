import React from 'react';

import {
  Container,
  SessionsContainer,
  Session,
  SessionPlaceholder,
  SessionDatePlaceholder,
  WorkshopsContainer,
  WorkshopCard,
  WorkshopTitlePlaceholder,
  WorkshopDescriptionPlaceholder,
  WorkshopInstructorContainer,
  WorkshopInstructorPicturePlaceholder,
  WorkshopInstructorNamePlaceholder
} from './styles';

export default function WorkshopsPlaceholder() {
  function renderCards() {
    const cardsNumber = 5;
    let cards = [];

    for (i = 0; i < cardsNumber; i++) {
      cards.push(
        <WorkshopsContainer key={`workshop-card-placeholder-${i}`}>
          <WorkshopCard autoRun>
            <WorkshopTitlePlaceholder autoRun />
            <WorkshopDescriptionPlaceholder autoRun />
            <WorkshopInstructorContainer>
              <WorkshopInstructorPicturePlaceholder />
              <WorkshopInstructorNamePlaceholder />
            </WorkshopInstructorContainer>
          </WorkshopCard>
        </WorkshopsContainer>
      );
    }

    return cards;
  }

  return (
    <Container>
      <SessionsContainer>
        <Session>
          <SessionPlaceholder autoRun />
          <SessionDatePlaceholder autoRun />
        </Session>
        <Session>
          <SessionPlaceholder autoRun />
          <SessionDatePlaceholder autoRun />
        </Session>
        <Session>
          <SessionPlaceholder autoRun />
          <SessionDatePlaceholder autoRun />
        </Session>
      </SessionsContainer>

      {renderCards()}
    </Container>
  );
}
