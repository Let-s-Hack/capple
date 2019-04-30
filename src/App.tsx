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
    user: {
      name: "あざらし",
      age: 23,
      place: "神奈川",
      mainImage: userImage01,
      prevIndex: 0,
      appealText: <span><strong>美容関係</strong>の仕事をしています</span>,
      thumbnails: [
        { image: userImage01, isActive: true },
        { image: userImage02, isActive: false },
        { image: userImage03, isActive: false }
      ],
      isConfirmed: true,
      introduction: <span>動物園に会いにきてください！待ってます。<br/>よろしくおねがいします！</span>,
      isDetail: false,
      isMatching: false,
      isUnLike: false,
    },
    style: {
      mobileHeight: window.innerHeight
    }
  };

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
            <Route exact path="/find" render={() => <Find user={this.state.user} style={this.state.style} updateState={this.updateState.bind(this)}/>} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
