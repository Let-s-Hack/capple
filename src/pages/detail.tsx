import * as React from 'react';
import styled from 'styled-components';

export default class Detail extends React.Component {
  public render() {
    return (
        <Container>
          あいうえお
        </Container>
    );
  }
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 10;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;