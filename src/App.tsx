import React, { } from 'react';
import GlobalStyle from './global';
import Routes from './routes';
import LeadsProvider from './context/Leads';

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
