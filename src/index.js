import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import Options from './components/options';
import Game from './components/game';

const initialState = {
    options: {
        list: [
        { id: 1, title:'Wein', editing: false},
        { id: 2, title:'Bier', editing: false},
        { id: 3, title:'Spielen', editing: false},
        { id: 4, title:'Lesen', editing: false} ],
        dead: [],
        alive: []
    }  
}

const store = createStore(reducers, initialState);

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