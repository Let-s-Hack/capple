import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Opening from './pages/opening';
import Find from './pages/find';

import userImage01 from 'images/users/user-image05.jpg';
import userImage02 from 'images/users/user-image01.jpg';
import userImage03 from 'images/users/user-image02.jpg';

class App extends React.Component {
  updateState(state: any): void {
    this.setState(state);
  }

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
        isConfirmed: true,
        isDetail: false,
        isUnLike: false,
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
        isConfirmed: true,
        isDetail: false,
        isUnLike: false,
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
        isConfirmed: true,
        isDetail: false,
        isUnLike: false,
      }
    ]
  };

  public render() {
    return (
        <BrowserRouter>
          <Switch>
            {/* exact は完全マッチ時のみ表示させる。条件が厳しくなる。 */}
            <Route exact path="/" component={Opening} />
            <Route exact path="/find" render={() =>
              <Find
                userIndex={this.state.userIndex}
                users={this.state.users}
                updateState={this.updateState.bind(this)}
                />
              } />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
