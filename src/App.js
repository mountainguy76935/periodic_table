import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/main-page.component';
import ClickedElemReducer from '../src/redux-files/reducers'

const store = createStore(ClickedElemReducer);

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
