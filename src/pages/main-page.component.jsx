import React from 'react';
import Grid from '../components/grid/main_grid.component';
import './main-page.styles.css'

export const MainPage = () => (
    <React.Fragment>
      <h1 className="title">
          PERIODIC TABLE
      </h1>
      <Grid />
      <p className="credit">
        Powered by neelpatel05's
        <a href="https://github.com/neelpatel05/periodic-table-api-go">
        &nbsp;Periodic Table API
          </a>
      </p>
    </React.Fragment>
)