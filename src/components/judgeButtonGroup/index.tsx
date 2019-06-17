import * as React from 'react';
import {
  Container, Like, SuperLike, UnLike,
} from './style';

interface IJudgeButtonGroup {
  userIndex: number;
  user: any;
  updateState: (state: any) => void;
  refs: any;
};

export default class JudgeButtonGroup extends React.Component<IJudgeButtonGroup> {
  private execAction(actionKey: string): void {
    let state = this.props;
    if (this.props.user.isDetail) {
      state.user.isDetail = false;
      this.props.updateState(state);
      // setInterval() こっちで操作すべきではないが、一旦これで実装する
      window.setTimeout(() => {
        state.user[actionKey] = true;
        this.props.refs[this.props.userIndex].hiddenNew();
        this.props.updateState(state);
      }, 300);
    } else {
      state.user[actionKey] = true;
      this.props.refs[this.props.userIndex].hiddenNew();
      this.props.updateState(state);
    }
  };

  public render() {
    return (
      <Container>
        <Like onClick={() => this.execAction('isMatching')} />
        <SuperLike />
        <UnLike onClick={() => this.execAction('isUnLike')} />
      </Container>
    )
  }
}
