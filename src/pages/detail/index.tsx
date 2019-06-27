import * as React from 'react';
import {
  Container, Image, Header,
  CloseButton, CloseButtonG, OptionButton, OptionButtonG,
  HeaderInner, HeaderImage, HeaderTitle, 
  Profile, ProfileMain, MainTextGroup, MainTitle, New, Text, Confirmation,
  ThumbnailList, Thumbnail, Introduction, IntroductionTitle, IntroductionText,
  CategoryGroup, Title, CategoryList, CategoryCard, CategoryImage, CategoryText,
  ProfileDetailGroup, ProfileDetail, ProfileDetailList, ProfileDetailTitle, ProfileDetailText,
  ButtonOuter,
} from './style';

import JudgeButtonGroup from '../../components/judgeButtonGroup';

interface IDetail {
  userIndex: number;
  user: any;
  updateState: (state: any) => void;
  refs: any;
};

interface IState {
  isShowHeader: boolean;
  containerNode: any;
};

export default class Detail extends React.Component<IDetail, IState> {
  public state: IState = {
    isShowHeader: false,
    containerNode: React.createRef(),
  };

  timeoutDetailId: any;
  timeoutJudgeId: any;

  componentDidUpdate() {
    const { isUnLike, isMatching, isDetail } = this.props.user;

    // 詳細画面から戻るときだけ呼ぶ
    if (!isDetail) {
      // 連続で呼ばれるのを防ぐ
      clearTimeout(this.timeoutDetailId);
      this.timeoutDetailId = setTimeout(() => {
        this.state.containerNode.current.scrollTop = 0;
      }, 300);
    }

    // いまいちボタンが押されたときだけ呼ぶ
    if (isUnLike || isMatching) {
      // 連続で呼ばれるのを防ぐ
      clearTimeout(this.timeoutJudgeId);
      this.timeoutJudgeId = setTimeout(() => {
        this.state.containerNode.current.scrollTop = 0;
      }, 300);
    }
  }

  headerScrollTopPosition = 340;
  frameTime = 100;

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
    let scrollEventFlag = true;

    const handleScroll = () => {
      if (!scrollEventFlag) return;
      scrollEventFlag = false;
      
      setTimeout(() => {
        if (this.headerScrollTopPosition < this.state.containerNode.current.scrollTop) {
          this.setState({ isShowHeader: true })
        } else {
          this.setState({ isShowHeader: false })
        }

        scrollEventFlag = true;
      }, this.frameTime);
    };
    
    return (
      <Container
        pose={this.props.user.isDetail ? 'visible' : 'hidden'}
        onScroll={handleScroll}
        ref={this.state.containerNode}
      >
        <Header pose={this.state.isShowHeader ? 'visibleHeader' : 'hiddenHeader'}>
          <CloseButton>
            <svg
              onClick={() => this.hideDetail()} 
              width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg"
            >
              <CloseButtonG stroke="#fff" strokeWidth="2" fill="none"><path d="M1.5 1.5l16.329 16.329M17.5 1.5l-16.329 16.329"/></CloseButtonG>
            </svg>
          </CloseButton>
          <HeaderInner>
            <HeaderImage>
              <img
                src={this.props.user.mainImage}
                alt="プロフィール画像"
              />
            </HeaderImage>
            <HeaderTitle>{this.props.user.name}</HeaderTitle>
          </HeaderInner>
          <OptionButton>
            <svg width="20" height="4" viewBox="0 0 20 4" xmlns="http://www.w3.org/2000/svg">
              <OptionButtonG transform="translate(-337 -39) translate(337 39)" fill="#fff"><circle cx="2" cy="2" r="2"/><circle cx="10" cy="2" r="2"/><circle cx="18" cy="2" r="2"/></OptionButtonG>
            </svg>
          </OptionButton>
        </Header>
        <Image node={this.state.containerNode}>
          <img src={this.props.user.mainImage} alt="プロフィール画像"/>
        </Image>
        <Profile>
          <ProfileMain>
            <MainTextGroup>
              <MainTitle>
                {this.props.user.name}
                {this.props.user.isNew && <New />}
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
        <ButtonOuter>
          <JudgeButtonGroup
            userIndex={this.props.userIndex}
            user={this.props.user}
            updateState={this.props.updateState}
            refs={this.props.refs}
          />
        </ButtonOuter>
      </Container>
    );
  }
}
