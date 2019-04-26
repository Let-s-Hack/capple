import * as React from 'react';
import {
  Container, CardUnLikeInner, UnLikeIcon, UnLikeText, Header, HeaderArrow, HeaderTitle, HeaderCard,
  Card, New, Image, Inner, Profile, Title, Text, Thumbnail, ThumbnailList,
  Apeal, ButtonGroup, Setting, Like, SuperLike, UnLike, Shop
} from './style';
import Detail from '../detail';

interface IFind {
  userIndex: number;
  users: any;
  updateState: (state: any) => void;
};

export default class Find extends React.Component<IFind> {
  changeImage(index: number): void {
    let state: any = this.props,
        user: any = state.users[state.userIndex];

    user.thumbnails[user.prevIndex].isActive = false;
    user.thumbnails[index].isActive = true;
    user.mainImage = user.thumbnails[index].image;
    user.prevIndex = index;

    state.users[state.userIndex] = user;
    this.props.updateState(state);
  }

  render() {
    return (
      <React.Fragment>
        <Detail
          userIndex={this.props.userIndex}
          users={this.props.users}
          updateState={this.props.updateState.bind(this)}
        />
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
            onClick={() => {
              let state = this.props;
              state.users[state.userIndex].isDetail = true;
              this.props.updateState(state);
            }}
            pose={this.props.users[this.props.userIndex].isUnLike ? 'unLike' : 'default'}
          >
            <CardUnLikeInner>
              <UnLikeIcon />
              <UnLikeText>イマイチ<span>...</span></UnLikeText>
            </CardUnLikeInner>
            <New />
            <Image src={this.props.users[this.props.userIndex].mainImage} alt="プロフィール画像"/>
            <Inner>
              <Profile>
                <Title>{this.props.users[this.props.userIndex].name}</Title>
                <Text>{this.props.users[this.props.userIndex].age}歳・{this.props.users[this.props.userIndex].place}</Text>
              </Profile>
              <ThumbnailList>
                {this.props.users[this.props.userIndex].thumbnails.map((thumbnail: any, index: number) => {
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
            <Apeal>{this.props.users[this.props.userIndex].appeal}</Apeal>
          </Card>
          <ButtonGroup>
            <Setting />
            <Like />
            <SuperLike />
            <UnLike
              onClick={() => {
                let state = this.props;
                state.users[state.userIndex].isUnLike = true;
                this.props.updateState(state);
              }}
            />
            <Shop />
          </ButtonGroup>
        </Container>
      </React.Fragment>
    )
  }
}
