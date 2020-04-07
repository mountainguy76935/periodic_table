import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/main-page.component'

function App() {

  return (
    <div className="App">
      <Route exact path='/' component = { MainPage } />
    </div>
  );
}

export default App;
