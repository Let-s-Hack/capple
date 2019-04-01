import * as React from 'react';
import styled from 'styled-components';
import { color } from '../assets/stylesheets/variables';
import userImage01 from '../assets/images/users/user-image04.jpg';
import userImage02 from '../assets/images/users/user-image01.jpg';
import userImage03 from '../assets/images/users/user-image03.jpg';
import iconNew from '../assets/images/icons/new.svg';

interface ICard {
  userName: string;
  userAge: number;
  userPlace: string;
};

export default class Card extends React.Component<ICard> {
  public state: any = {
    mainImage: userImage02,
    prevIndex: 0,
    thumbnails: [
      { image: userImage01, isActive: true },
      { image: userImage02, isActive: false },
      { image: userImage03, isActive: false }
    ]
  };

  changeImage(index: number): void {
    let tmp: any = this.state.thumbnails;
    tmp[this.state.prevIndex].isActive = false;
    tmp[index].isActive = true;

    this.setState({ thumbnails: tmp });
    this.setState({ prevIndex: index });
    this.setState({ mainImage: this.state.thumbnails[index].image });
  }

  render() {
    return (
      <Container>
        <New />
        <Image src={this.state.mainImage} alt="プロフィール画像"/>
        <Inner>
          <Profile>
            <Title>{this.props.userName}</Title>
            <Text>{this.props.userAge}歳・{this.props.userPlace}</Text>
          </Profile>
          <ThumbnailList>
            { this.state.thumbnails.map((thumbnail: any, index: number) => {
              return <Thumbnail key={index} onClick={this.changeImage.bind(this, index)} isActive={thumbnail.isActive}><img src={thumbnail.image} alt="サムネ1" /></Thumbnail>
            }) }
            {/* <Thumbnail onClick={() => this.changeImage(userImage02)} isActive={true}><img src={userImage02} alt="サムネ1" /></Thumbnail>
            <Thumbnail onClick={() => this.changeImage(userImage01)} isActive={false}><img src={userImage01} alt="サムネ2" /></Thumbnail>
            <Thumbnail onClick={() => this.changeImage(userImage03)} isActive={false}><img src={userImage03} alt="サムネ3" /></Thumbnail> */}
          </ThumbnailList>
        </Inner>
        <Apeal>
          <strong>美容関係</strong>の仕事をしています
        </Apeal>
      </Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 32px 16px 10px 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  background: white;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 160px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.57));
    border-radius: 0 0 16px 16px;
  }
`;

const New = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 44px;
  height: 44px;
  z-index: 100;
  border-radius: 50%;
  background: ${color.accent} url(${iconNew}) center / 75% no-repeat;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const Inner = styled.div`
  display: flex;
  align-items: flex-end;
  z-index: 100;
`;

const Profile = styled.div`
  flex: 0 0 auto;
  margin-left: 24px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.p`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
  color: white;
`;

const Text = styled.p`
  margin-bottom: 18px;
  font-size: 11px;
  font-weight: bold;
  color: white;
`;

const ThumbnailList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0 10px 12px auto;
  list-style: none;
`;

interface IThumbnail {
  isActive: boolean;
};

const Thumbnail = styled.li`
  flex: 0 0 54px;
  height: 54px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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

const Apeal = styled.p`
  display: flex;
  align-items: center;
  height: 66px;
  padding: 0 12px;
  margin: 0 12px 12px;
  background: white;
  border-radius: 12px;
  z-index: 100;
  font-size: 13px;
  font-weight: bold;
  color: ${color.text};

  > strong {
    color: ${color.accentText};
  }
`;
