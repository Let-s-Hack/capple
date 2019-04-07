import * as React from 'react';
import {
  Container, Image, CloseButton, OptionButton, Profile, ProfileMain, MainTextGroup, MainTitle, New, Text, Confirmation,
  ThumbnailList, Thumbnail, Introduction, IntroductionTitle, IntroductionText,
  CategoryGroup, Title, CategoryList, CategoryCard, CategoryImage, CategoryText,
  ProfileDetailGroup, ProfileDetail, ProfileDetailList, ProfileDetailTitle, ProfileDetailText
} from './style';

interface IDetail {
  user: any;
  updateState: (state: any) => void;
};

export default class Detail extends React.Component<IDetail> {
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
      <Container>
        <Image>
          <CloseButton onClick={() => {
            let state = this.props;
            state.user.isDetail = false;
            this.props.updateState(state);
          }} />
          <OptionButton />
          <img src={this.props.user.mainImage} alt="プロフィール画像"/>
        </Image>
        <Profile>
          <ProfileMain>
            <MainTextGroup>
              <MainTitle>{this.props.user.name}<New /></MainTitle>
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
                )
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
              <CategoryCard>
                <CategoryImage src={this.props.user.mainImage} alt="アウトドアが好き" />
                <CategoryText>アウトドア好き</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <CategoryImage src={this.props.user.mainImage} alt="アウトドアが好き" />
                <CategoryText>旅行好き</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <CategoryImage src={this.props.user.mainImage} alt="アウトドアが好き" />
                <CategoryText>アウトドア好き</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <CategoryImage src={this.props.user.mainImage} alt="アウトドアが好き" />
                <CategoryText>旅行好き</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <CategoryImage src={this.props.user.mainImage} alt="アウトドアが好き" />
                <CategoryText>アウトドア好き</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <CategoryImage src={this.props.user.mainImage} alt="アウトドアが好き" />
                <CategoryText>旅行好き</CategoryText>
              </CategoryCard>
            </CategoryList>
          </CategoryGroup>
          <ProfileDetailGroup>
            <Title>プロフィール</Title>
            <ProfileDetailList>
              <ProfileDetail>
                <ProfileDetailTitle>出身地</ProfileDetailTitle>
                <ProfileDetailText>神奈川県</ProfileDetailText>
              </ProfileDetail>
              <ProfileDetail>
                <ProfileDetailTitle>血液型</ProfileDetailTitle>
                <ProfileDetailText>A</ProfileDetailText>
              </ProfileDetail>
              <ProfileDetail>
                <ProfileDetailTitle>体型</ProfileDetailTitle>
                <ProfileDetailText>筋肉質</ProfileDetailText>
              </ProfileDetail>
            </ProfileDetailList>
          </ProfileDetailGroup>
        </Profile>
      </Container>
    );
  }
}
