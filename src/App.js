import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Route } from 'react-router-dom';


import { MainPage } from './pages/main-page.component';
import { ClickedReducer, DisabledReducer, AsyncReducer } from '../src/redux-files/reducers'
import './App.css';

const rootReducer = combineReducers({ ClickedReducer, DisabledReducer, AsyncReducer})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Route 
          exact 
          path='/' 
          component={ MainPage }
        />
      </Provider>
    </div>
  );
}

export default App;
