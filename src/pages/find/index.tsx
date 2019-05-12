import * as React from 'react';
import {
  Container, Header, HeaderArrow, HeaderTitle, HeaderCard,
  CardGroup, ButtonGroup, Setting, Like, SuperLike, UnLike, Shop
} from './style';
import Detail from '../detail';
import Card from '../../components/card';
import Matching from '../../components/matching';

interface IFind {
  userIndex: number;
  users: any;
  style: any;
  updateState: (state: any) => void;
  showNextUser: () => void;
};

export default class Find extends React.Component<IFind> {
  private execAction(actionKey: string): void {
    let state = this.props;
    state.users[state.userIndex][actionKey] = true;
    this.props.updateState(state);
  }

  private createCardDOM(): any {
    let cards = [];
    for(let i = this.props.userIndex; i <= this.props.userIndex + 1; i++) {
      if (i >= this.props.users.length) {
        break;
      }

      cards.push(
          <Card
            key={i}
            isCurrent={this.props.userIndex === i}
            user={this.props.users[i]}
            updateState={this.props.updateState}
            pose={this.props.users[i].isUnLike ? 'unLike' : 'default'}
            onPoseComplete={() => this.props.showNextUser()}
          />
      )
    }

    return cards.reverse();
  }

  public render() {
    let currentUser = this.props.users[this.props.userIndex];

    return (
      <React.Fragment>
        <Matching user={currentUser} style={this.props.style} updateState={this.props.updateState} />
        <Detail userIndex={this.props.userIndex} user={currentUser} style={this.props.style} updateState={this.props.updateState} />
        <Container isMatching={currentUser.isMatching} mobileHeight={this.props.style.mobileHeight}>
          <Header>
            <HeaderArrow />
            <HeaderTitle>アウトドアが好き</HeaderTitle>
            <HeaderCard>
              <span></span>
              <p>255</p>
            </HeaderCard>
          </Header>
          <CardGroup>{this.createCardDOM()}</CardGroup>
          <ButtonGroup>
            <Setting />
            <Like onClick={() => this.execAction('isMatching')} />
            <SuperLike />
            <UnLike onClick={() => this.execAction('isUnLike')} />
            <Shop />
          </ButtonGroup>
        </Container>
      </React.Fragment>
    )
  }
}
