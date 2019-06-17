import styled, { keyframes } from 'styled-components';
import posed from 'react-pose';
import { color } from '../../assets/stylesheets/variables';
import { transform } from 'popmotion';

import iconArrow from 'images/icons/arrow.svg';
import iconCard from 'images/icons/card.svg';
import iconLike from 'images/icons/like.svg';
import iconUnLike from 'images/icons/unlike.svg';
import iconNew from 'images/icons/new.svg';
import iconSetting from 'images/icons/setting.svg';
import iconShop from 'images/icons/shop.svg';

const { interpolate } = transform;

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

interface IContainer {
  mobileHeight: number;
  isMatching: boolean;
};

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: ${(props: IContainer) => props.mobileHeight}px;
  z-index: 10;
  overflow: hidden;
  transition: all 0.3s ease;
  filter: ${(props: IContainer) => props.isMatching ? 'blur(12px)' : 'none'};
  background-image: linear-gradient(to bottom, white, #F6F6F8);

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: ${(props: IContainer) => props.mobileHeight}px;
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

export const CardGroup = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 32px 16px 10px 16px;
`;

const PoseCardOuter = posed.div({
  draggable: true,
  passive: {
    rotate: ['x', interpolate(
      [0, 25, 50],
      [0, 0, 1]
    ), true],
  },
  dragEnd: {
    x: 0,
    y: 0,
    transition: ({ from, to, velocity }: any) => {
      if (from <= -50) { // 親の値を参照する
        return {
          type: 'tween',
          ease: 'linear',
          from,
          to: -window.innerWidth - 80,
          duration: 280
        };
      } else if (50 <= from) {
        return {
          type: 'tween',
          ease: 'linear',
          from,
          to: window.innerWidth + 80,
          duration: 280
        };
      }

      return {
        type: 'physics',
        friction: 0.98,
        springStrength: 1000,
        duration: ['x', interpolate(
          [0, 50, 100],
          [0, 0, 1000]
        ), true],
      }
    }
  },
  unLike: {
    x: window.innerWidth,
    transition: {
      duration: 150,
      delay: 100,
    }
  },
  default: {
    x: 0,
    y: 0,
  },
});

export const CardOuter = styled(PoseCardOuter)`
  position: absolute;
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  z-index: 98;
`;

const PoseCardInner = posed.div({
  passive: {
    rotate: ['x', interpolate(
      [-window.innerWidth, 0, window.innerWidth],
      [8, 0, -8],
    ), true],
  },
  unLike: {
    rotate: 2,
    transition: {
      duration: 150,
      delay: 100,
    }
  },
  default: {
    rotate: 0,
  }
});

export const CardInner = styled(PoseCardInner)`
  width: 100%;
  height: 100%;
`;

const PoseCardLikeInner = posed.div({
  drag: {
    applyAtStart: {
      display: 'flex',
    },
    x: 0,
    transition: {
      delay: 80,
      duration: 0,
    },
  },
  dragEnd: {
    applyAtStart: {
      display: 'none',
    },
  },
  passive: {
    opacity: ['x', interpolate(
      [0, -25, -50],
      [0, 0, 1]
    ), true],
    rotate: ['x', interpolate(
      [-window.innerWidth, 0, window.innerWidth],
      [8, 0, -8],
    ), true],
  },
  like: {
    opacity: 1,
    transition: {
      duration: 100,
    },
  },
  default: {
    opacity: 0,
    x: -window.innerWidth,
  },
});

export const CardLikeInner = styled(PoseCardLikeInner)`
  position: absolute;
  z-index: 110;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: rgba(237, 82, 146, 0.68);
`;

export const LikeIcon = styled.div`
  display: block;
  width: 120px;
  height: 120px;
  margin-top: 98px;
  border-radius: 50%;
  background: white url(${iconLike}) 50% 50% / 50% no-repeat;
`;

export const LikeText = styled.p`
  margin-top: 24px;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  color: white;

  > span {
    font-size: 21px;
  }
`;

const PoseCardUnLikeInner = posed.div({
  drag: {
    applyAtStart: {
      display: 'flex',
    },
    x: 0,
    transition: {
      delay: 80,
      duration: 0,
    },
  },
  dragEnd: {
    applyAtStart: {
      display: 'none',
    },
  },
  passive: {
    opacity: ['x', interpolate(
      [0, 25, 50],
      [0, 0, 1]
    ), true],
    rotate: ['x', interpolate(
      [-window.innerWidth, 0, window.innerWidth],
      [8, 0, -8],
    ), true],
  },
  unLike: {
    applyAtStart: {
      display: 'flex',
      x: 0,
    },
    opacity: 1,
    transition: {
      duration: 100,
    },
  },
  default: {
    opacity: 0,
    x: window.innerWidth,
  },
});

export const CardUnLikeInner = styled(PoseCardUnLikeInner)`
  position: absolute;
  z-index: 110;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: rgba(83, 102, 151, 0.68);
`;

export const UnLikeIcon = styled.div`
  display: block;
  width: 120px;
  height: 120px;
  margin-top: 98px;
  border-radius: 50%;
  background: white url(${iconUnLike}) 50% 50% / 50% no-repeat;
`;

export const UnLikeText = styled.p`
  margin-top: 24px;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  color: white;

  > span {
    font-size: 21px;
  }
`;

export const New = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 44px;
  height: 44px;
  z-index: 120;
  border-radius: 50%;
  background: ${color.accent} url(${iconNew}) center / 75% no-repeat;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

export const Inner = styled.div`
  display: flex;
  align-items: flex-end;
  z-index: 100;
`;

export const Profile = styled.div`
  flex: 0 0 auto;
  margin-left: 24px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.p`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
  color: white;
`;

export const Text = styled.p`
  margin-bottom: 18px;
  font-size: 11px;
  font-weight: bold;
  color: white;
`;

export const ThumbnailList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0 10px 12px auto;
  list-style: none;
`;

interface IThumbnail {
  isActive: boolean;
};

export const Thumbnail = styled.li`
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

export const Apeal = styled.p`
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

  > span > strong {
    color: ${color.accentText};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
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
