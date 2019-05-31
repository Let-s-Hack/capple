import * as React from 'react';
import {
  Container, Header, HeaderArrow, HeaderTitle, HeaderCard,
  CardGroup, CardOuter, CardInner, CardLikeInner, LikeIcon, LikeText, CardUnLikeInner, UnLikeIcon, UnLikeText,
  ButtonGroup, Setting, Like, SuperLike, UnLike, Shop
} from './style';
import Detail from '../detail';
import Card from '../../components/card';
import Matching from '../../components/matching';
// import posed from 'react-pose';
// import styled from 'styled-components';
// import { transform, value } from 'popmotion';
// const { pipe, interpolate, clamp, blendColor } = transform;
import { value } from 'popmotion';

interface IFind {
  userIndex: number;
  users: any;
  style: any;
  updateState: (state: any) => void;
  showNextUser: () => void;
};

interface IState {
  refs: any,
}

export default class Find extends React.Component<IFind, IState> {
  public state: IState = {
    refs: []
  };

  private execAction(actionKey: string): void {
    let state = this.props;
    state.users[state.userIndex][actionKey] = true;
    this.state.refs[state.userIndex].hiddenNew();
    this.props.updateState(state);
  };

  // private swipeCard(x: number): void {
  //   if (x < 50 || 300 < x ) {
  //     this.props.showNextUser();
  //   }
  // }

  private createCardDOM(): any {
    let cards = [];
    for(let i = this.props.userIndex; i <= this.props.userIndex + 1; i++) {
      if (i >= this.props.users.length) {
        break;
      }
      const v = { x: this.x };

      cards.push(
        <CardOuter
          key={i}
          pose={
            this.props.users[i].isLike ? 'like' :
            this.props.users[i].isUnLike ? 'unLike' :
            'default'
          }
          onPoseComplete={() => this.props.showNextUser()}
        >
          <CardInner
            // onDragEnd={(e: any, gestureState: any) => {
              // this.swipeCard(e.changedTouches[0].pageX);
              // console.log(e.changedTouches[0].pageX);
            //   console.log(gestureState);
            // }}
            onDragEnd={this.onDragEnd}
            values={v}
          >
            <CardLikeInner>
              <LikeIcon />
              <LikeText>いいかも！</LikeText>
            </CardLikeInner>
            <CardUnLikeInner>
              <UnLikeIcon />
              <UnLikeText>イマイチ<span>...</span></UnLikeText>
            </CardUnLikeInner>
            <Card
              isCurrent={this.props.userIndex === i}
              user={this.props.users[i]}
              updateState={this.props.updateState}
              onRef={(ref: any) => this.state.refs[i] = ref}
            />
          </CardInner>
        </CardOuter>
      )
    }

    return cards.reverse();
  }

  triggerDistance = 100;
  x = value(0);

  onDragEnd = () => {
    const x = this.x.get();

    if (x <= -this.triggerDistance) {
      setTimeout(() => {
        this.props.showNextUser();
        console.log("swiped");
      }, 280);
    }
  };

  public render() {
    // const PoseSwipeable = posed.div({
    //   draggable: 'x',
    //   dragBounds: {
    //     right: 0
    //   },
    //   dragEnd: {
    //     transition: ({ from, to, velocity }: any) => {
    //       if (from <= -this.triggerDistance) {
    //         return {
    //           type: 'tween',
    //           ease: 'linear',
    //           from,
    //           to: -window.innerWidth,
    //           duration: 280
    //         };
    //       }
    //       console.log(from);
    //       console.log(to);
    //       console.log(velocity);
    //       return {
    //         type: 'spring',
    //         from,
    //         to,
    //         velocity,
    //         stiffness: 750,
    //         damping: 50
    //       };
    //     }
    //   }
    // });

    // const Swipeable = styled(PoseSwipeable)`
    //   width: 100%;
    //   height: 40px;
    //   background: red;
    //   z-index: 1000;
    //   position: relative;
    // `;

    // const PosedSwipeableForeground = posed.div({
    //   passive: {
    //     backgroundColor: [
    //       'x',
    //       pipe(
    //         interpolate([0, -this.triggerDistance], [0, 1]),
    //         clamp(0, 1),
    //         blendColor('#ccc', '#4d11da')
    //       ),
    //       true
    //     ]
    //   }
    // });

    // const SwipeableForeground = styled(PosedSwipeableForeground)`
    //   width: 100%;
    //   height: 40px;
    //   z-index: 1000;
    //   position: relative;
    // `;

    let currentUser = this.props.users[this.props.userIndex];

    return (
      <React.Fragment>
        {/* <SwipeableForeground parentValues={v} />
        <Swipeable onDragEnd={this.onDragEnd} values={v} /> */}
        <Matching
          user={currentUser}
          style={this.props.style}
          updateState={this.props.updateState}
        />
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
