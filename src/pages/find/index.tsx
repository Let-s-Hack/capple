import * as React from 'react';
import {
  Container, Header, HeaderArrow, HeaderTitle, HeaderCard,
  Card, New, Image, Inner, Profile, Title, Text, Thumbnail, ThumbnailList,
  Apeal, ButtonGroup, Setting, Like, SuperLike, UnLike, Shop
} from './style';
import Detail from '../detail';
import Matching from '../../components/matching';

interface IFind {
  user: any;
  updateState: (state: any) => void;
};

export default class Find extends React.Component<IFind> {
  changeImage(index: number): void {
    let state: any = this.props;
    state.user.thumbnails[state.user.prevIndex].isActive = false;
    state.user.thumbnails[index].isActive = true;
    state.user.mainImage = state.user.thumbnails[index].image;
    state.user.prevIndex = index;

    this.props.updateState(state);
  }

  render() {
    return (
      <React.Fragment>
        <Matching user={this.props.user} updateState={this.props.updateState.bind(this)} />
        <Detail user={this.props.user} updateState={this.props.updateState.bind(this)} />
        <Container>
          <Header>
            <HeaderArrow />
            <HeaderTitle>アウトドアが好き</HeaderTitle>
            <HeaderCard>
              <span></span>
              <p>255</p>
            </HeaderCard>
          </Header>
          <Card onClick={() => {
            let state = this.props;
            state.user.isDetail = true;
            this.props.updateState(state);
          }}>
            <New />
            <Image src={this.props.user.mainImage} alt="プロフィール画像"/>
            <Inner>
              <Profile>
                <Title>{this.props.user.name}</Title>
                <Text>{this.props.user.age}歳・{this.props.user.place}</Text>
              </Profile>
              <ThumbnailList>
                {this.props.user.thumbnails.map((thumbnail: any, index: number) => {
                  return (
                    <Thumbnail
                      key={index}
                      onClick={
                        e => {
                            e.stopPropagation();
                            this.changeImage(index);
                        }
                      }
                      isActive={thumbnail.isActive}><img src={thumbnail.image} />
                    </Thumbnail>
                  )
                })}
              </ThumbnailList>
            </Inner>
            <Apeal>{this.props.user.appealText}</Apeal>
          </Card>
          <ButtonGroup>
            <Setting />
            <Like onClick={() => {
              let state = this.props;
              state.user.isMatching = true;
              this.props.updateState(state);
            }}/>
            <SuperLike />
            <UnLike />
            <Shop />
          </ButtonGroup>
        </Container>
      </React.Fragment>
    )
  }
}
