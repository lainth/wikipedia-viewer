import React from 'react';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RandomWiki from './components/random';

const StyledRow = styled(Row) `
  height: 100vh !important;
  align-items: center !important; 
  justify-content: center !important;
`;


export default class App extends React.Component {
  render () {
    return (
      <Container>
        <StyledRow>
          <Col>
            <RandomWiki />
          </Col>
        </StyledRow>
      </Container>
      );
  }
}

