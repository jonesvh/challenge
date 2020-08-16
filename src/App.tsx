import React, { } from 'react';
import GlobalStyle from './Styles/global';
import Routes from './Routes';
import LeadsProvider from './Context/Leads';

function App() {
  return (
    <LeadsProvider>
      <div className="App">
        <GlobalStyle />
        <Routes />
      </div>
    </LeadsProvider>
  );
}

export default App;
