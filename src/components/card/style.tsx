import styled from 'styled-components';
import posed from 'react-pose';
import { color } from '../../assets/stylesheets/variables';
import iconNew from 'images/icons/new.svg';

const fade = {
  fadeIn: {
    opacity: 1,
    transition: {
      delay: 300,
      duration: 300,
    },
  },
  fadeOut: {
    opacity: 0,
    transition: {
      delay: 300,
      duration: 300,
    },
  },
};

const PoseContainer = posed.div({
  fadeIn: {},
  fadeOut: {},
});

export const Container = styled(PoseContainer)`
  position: absolute;
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  background: white;
  z-index: 98;
`;

const PoseNew = posed.div({
  drag: {
    opacity: 0,
    transition: {
      delay: 120,
    },
  },
  hiddenNew: {
    opacity: 0,
    transition: {
      duration: 100,
    },
  },
  fadeIn: {
    opacity: 1,
    transition: {
      delay: 300,
      duration: 300,
    },
  },
  fadeOut: {
    opacity: 0,
    transition: {
      delay: 300,
      duration: 300,
    },
  },
});

export const New = styled(PoseNew)`
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

const PoseInner = posed.div(fade);

export const Inner = styled(PoseInner)`
  flex-direction: column;
  align-items: flex-end;
  z-index: 100;
  background: red;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.57));
  border-radius: 0 0 16px 16px;
`;

export const Profile = styled.div`
  display: flex;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
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
