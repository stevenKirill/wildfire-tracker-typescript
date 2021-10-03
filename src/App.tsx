import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <Routes/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
