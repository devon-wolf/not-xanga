import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/login/LoginPage';

// TODO routing, private routes, login tracking
function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <LoginPage />
    </div>
  );
}

export default App;
