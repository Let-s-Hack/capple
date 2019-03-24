import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Opening from './pages/opening';
import Find from './pages/find';

class App extends React.Component {
  public render() {
    return (
        <BrowserRouter>
          <Switch>
            {/* exact は完全マッチ時のみ表示させる。条件が厳しくなる。 */}
            <Route exact path="/" component={ Opening } />
            <Route exact path="/find" component={ Find } />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
