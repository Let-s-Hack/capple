import styled from 'styled-components';
import posed from 'react-pose';
import { color } from '../../assets/stylesheets/variables';
// import iconClose from 'images/icons/close.svg';
import iconConfirmation from 'images/icons/confirmation.svg';
// import iconOption from 'images/icons/option.svg';
import iconNew from 'images/icons/new.svg';

const PoseContainer = posed.div({
  visible: {
    opacity: 1,
    background: 'rgba(255, 255, 255, 1)',
    applyAtStart: {
      display: 'flex',
    },
  },
  hidden: {
    // 変更対象の値がないとうまく動いてくれない
    opacity: 1,
    transition: {
      duration: 600,
    },
    applyAtStart: {
      background: 'rgba(255, 255, 255, 0)',
    },
    applyAtEnd: {
      display: 'none',
    },
  },
});

interface IContainer {
  mobileHeight: number;
};

export const Container = styled(PoseContainer)`
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
width: 100vw;
height: ${window.innerHeight}px;
overflow-y: auto;
-webkit-overflow-scrolling: touch;
min-height: ${(props: IContainer) => props.mobileHeight}px;
z-index: 1000;

&::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: ${(props: IContainer) => props.mobileHeight}px;
}
`;

interface IImage {
  mobileHeight: number;
};

const PoseImage = posed.div({
  visible: {
    y: 0,
    // 一見無駄な書き方に見えるが、アニメーション前後で同じ形式じゃないといけない
    width: 'calc(100% - 0px)',
    minHeight: '360px',
    borderRadius: 0,
    transition: {
      ease: [0.08, 0.69, 0.2, 0.99],
      duration: 300,
    },
    applyAtStart: {
      display: 'block',
      opacity: 1,
    },
  },
  hidden: {
    y: 88,
    width: 'calc(100% - 32px)',
    minHeight: (props: IImage) => props.mobileHeight - 198 + 'px',
    borderRadius: 16,
    transition: {
      ease: [0.08, 0.69, 0.2, 0.99],
      duration: 300,
    },
    applyAtEnd: {
      display: 'none',
      opacity: 0,
    },
  }
});

export const Image = styled(PoseImage)`
  width: 100%;
  height: 360px;
  min-height: 360px;
  margin: 0 auto;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PoseHeader = posed.div({
  visible: {
    opacity: 1,
  },
  hidden: {
    applyAtStart: {
      opacity: 0,
    },
  },
  visibleHeaderInner: {
    background: 'rgba(255, 255, 255, 1)',
  },
  hiddenHeaderInner: {
    background: 'rgba(255, 255, 255, 0)',
  },
});

export const Header = styled(PoseHeader)`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 18px;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.00) 100%);
`;

export const CloseButton = styled.div`
z-index: 11;
width: 18px;
height: 18px;
`;

export const CloseButtonSvg = styled.svg`
  g {
    stroke: red;
  }
`;

export const OptionButton = styled.div`
z-index: 11;
width: 20px;
height: 18px;
`;

export const OptionButtonSvg = styled.svg`
  g {
    fill: red;
  }
`;

const PoseHeaderInner = posed.div({
  visibleHeaderInner: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 400,
    },
  },
  hiddenHeaderInner: {
    opacity: 0,
    y: 16,
    transition: {
      duration: 400,
    },
  },
});

export const HeaderInner = styled(PoseHeaderInner)`
  display: flex;
  align-items: center;
`;

export const HeaderImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const HeaderTitle = styled.h2`
  margin-left: 8px;
  color: ${color.text};
  font-size: 16px;
  font-weight: bold;
`;

const PoseProfile = posed.div({
  visible: {
    delay: 100,
    transition: {
      ease: [0.08, 0.69, 0.2, 0.99],
      duration: 300,
    },
    y: '0%',
    opacity: 1,
  },
  hidden: {
    transition: {
      ease: 'easeInOut',
      duration: 200,
    },
    opacity: 0,
    applyAtEnd: { y: '100%' },
  },
});

export const Profile = styled(PoseProfile)`
position: relative;
z-index: 100;
padding: 0 16px;
margin-top: -16px;
border-radius: 16px 16px 0;
background: white;
`;

export const ProfileMain = styled.div`
display: flex;
`;

export const MainTextGroup = styled.div`
flex: 1 0 auto;
margin-top: 28px;
font-weight: bold;
`;

export const MainTitle = styled.h2`
display: flex;
margin-bottom: 11px;
font-size: 22px;
letter-spacing: 0.37px;
color: ${color.text};
`;

export const New = styled.span`
display: block;
width: 48px;
height: 24px;
margin-left: 4px;
border-radius: 24px;
background: ${color.accent} url(${iconNew}) center / 70% no-repeat;
`;

export const Text = styled.p`
display: flex;
align-items: center;
font-size: 13px;
letter-spacing: 0.1px;
color: ${color.subText};
`;

interface IConfirmation {
isConfirmed: boolean;
};

export const Confirmation = styled.span`
${(props: IConfirmation) => props.isConfirmed ? 'display: flex;' : 'display: none;'}
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

export const Title = styled.h3`
font-size: 17px;
color: ${color.text};
letter-spacing: -0.1px;
`;

export const ThumbnailList = styled.ul`
display: flex;
align-items: center;
justify-content: flex-end;
margin: 21px 0 12px auto;
list-style: none;
`;

interface IThumbnail {
isActive: boolean;
};

export const Thumbnail = styled.li`
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

export const Introduction = styled.div`
margin-top: 48px;
`;

export const IntroductionTitle = styled.h2`
font-size: 17px;
font-weight: bold;
color: ${color.text};
letter-spacing: -0.1px;
`;

export const IntroductionText = styled.p`
margin-top: 20px;
font-size: 14px;
color: ${color.text};
letter-spacing: 0.11px;
line-height: 23px;
`;

export const CategoryGroup = styled.div`
margin-top: 52px;
`;

export const CategoryList = styled.ul`
display: flex;
width: 100vw;
height: 152px;
overflow: auto;
-webkit-overflow-scrolling: touch;
transform: translateZ(0px);
margin: 24px 0 0 -16px;
list-style: none;
`;

export const CategoryCard = styled.li`
margin-left: 16px;
`;

export const CategoryImage = styled.img`
width: 94px;
height: 94px;
margin-bottom: 8px;
object-fit: cover;
border-radius: 16px;
border: solid 1px rgba(0, 0, 0, 0.08);
`;

export const CategoryText = styled.p`
font-size: 14px;
color: ${color.text};
letter-spacing: 0.11px;
`;

export const ProfileDetailGroup = styled.div`
margin-top: 56px;
`;

export const ProfileDetailList = styled.ul`
display: flex;
flex-direction: column;
margin-top: 8px;
list-style: none;
`;

export const ProfileDetail = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
height: 42px;

& + & {
  border-top: 1px solid #EAECED;
}
`;

export const ProfileDetailTitle = styled.div`
color: ${color.profile};
font-size: 14px;
color: #ACB1B9;
letter-spacing: 0.11px;
`;

export const ProfileDetailText = styled.div`
font-size: 14px;
color: ${color.text};
letter-spacing: 0.11px;
`;

const PoseButtonOuter = posed.div({
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

export const ButtonOuter = styled(PoseButtonOuter)`
  position: sticky;
  bottom: 0;
  z-index: 100;
`;
