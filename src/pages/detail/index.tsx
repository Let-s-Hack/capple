import * as React from 'react';
import {
  Container, Image, Header, CloseButton, OptionButton, Profile, ProfileMain, MainTextGroup, MainTitle, New, Text, Confirmation,
  ThumbnailList, Thumbnail, Introduction, IntroductionTitle, IntroductionText,
  CategoryGroup, Title, CategoryList, CategoryCard, CategoryImage, CategoryText,
  ProfileDetailGroup, ProfileDetail, ProfileDetailList, ProfileDetailTitle, ProfileDetailText,
} from './style';

interface IDetail {
  userIndex: number;
  users: any;
  updateState: (state: any) => void;
};

export default class Detail extends React.Component<IDetail> {
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

  public render() {
    return (
      <Container pose={this.props.users[this.props.userIndex].isDetail ? 'visible' : 'hidden'}>
        <Header pose={this.props.users[this.props.userIndex].isDetail ? 'visible' : 'hidden'}>
          <CloseButton onClick={() => {
            let state = this.props;
            state.users[this.props.userIndex].isDetail = false;
            this.props.updateState(state);
          }} />
          <OptionButton />
        </Header>
        <Image pose={this.props.users[this.props.userIndex].isDetail ? 'visible' : 'hidden'}>
          <img src={this.props.users[this.props.userIndex].mainImage} alt="プロフィール画像"/>
        </Image>
        <Profile pose={this.props.users[this.props.userIndex].isDetail ? 'visible' : 'hidden'}>
          <ProfileMain>
            <MainTextGroup>
              <MainTitle>{this.props.users[this.props.userIndex].name}<New /></MainTitle>
              <Text>
                {this.props.users[this.props.userIndex].age}歳・{this.props.users[this.props.userIndex].place}
                <Confirmation isConfirmed={this.props.users[this.props.userIndex].isConfirmed}>年確済み</Confirmation>
              </Text>
            </MainTextGroup>
            <ThumbnailList>
              { this.props.users[this.props.userIndex].thumbnails.map((thumbnail: any, index: number) => {
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
            <IntroductionText>{this.props.users[this.props.userIndex].introduction}</IntroductionText>
          </Introduction>
          <CategoryGroup>
            <Title>興味があるカテゴリー</Title>
            <CategoryList>
              <CategoryCard>
                <CategoryImage src={this.props.users[this.props.userIndex].mainImage} alt="アウトドアが好き" />
                <CategoryText>アウトドア好き</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <CategoryImage src={this.props.users[this.props.userIndex].mainImage} alt="アウトドアが好き" />
                <CategoryText>旅行好き</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <CategoryImage src={this.props.users[this.props.userIndex].mainImage} alt="アウトドアが好き" />
                <CategoryText>アウトドア好き</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <CategoryImage src={this.props.users[this.props.userIndex].mainImage} alt="アウトドアが好き" />
                <CategoryText>旅行好き</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <CategoryImage src={this.props.users[this.props.userIndex].mainImage} alt="アウトドアが好き" />
                <CategoryText>アウトドア好き</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <CategoryImage src={this.props.users[this.props.userIndex].mainImage} alt="アウトドアが好き" />
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
