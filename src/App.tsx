import React from 'react';
import './App.scss';
import AppShell from './components/appshell/AppShell';
import Taskbar from './components/taskbar/Taskbar';

function App() {
  return (
    <div className="computer">
      <div className="boot screen"></div>
      <div className="desktop screen show">
        <AppShell title="Maarten Verheul.txt - Notepad" icon="icon" position={[100, 100]} size={[800, 600]}>
          <div style={{marginLeft: 3, fontFamily: 'consolas'}}>
            <p>Welcome to the website of Maarten Verheul.</p><br/>
            <a target="blank" href="https://www.linkedin.com/in/maarten-verheul/">LinkedIn</a> -&nbsp;
            <a target="blank" href="https://www.instagram.com/meerofmindermaarten/">Instagram</a><br/>
            <div className="img-coffee"></div>
          </div>
        </AppShell>
        <Taskbar />
      </div>
    </div>
  );
}

export default App;
