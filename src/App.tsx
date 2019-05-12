import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import users from './data';

import Opening from './pages/opening';
import Find from './pages/find';

class App extends React.Component {
  public state: any = {
    userIndex: 0,
    users: users,
    style: {
      mobileHeight: window.innerHeight
    }
  };

  private updateState(state: any): void {
    this.setState(state);
  }

  private showNextUser(): void {
    let state = this.state;

    // 最後までいったら、初期化
    if (state.userIndex >= state.users.length - 1) {
      this.init();
    } else {
      state.userIndex++;
      this.updateState(state);
    }
  }

  private init(): void {
    let state = this.state;

    state.userIndex = 0;
    state = state.users.map((user: any) => { return user.isUnLike = false; });

    this.updateState(state);
  }

  public render() {
    // ステータスバーを除外した高さをリサイズのたびに計算
    let timeoutId: any;
    window.addEventListener('resize', () => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          this.updateState({ style: { mobileHeight: window.innerHeight } });
        }, 500);
    });

    return (
        <BrowserRouter>
          <Switch>
            {/* exact は完全マッチ時のみ表示させる。条件が厳しくなる。 */}
            <Route exact path="/" component={Opening} />
            <Route exact path="/find" render={() =>
              <Find
                userIndex={this.state.userIndex}
                users={this.state.users}
                style={this.state.style}
                updateState={this.updateState.bind(this)}
                showNextUser={this.showNextUser.bind(this)}
              />
            } />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
