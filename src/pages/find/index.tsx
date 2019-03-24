import * as React from 'react';
import {
  Container, Header, HeaderArrow, HeaderCard, HeaderTitle,
  ButtonGroup, Like, SuperLike, UnLike, Setting, Shop
} from './style';
import Card from '../../components/card';
// import { string } from 'prop-types';

export default class Find extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Header>
            <HeaderArrow />
            <HeaderTitle>アウトドアが好き</HeaderTitle>
            <HeaderCard>
              <span></span>
              <p>255</p>
            </HeaderCard>
          </Header>
          <Card
            userName="ごりら"
            userAge={23}
            userPlace="神奈川"
          />
          <ButtonGroup>
            <Setting></Setting>
            <Like></Like>
            <SuperLike></SuperLike>
            <UnLike></UnLike>
            <Shop></Shop>
          </ButtonGroup>
        </Container>
      </React.Fragment>
    )
  }
}

