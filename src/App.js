import React from 'react';
import './App.css';
import Grid from './components/grid/main_grid.component'

function App() {
  const [loaded, setLoaded] = React.useState(false)

  const loadElements = (val) => {
    setLoaded({
      loaded: true
    })
  }

  return (
    <div className="App">
      <h1 className="title">
          PERIODIC TABLE
      </h1>
      <Grid loadElements={loadElements} loaded={loaded}/>
      <p className="credit">Powered by neelpatel05 <a href="https://github.com/neelpatel05/periodic-table-api-go">periodic table API</a></p>
    </div>
  );
}

export default App;
