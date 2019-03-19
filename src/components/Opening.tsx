import * as React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../logo.json';
// import styled from 'styled-components';

interface Props {
  isStopped: boolean;
  isPaused: boolean;
}

class Opening extends React.Component<{}, Props> {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {isStopped: false, isPaused: false};
  // }

  public state: Props = {
    isStopped: false,
    isPaused: false
  };

  render() {
    // const buttonStyle = {
    //   display: 'block',
    //   margin: '10px auto'
    // };

    const defaultOptions = {
      autoplay: true,
      animationData: animationData,
      loop: false,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const callbackOptions: Array<any> = [
      {
        eventName: 'complete',
        callback: () => console.log('the animation completed:'),
      },
    ];

    return (
      // <Container>
        <Lottie
          options={defaultOptions}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          eventListeners={callbackOptions}
        />
      // </Container>
    )
  }
}

export default Opening;

// const Container = styled.div`
// width: 300px;
// height: 300px;
// `;
