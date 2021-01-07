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
            <div className="app-icon">

            </div>
            <span className="app-title">*Untitled - Notepad</span>
          </div>
          <div className="app-content">
            Maarten Verheul.
            <br/>
            <br/>
            <a target="blank" href="https://www.linkedin.com/in/maarten-verheul/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
