import * as React from 'react';
import {
  Container, MatchingResult, ImageGroup, MyImage, Title, PartnerImageList, PartnerImage, MatchingIcon, Text,
  ButtonGroup, MessageButton, CloseButton
} from './style';

interface IMatching {
  user: any;
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
    return (
      <Container pose={this.props.user.isMatching ? 'visible' : 'hidden'}>
        <MatchingResult>
          <Title>アップル誕生</Title>
          <ImageGroup>
            <MyImage
              src={this.props.user.mainImage}
              alt="プロフィール画像"
              pose={this.props.user.isMatching ? 'visible' : 'hidden'}
            />
            <MatchingIcon pose={this.props.user.isMatching ? 'visible' : 'hidden'} />
            <PartnerImageList>
              <PartnerImage src={this.props.user.thumbnails[0].image} alt="プロフィール画像" />
            </PartnerImageList>
          </ImageGroup>
          <Text>おめでとうございます！<br/> 1人とマッチングしました！</Text>
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
