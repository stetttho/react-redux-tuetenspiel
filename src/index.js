import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import Options from './components/options';
import Game from './components/game';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/options" component={Options} />
                    <Route path="/" component={Game} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById("container")
)