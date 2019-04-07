import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Opening from './pages/opening';
import Find from './pages/find';
import Detail from './pages/detail';

import userImage01 from 'images/users/user-image04.jpg';
import userImage02 from 'images/users/user-image01.jpg';
import userImage03 from 'images/users/user-image03.jpg';

class App extends React.Component {
  updateState(state: any): void {
    this.setState(state);
  }

  public state: any = {
    user: {
      name: "ごりら",
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
      isDetail: false
    }
  };

  public render() {
    return (
        <BrowserRouter>
          <Switch>
            {/* exact は完全マッチ時のみ表示させる。条件が厳しくなる。 */}
            <Route exact path="/" component={Opening} />
            <Route exact path="/find" render={() => <Find user={this.state.user} updateState={this.updateState.bind(this)}/>} />
            <Route exact path="/detail" render={() => <Detail user={this.state.user} updateState={this.updateState.bind(this)}/>} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
