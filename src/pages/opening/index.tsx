import * as React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/logo.json';
import { OpeningContainer } from './style';
import { Redirect } from 'react-router-dom';

interface Props {};

interface State {
  isStopped: boolean;
  isPaused: boolean;
  redirect: boolean;
}

class Opening extends React.Component<Props, State> {
  public state: State = {
    isStopped: false,
    isPaused: false,
    redirect: false
  };

  render() {
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
        callback: () => {
          return setRedirect()
        },
      },
    ];

    const setRedirect = (): void => {
      this.setState({ redirect: true })
    }

    const renderRedirect = (): any => {
      if (this.state.redirect) {
        return <Redirect to='/find' />
      }
    }

    return (
      <React.Fragment>
        {renderRedirect()}
        <OpeningContainer>
          <Lottie
            options={defaultOptions}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}
            eventListeners={callbackOptions}
          />
        </OpeningContainer>
      </React.Fragment>
    )
  }
}

export default Opening;
