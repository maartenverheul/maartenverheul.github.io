import React from 'react';
import './App.css';
import './helpers.css';

function App() {
  return (
    <div className="computer">
      <div className="boot screen"></div>
      <div className="desktop screen show">
        <div className="app notepad focus" style={{left: 100, top: 100}}>
          <div className="app-header">
            <div className="app-icon"></div>
            <span className="app-title">Maarten Verheul.txt - Notepad</span>
          </div>
          <div className="app-content">
            Welcome to the website of Maarten Verheul.
            <br/>
            <br/>
            <a target="blank" href="https://www.linkedin.com/in/maarten-verheul/">LinkedIn</a> -&nbsp;
            <a target="blank" href="https://www.instagram.com/meerofmindermaarten/">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
