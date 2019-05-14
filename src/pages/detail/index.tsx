import * as React from 'react';
import {
  Container, Image, Header, CloseButton, OptionButton, Profile, ProfileMain, MainTextGroup, MainTitle, New, Text, Confirmation,
  ThumbnailList, Thumbnail, Introduction, IntroductionTitle, IntroductionText,
  CategoryGroup, Title, CategoryList, CategoryCard, CategoryImage, CategoryText,
  ProfileDetailGroup, ProfileDetail, ProfileDetailList, ProfileDetailTitle, ProfileDetailText,
} from './style';
import { interpolate } from '@popmotion/popcorn';

interface IDetail {
  userIndex: number;
  user: any;
  style: any;
  updateState: (state: any) => void;
};

export default class Detail extends React.Component<IDetail> {
  private changeImage(index: number): void {
    let user: any = this.props.user;

    user.thumbnails[user.prevIndex].isActive = false;
    user.thumbnails[index].isActive = true;
    user.mainImage = user.thumbnails[index].image;
    user.prevIndex = index;

    this.props.updateState(user);
  }

  private hideDetail(): void {
    let state = this.props;
    state.user.isDetail = false;
    this.props.updateState(state);
  }

  public render() {
    const test = interpolate(
      [100, 200, 300, 400, 500, 600, 700, 800, 900],
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    );
    return (
      <Container pose={this.props.user.isDetail ? 'visible' : 'hidden'} mobileHeight={this.props.style.mobileHeight}>
        <Header>
          <CloseButton onClick={() => this.hideDetail()} />
          <OptionButton />
        </Header>
        <Image onValueChange={{ y: (y: any) => console.log(test(y)) }} mobileHeight={this.props.style.mobileHeight}>
          <img src={this.props.user.mainImage} alt="プロフィール画像"/>
        </Image>
        <Profile>
          <ProfileMain>
            <MainTextGroup>
              <MainTitle>
                {this.props.user.name}
                { this.props.user.isNew && <New />}
              </MainTitle>
              <Text>
                {this.props.user.age}歳・{this.props.user.place}
                <Confirmation isConfirmed={this.props.user.isConfirmed}>年確済み</Confirmation>
              </Text>
            </MainTextGroup>
            <ThumbnailList>
              { this.props.user.thumbnails.map((thumbnail: any, index: number) => {
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
                );
              }) }
            </ThumbnailList>
          </ProfileMain>
          <Introduction>
            <IntroductionTitle>自己紹介</IntroductionTitle>
            <IntroductionText>{this.props.user.introduction}</IntroductionText>
          </Introduction>
          <CategoryGroup>
            <Title>興味があるカテゴリー</Title>
            <CategoryList>
              { this.props.user.category.map((item: any, index: number) => {
                return (
                  <CategoryCard key={index}>
                    <CategoryImage src={item.image} alt={item.text} />
                    <CategoryText>{item.text}</CategoryText>
                  </CategoryCard>
                );
              }) }
            </CategoryList>
          </CategoryGroup>
          <ProfileDetailGroup>
            <Title>プロフィール</Title>
              <ProfileDetailList>
                { this.props.user.profile.map((item: any, index: number) => {
                  return (
                    <ProfileDetail key={index}>
                      <ProfileDetailTitle>{item.title}</ProfileDetailTitle>
                      <ProfileDetailText>{item.text}</ProfileDetailText>
                    </ProfileDetail>
                  );
                }) }
              </ProfileDetailList>
          </ProfileDetailGroup>
        </Profile>
      </Container>
    );
  }
}
