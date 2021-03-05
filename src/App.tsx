import React from 'react';
import './App.scss';
import Bluescreen from './pages/Bluescreen';
import Boot from './pages/Boot';
import Desktop from './pages/Desktop';
import {MemoryProvider, MemoryState, MemoryUpdate} from './context/Memory';
import { AppState } from './types/AppState';
import { EdgeIcon, NotepadIcon } from './types/ShortcutIcon';

class App extends React.Component {
  
  constructor(props: {}){
    super(props);
    MemoryUpdate.setAppState = (appstate) => this.setState({ appstate });
  }

  state: MemoryState = {
    appstate: AppState.BOOTING,
    stopcode: "CRITICAL_PROCESS_DIED",
    shortcuts: [
      { position: [1, 1], title: "LinkedIn", icon: EdgeIcon, action: () =>  { this.openURL("https://www.linkedin.com/in/maarten-verheul/"); } },
      { position: [2, 1], title: "Instagram", icon: EdgeIcon, action: () => { this.openURL("https://www.instagram.com/meerofmindermaarten/"); } },
      { position: [2, 3], title: "CV.txt", icon: NotepadIcon, action: () => { console.log("CV"); } },
      { position: [3, 4], title: "Maarten Verheul.txt", icon: NotepadIcon, action: () => { console.log("Notepad"); } },
    ]
  }

  openURL(url: string){
    window.open(url, "_blank");
  }

  onBluescreenComplete(){
    window.location.reload();
  }

  openContextMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    e.preventDefault();
    return false;
  }

  render(){
    return (
      <MemoryProvider value={this.state}>
        <div className="computer" onContextMenu={(e) => this.openContextMenu(e)}>
          { this.state.appstate === AppState.BOOTING && <Boot/> }
          { this.state.appstate === AppState.DESKTOP && <Desktop/> }
          { this.state.appstate === AppState.BLUESCREEN && <Bluescreen onComplete={() => this.onBluescreenComplete()}/> }
          {/* <Desktop /> */}
        </div>
      </MemoryProvider>
    )
  }
}

export default App;
