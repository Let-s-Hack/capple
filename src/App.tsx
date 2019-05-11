import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Opening from './pages/opening';
import Find from './pages/find';

import userImage01 from 'images/users/user-image05.jpg';
import userImage02 from 'images/users/user-image01.jpg';
import userImage03 from 'images/users/user-image02.jpg';

class App extends React.Component {
  public state: any = {
    userIndex: 0,
    users: [
      {
        name: "あざらし",
        age: 23,
        place: "神奈川",
        mainImage: userImage01,
        prevIndex: 0,
        appeal: <span><strong>美容関係</strong>の仕事をしています</span>,
        introduction: <span>動物園に会いにきてください！待ってます。<br/>よろしくおねがいします！</span>,
        thumbnails: [
          { image: userImage01, isActive: true },
          { image: userImage02, isActive: false },
          { image: userImage03, isActive: false }
        ],
        isNew: true,
        isConfirmed: true,
        isDetail: false,
        isUnLike: false,
        isMatching: false,
      },
      {
        name: "ゴリラ",
        age: 25,
        place: "東京都",
        mainImage: userImage02,
        prevIndex: 0,
        appeal: <span><strong>動物園</strong>の仕事をしています</span>,
        introduction: <span>動物園に会いにきてください！待ってます。<br/>よろしくおねがいします！</span>,
        thumbnails: [
          { image: userImage02, isActive: true },
          { image: userImage01, isActive: false },
          { image: userImage03, isActive: false }
        ],
        isNew: false,
        isConfirmed: true,
        isDetail: false,
        isUnLike: false,
        isMatching: false,
      },
      {
        name: "可愛い子",
        age: 21,
        place: "東京都",
        mainImage: userImage03,
        prevIndex: 0,
        appeal: <span><strong>美容関係</strong>の仕事をしています</span>,
        introduction: <span>動物園に会いにきてください！待ってます。<br/>よろしくおねがいします！</span>,
        thumbnails: [
          { image: userImage03, isActive: true },
          { image: userImage02, isActive: false },
          { image: userImage01, isActive: false }
        ],
        isNew: true,
        isConfirmed: true,
        isDetail: false,
        isUnLike: false,
        isMatching: false,
      },
    ],
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
