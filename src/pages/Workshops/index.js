import React from 'react';

import { WorkshopsHeader } from '../../components';

import Placeholder from './Placeholder';

import { Container, Content, SessionPlaceholder } from './styles';

export default function Workshops() {
  const loading = true;

  return (
    <Container>
      <WorkshopsHeader />

      {loading ? (
        <Content>
          <Placeholder />
        </Content>
      ) : (
        <Content>
          <SessionPlaceholder autoRun />
        </Content>
      )}
    </Container>
  );
}
