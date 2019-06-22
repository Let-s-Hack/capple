import * as React from 'react';
import {
  Container, MatchingResult, ImageGroup, MyImage, Title,
  PartnerImageList, PartnerImage, MatchingIcon, Text, ParticleOuter, Particle,
  ButtonGroup, MessageButton, CloseButton,
} from './style';

interface IMatching {
  user: any;
  style: any;
  updateState: (state: any) => void;
};

export default class Matching extends React.Component<IMatching> {
  changeImage(index: number): void {
    let state: any = this.props;
    state.user.thumbnails[state.user.prevIndex].isActive = false;
    state.user.thumbnails[index].isActive = true;
    state.user.mainImage = state.user.thumbnails[index].image;
    state.user.prevIndex = index;

    this.props.updateState(state);
  }

  public render() {
    const particles = [
      {
        type: 'square',
        amount: 3,
        dist: {
          min: 140,
          max: 160,
        },
      },
      {
        type: 'triangle',
        amount: 3,
        dist: {
          min: 170,
          max: 190,
        },
      },
      {
        type: 'circle',
        amount: 9,
        dist: {
          min: 150,
          max: 200,
        },
      },
      {
        type: 'ring',
        amount: 5,
        dist: {
          min: 150,
          max: 170,
        },
      },
    ];

    let particleId = 0;

    return (
      <Container pose={this.props.user.isMatching ? 'visible' : 'hidden'}>
        <MatchingResult>
          <Title />
          <ImageGroup>
            <MyImage
              src={this.props.user.mainImage}
              alt="プロフィール画像"
            />
            <MatchingIcon />
            <PartnerImageList>
              <PartnerImage src={this.props.user.thumbnails[0].image} alt="プロフィール画像" />
            </PartnerImageList>
          </ImageGroup>
          <Text>おめでとうございます！<br/> 1人とマッチングしました！</Text>
          <ParticleOuter>
            {particles.map((particle, index) => {
              const particles = [];
              for (let i = 0; i < particle.amount; i++) {
                particles.push(<Particle type={particle.type} amount={particle.amount} index={index} i={i} dist={particle.dist} key={particleId} />);
                particleId++;
              }
              return particles;
            })}
          </ParticleOuter>
        </MatchingResult>
        <ButtonGroup>
          <MessageButton>メッセージする</MessageButton>
          <CloseButton onClick={() => {
            let state = this.props;
            state.user.isMatching = false;
            this.props.updateState(state);
          }}>
            とじる
          </CloseButton>
        </ButtonGroup>
      </Container>
    );
  }
}
