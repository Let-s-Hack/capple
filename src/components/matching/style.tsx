import styled from 'styled-components';
import posed from 'react-pose';
import { color } from '../../assets/stylesheets/variables';
import iconLike from 'images/icons/like.svg';
import logoType from 'images/logo-type.svg';

const PoseDefault = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const PoseContainer = posed.div({
  visible: {
    opacity: 1,
    delayChildren: 400,
    applyAtStart: {
      display: 'flex',
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: 'none',
    },
  },
});

export const Container = styled(PoseContainer)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: inherit;
  z-index: 1100;

  &::before {
    content: '';
    position: fixed;
    width: calc(100vw + 20px);
    height: calc(100vh + 20px);
    z-index: -1;
    background: rgba(234, 92, 151, 0.8);
  }
`;

const PoseTitle = posed.h2(PoseDefault);

export const Title = styled(PoseTitle)`
  width: 256px;
  height: 38px;
  background: url(${logoType}) center / contain no-repeat;
`;

export const MatchingResult = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  margin: auto 0;
`;

export const ImageGroup = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const PoseMyImage = posed.img({
  visible: {
    marginLeft: '0vw',
    opacity: 1,
    transform: 'rotate(0deg)',
    transition: {
      duration: 600,
      delay: 700,
      ease: [.18, .97, .14, .98],
    },
    applyAtStart: {
      opacity: 0.2,
      marginLeft: '-48vw',
      transform: 'rotate(-90deg)',
    },
  },
});

export const MyImage = styled(PoseMyImage)`
  position: relative;
  z-index: 1200;
  flex: 0 0 112px;
  width: 112px;
  height: 112px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
`;

export const PartnerImageList = styled.div`
  position: relative;
`;

const PosePartnerImage = posed.img({
  visible: {
    marginLeft: '0vw',
    opacity: 1,
    transform: 'rotate(0deg)',
    transition: {
      duration: 600,
      delay: 700,
      ease: [.18, .97, .14, .98],
    },
    applyAtStart: {
      marginLeft: '148vw',
      opacity: 0.2,
      transform: 'rotate(90deg)',
    },
  },
});

export const PartnerImage = styled(PosePartnerImage)`
  position: relative;
  z-index: 1200;
  flex: 0 0 112px;
  width: 112px;
  height: 112px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
`;

const PoseMatchingIcon = posed.div({
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      default: {
        delay: 1300,
      },
      scale: ({ from, to }: any) => ({
        type: 'keyframes',
        values: [from, 1.2, 0.9, 1.1, 0.95, to],
        times:  [0, 0.3, 0.48, 0.66, 0.84, 1],
        duration: 600,
        delay: 1300,
      }),
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      delay: 400,
      duration: 0,
    },
  },
});

export const MatchingIcon = styled(PoseMatchingIcon)`
  position: relative;
  z-index: 1199;
  flex: 0 0 60px;
  height: 60px;
  margin: auto -14px 4px -14px;
  border-radius: 50%;
  background: white url(${iconLike}) center 18px / 100% 28px no-repeat;
`;

const PoseText = posed.p(PoseDefault);

export const Text = styled(PoseText)`
  color: white;
  text-align: center;
  font-weight: bold;
  line-height: 24px;
  font-size: 15px;
`;

export const ParticleOuter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1190;
  margin: auto;
`;

interface IParticle {
  amount: number;
  index: number;
  i: number;
  type: string;
  dist: {min: number, max: number};
};

const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

export const PoseParticle = posed.div({
  visible: {
    opacity: 1,
    transform: (props: IParticle) => {
      const aboutDist = getRandomArbitrary(props.dist.min, props.dist.max);

      return `translateX(${getCoordinateRotation(props, aboutDist, 'x')}px) translateY(${getCoordinateRotation(props, aboutDist, 'y')}px) rotate(45deg)`
    },
    transition: {
      default: (props: IParticle) => ({
        delay: 1600 + props.index * 100,
        duration: 1000,
        ease: [0, 0.85, 0.37, 0.99],
      }),
      opacity: ({ from, to }: any) => ({
        type: 'keyframes',
        values: [to, to, from],
        times:  [0, 0.8, 1],
        duration: 1300,
        delay: 1600,
      }),
    },
  },
  hidden: {
    opacity: 0,
    transform: 'translateX(0px) translateY(0px) rotate(0deg)',
    transition: {
      delay: 400,
      duration: 0,
    },
  },
});

// 座標回転の計算
const getCoordinateRotation = (props: IParticle, dist: number = 160, axis: string) => {
  // 角度
  const angle = 360 / props.amount * props.i + props.index * 30;

  // X軸の座標回転結果
  if (axis === 'x') return Math.floor(dist * Math.cos(angle * (Math.PI / 180)));

  // Y軸の座標回転結果
  return Math.floor(dist * Math.sin(angle * (Math.PI / 180)));
};

export const Particle = styled(PoseParticle)`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  margin: auto;

  ${(props: IParticle) => getParticleShape(props)}
`;

const getParticleShape = (props: IParticle) => {
  switch(props.type) {
    case 'square':
      return `
        width: 35px;
        height: 35px;
        border: 3px solid white;
      `;
    case 'triangle':
      return `
        width: 0;
        border: 25px solid transparent;
        border-left-width: 16px;
        border-right-width: 16px;
        border-bottom-color: white;
      `;
    case 'circle':
      return `
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: white;
      `;
    case 'ring':
      return `
        width: 19px;
        height: 19px;
        border-radius: 50%;
        border: 2px solid white;
      `;
    default:
      return ``;
  }
};

export const ButtonGroup = styled.ul`
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  margin-bottom: 32px;
  list-style: none;

  > li {
    margin-top: 12px;
  }
`;

const PoseButton = posed.li(PoseDefault);

const Button = styled(PoseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 24px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: -0.04px;
`;

export const MessageButton = styled(Button)`
  background: white;
  color: ${color.accentText};
`;

export const CloseButton = styled(Button)`
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;
