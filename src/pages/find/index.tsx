import * as React from 'react';
import {
  Container, Header, HeaderArrow, HeaderCard, HeaderTitle,
  ButtonGroup, Like, SuperLike, UnLike, Setting, Shop
} from './style';
import Card from '../../components/card';

import userImage01 from 'images/users/user-image04.jpg';
import userImage02 from 'images/users/user-image01.jpg';
import userImage03 from 'images/users/user-image03.jpg';

export default class Find extends React.Component {
  public state: any = {
    user: {
      name: "ごりら",
      age: 23,
      place: "神奈川",
      mainImage: userImage01,
      prevIndex: 0,
      appealText: '美容関係の仕事をしています',
      thumbnails: [
        { image: userImage01, isActive: true },
        { image: userImage02, isActive: false },
        { image: userImage03, isActive: false }
      ]
    }
  };

  updateState(state: any): void {
    this.setState(state);
  }

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
            user={this.state.user}
            updateState={this.updateState.bind(this)}
          />
          <ButtonGroup>
            <Setting />
            <Like />
            <SuperLike />
            <UnLike />
            <Shop />
          </ButtonGroup>
        </Container>
      </React.Fragment>
    )
  }
}
