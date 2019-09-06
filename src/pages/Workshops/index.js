import React from 'react';

import { SignedHeader } from '../../components';

import Placeholder from './Placeholder';

import { Container, Content, SessionPlaceholder } from './styles';

export default function Workshops() {
  const loading = true;

  return (
    <Container>
      <SignedHeader />

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
