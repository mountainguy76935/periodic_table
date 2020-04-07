import React from 'react';
import Grid from '../components/grid/main_grid.component';
import './main-page.styles.css'

export const MainPage = () => (

    <div>
      <h1 className="title">
          PERIODIC TABLE
      </h1>
      <Grid />
      <p className="credit">Powered by neelpatel05 <a href="https://github.com/neelpatel05/periodic-table-api-go">periodic table API</a></p>
    </div>
)