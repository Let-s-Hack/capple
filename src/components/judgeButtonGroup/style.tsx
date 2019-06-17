import styled from 'styled-components';
import posed from 'react-pose';

import iconLike from 'images/icons/like.svg';
import iconSuperLike from 'images/icons/super-like.svg';
import iconUnLike from 'images/icons/unlike.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const PoseButton = posed.div({
  pressable: true,
  init: {
    scale: 1,
  },
  press: {
    scale: 1.1,
  },
});

export const Like = styled(PoseButton)`
  position: relative;
  z-index: 101;
  width: 69px;
  height: 69px;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background: white url(${iconLike}) center 21px / 100% 28px no-repeat;
`;

export const SuperLike = styled.div`
  position: relative;
  z-index: 101;
  width: 52px;
  height: 52px;
  margin: 0 14px;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background: white url(${iconSuperLike}) 1px 12px / 100% 27px no-repeat;
`;

export const UnLike = styled(PoseButton)`
  position: relative;
  z-index: 101;
  width: 69px;
  height: 69px;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background: white url(${iconUnLike}) 1px 20px / 100% 28px no-repeat;
`;
