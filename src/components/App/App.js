import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchResults from '../../containers/SearchResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SearchResults />
    </div>
  );
}

export default App;
