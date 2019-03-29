import styled, { keyframes } from 'styled-components';
import { color } from '../../assets/stylesheets/variables';
import iconArrow from '../../assets/images/icons/arrow.svg';
import iconCard from '../../assets/images/icons/card.svg';
import iconLike from '../../assets/images/icons/like.svg';
import iconSuperLike from '../../assets/images/icons/super-like.svg';
import iconUnLike from '../../assets/images/icons/unlike.svg';
import iconSetting from '../../assets/images/icons/setting.svg';
import iconShop from '../../assets/images/icons/shop.svg';

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const displayNone = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`;

export const Container = styled.div`
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
    z-index: 1000;
    background: white;
    animation: ${fadeIn} 0.8s forwards, ${displayNone} 0s 0.8s forwards;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
`;

export const HeaderArrow = styled.div`
  width: 54px;
  height: 20px;
  background: url(${iconArrow}) left / contain no-repeat;
`;

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 54px;

  > span {
    width: 20px;
    height: 20px;
    background: url(${iconCard}) center / contain no-repeat;
  }

  > p {
    color: ${color.subText};
    font-size: 13px;
    font-weight: bold;
  }
`;

export const HeaderTitle = styled.h1`
  flex: 1;
  font-size: 16px;
  text-align: center;
  color: ${color.headingText};
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

// export const Button = styled.css`

// `;

export const Like = styled.div`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: url(${iconLike}) center 21px / 100% 28px no-repeat;
`;

export const SuperLike = styled.div`
  width: 52px;
  height: 52px;
  margin: 0 14px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: url(${iconSuperLike}) 1px 12px / 100% 27px no-repeat;
`;

export const UnLike = styled.div`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: url(${iconUnLike}) 1px 20px / 100% 28px no-repeat;
`;

export const Setting = styled.div`
  width: 44px;
  height: 44px;
  margin-right: 14px;
  background: url(${iconSetting}) center / 100% 23px no-repeat;
`;

export const Shop = styled.div`
  width: 44px;
  height: 44px;
  margin-left: 14px;
  background: url(${iconShop}) center / 100% 25px no-repeat;
`;
