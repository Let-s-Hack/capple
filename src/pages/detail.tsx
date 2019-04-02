import * as React from 'react';
import styled from 'styled-components';
import { color } from '../assets/stylesheets/variables';
import iconClose from '../assets/images/icons/close_.svg';
import iconConfirmation from '../assets/images/icons/confirmation.svg';
import iconOption from '../assets/images/icons/option.svg';
import iconNew from '../assets/images/icons/new.svg';
import userImage01 from '../assets/images/users/user-image04.jpg';
import userImage02 from '../assets/images/users/user-image01.jpg';
import userImage03 from '../assets/images/users/user-image03.jpg';

export default class Detail extends React.Component {
  public state: any = {
    mainImage: userImage01
  };

  public render() {
    return (
        <Container>
          <Image>
            <CloseButton />
            <OptionButton />
            <img src={this.state.mainImage} alt="プロフィール画像"/>
          </Image>
          <Profile>
            <ProfileMain>
              <MainTextGroup>
                <MainTitle>ごりら<New /></MainTitle>
                <Text>
                  23歳・神奈川
                  <Confirmation>年確済み</Confirmation>
                </Text>
              </MainTextGroup>
              <ThumbnailList>
                <Thumbnail isActive={true}><img src={userImage02} alt="サムネ1" /></Thumbnail>
                <Thumbnail isActive={false}><img src={userImage01} alt="サムネ2" /></Thumbnail>
                <Thumbnail isActive={false}><img src={userImage03} alt="サムネ3" /></Thumbnail>
              </ThumbnailList>
            </ProfileMain>
            <CategoryGroup>
              <Title>興味があるカテゴリー</Title>
              <CategoryList>
                <CategoryCard>
                  <CategoryImage src={this.state.mainImage} alt="アウトドアが好き" />
                  <CategoryText>アウトドア好き</CategoryText>
                </CategoryCard>
                <CategoryCard>
                  <CategoryImage src={this.state.mainImage} alt="アウトドアが好き" />
                  <CategoryText>旅行好き</CategoryText>
                </CategoryCard>
                <CategoryCard>
                  <CategoryImage src={this.state.mainImage} alt="アウトドアが好き" />
                  <CategoryText>アウトドア好き</CategoryText>
                </CategoryCard>
                <CategoryCard>
                  <CategoryImage src={this.state.mainImage} alt="アウトドアが好き" />
                  <CategoryText>旅行好き</CategoryText>
                </CategoryCard>
                <CategoryCard>
                  <CategoryImage src={this.state.mainImage} alt="アウトドアが好き" />
                  <CategoryText>アウトドア好き</CategoryText>
                </CategoryCard>
                <CategoryCard>
                  <CategoryImage src={this.state.mainImage} alt="アウトドアが好き" />
                  <CategoryText>旅行好き</CategoryText>
                </CategoryCard>
              </CategoryList>
            </CategoryGroup>
            <ProfileDetailGroup>
              <Title></Title>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 10;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 360px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: block;
    width: 100%;
    height: 64px;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.00) 100%);
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 32px;
  left: 18px;
  z-index: 11;
  width: 18px;
  height: 18px;
  background: url(${iconClose}) center / contain no-repeat;
`;

const OptionButton = styled.div`
  position: absolute;
  top: 32px;
  right: 18px;
  z-index: 11;
  width: 20px;
  height: 18px;
  background: url(${iconOption}) center / contain no-repeat;
`;

const Profile = styled.div`
  position: relative;
  z-index: 100;
  padding: 0 16px;
  margin-top: -16px;
  border-radius: 16px 16px 0;
  background: white;
`;

const ProfileMain = styled.div`
  display: flex;
`;

const MainTextGroup = styled.div`
  flex: 1 0 auto;
  margin-top: 28px;
  font-weight: bold;
`;

const MainTitle = styled.h2`
  display: flex;
  margin-bottom: 11px;
  font-size: 22px;
  letter-spacing: 0.37px;
  color: ${color.text};
`;

const New = styled.span`
  display: block;
  width: 48px;
  height: 24px;
  margin-left: 4px;
  border-radius: 24px;
  background: ${color.accent} url(${iconNew}) center / 70% no-repeat;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 13px;
  letter-spacing: 0.1px;
  color: ${color.subText};
`;

const Confirmation = styled.span`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 11px;
  color: ${color.success};
  letter-spacing: 0.08px;
  
  &::before {
    content: '';
    width: 14px;
    height: 18px;
    margin-right: 4px;
    background: url(${iconConfirmation}) center / contain no-repeat;
  }
`;

const Title = styled.h3`
  font-size: 17px;
  color: ${color.text};
  letter-spacing: -0.1px;
`;

const ThumbnailList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 21px 0 12px auto;
  list-style: none;
`;

interface IThumbnail {
  isActive: boolean;
};

const Thumbnail = styled.li`
  flex: 0 0 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  overflow: hidden;
  box-sizing: border-box;
  border: solid ${(props: IThumbnail) => props.isActive ? color.accentText + ' 4px' : 'white 2px'};
  cursor: pointer;

  & + & {
    margin-left: 4px;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CategoryGroup = styled.div`
  margin-top: 48px;
`;

const CategoryList = styled.ul`
  display: flex;
  width: 100vw;
  overflow: auto;
  margin: 24px 0 0 -16px;
  list-style: none;
`;

const CategoryCard = styled.li`
  margin-left: 16px;
  /* box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.08); */
`;

const CategoryImage = styled.img`
  width: 94px;
  height: 94px;
  object-fit: cover;
  border-radius: 16px;
`;

const CategoryText = styled.p``;

const ProfileDetailGroup = styled.div``;

const ProfileDetailList = styled.ul``;

const ProfileDetail = styled.li``;

const ProfileDetailTitle = styled.div``;

const ProfileDetailText = styled.div``;