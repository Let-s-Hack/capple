import * as React from 'react';
import {
  Container, New, Image, Inner, Profile,
  TextGroup, Title, Text, ThumbnailList, Thumbnail, Apeal
} from './style';

interface ICard {
  isCurrent: boolean;
  user: any;
  updateState: (state: any) => void;
  onRef: any;
};

export default class Card extends React.Component<ICard> {
  public state: any = {
    isHiddenNew: false,
  };

  private changeImage(index: number): void {
    let user: any = this.props.user;

    user.thumbnails[user.prevIndex].isActive = false;
    user.thumbnails[index].isActive = true;
    user.mainImage = user.thumbnails[index].image;
    user.prevIndex = index;

    this.props.updateState(user);
  }

  private showDetail(): void {
    let state = this.props;
    state.user.isDetail = true;
    this.props.updateState(state);
  }

  public componentDidMount() {
    this.props.onRef(this);
  }

  public componentWillUnmount() {
    this.props.onRef(undefined);
  }

  public hiddenNew(): void {
    this.setState({isHiddenNew: true});
  };

  public render() {
    return (
      <Container
        onClick={() => this.showDetail()}
        pose={this.props.user.isDetail ? 'fadeOut' : 'fadeIn'}>
        {
          (this.props.user.isNew && this.props.isCurrent) &&
          <New pose={this.state.isHiddenNew ? 'hiddenNew' : 'fadeIn'} />
        }
        <Image src={this.props.user.mainImage} alt="プロフィール画像" />
        <Inner>
          <Profile>
            <TextGroup>
              <Title>{this.props.user.name}</Title>
              <Text>{this.props.user.age}歳・{this.props.user.place}</Text>
            </TextGroup>
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
          </Profile>
          <Apeal>{this.props.user.appeal}</Apeal>
        </Inner>
      </Container>
    )
  }
}
