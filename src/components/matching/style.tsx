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
  height: 100vh;
  z-index: 1100;

  &::before {
    content: '';
    position: fixed;
    width: calc(100vw + 20px);
    height: calc(100vh + 20px);
    z-index: -1;
    background: rgba(237, 82, 146, 0.8);
  }
`;

const PoseTitle = posed.h2(PoseDefault);

export const Title = styled(PoseTitle)`
  width: 256px;
  height: 38px;
  background: url(${logoType}) center / contain no-repeat;
`;

export const MatchingResult = styled.div`
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
  max-width: 112px;
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
  max-width: 112px;
  height: 112px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
`;

const PoseMatchingIcon = posed.div({
  visible: {
    opacity: 1,
    transition: {
      damping: 15,
      duration: 600,
      delay: 1300,
    },
  },
  hidden: {
    opacity: 0,
  },
});

export const MatchingIcon = styled(PoseMatchingIcon)`
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
