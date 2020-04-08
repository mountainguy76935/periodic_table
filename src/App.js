import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/main-page.component'

function App() {
  const [loaded, setLoaded] = React.useState(false)

  const handleLoad = () => {
    setLoaded({
      loaded: true
    })
  }

  return (
    <div className="App">
      <Route 
        exact 
        path='/' 
        render={() => <MainPage loaded={loaded} handleLoad = {handleLoad} />}
      />
    </div>
  );
}

export default App;
