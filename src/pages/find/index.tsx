import * as React from 'react';
import {
  Container, Header, HeaderArrow, HeaderTitle, HeaderCard,
  ButtonGroup, Setting, Like, SuperLike, UnLike, Shop
} from './style';
import Detail from '../detail';
import Card from '../../components/card';
import Matching from '../../components/matching';

interface IFind {
  userIndex: number;
  users: any;
  style: any;
  updateState: (state: any) => void;
};

export default class Find extends React.Component<IFind> {
  private animateMatching(): void {
    let state = this.props;
    state.users[state.userIndex].isMatching = true;
    this.props.updateState(state);
  }

  private animateUnlike(): void {
    let state = this.props;
    state.users[state.userIndex].isUnLike = true;
    this.props.updateState(state);
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
          <Card
            user={currentUser}
            updateState={this.props.updateState}
            pose={currentUser.isUnLike ? 'unLike' : 'default'}
            onPoseComplete={() => console.log('test')}
          />
          <ButtonGroup>
            <Setting />
            <Like onClick={() => this.animateMatching()} />
            <SuperLike />
            <UnLike onClick={() => this.animateUnlike()} />
            <Shop />
          </ButtonGroup>
        </Container>
      </React.Fragment>
    )
  }
}
