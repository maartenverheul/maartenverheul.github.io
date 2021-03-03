import React from 'react';
import './App.scss';
import AppShell from './components/appshell/AppShell';
import ShortcutLayer from './components/shortcutlayer/ShortcutLayer';
import Taskbar from './components/taskbar/Taskbar';

class App extends React.Component {
  
  render(){
    return (
      <div className="computer">
        <div className="boot screen"></div>
        <div className="desktop screen show">
          <ShortcutLayer/>
          <AppShell title="Maarten Verheul.txt - Notepad" icon="icon" position={[100, 100]} size={[800, 600]}>
            <div style={{marginLeft: 3, fontFamily: 'consolas'}}>
              <p>Welcome to the website of Maarten Verheul.<br/>
              <a target="blank" href="https://www.linkedin.com/in/maarten-verheul/">LinkedIn</a> -&nbsp;
              <a target="blank" href="https://www.instagram.com/meerofmindermaarten/">Instagram</a>
              </p><br/>
              <div className="img-coffee"></div>
            </div>
          </AppShell>
          <Taskbar />
        </div>
      </div>
    )
  }
}

export default App;
