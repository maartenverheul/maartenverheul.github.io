import React from 'react';
import './App.scss';
import Bluescreen from './pages/Bluescreen';
import Boot from './pages/Boot';
import Desktop from './pages/Desktop';
import {MemoryProvider, MemoryState, MemoryUpdate} from './context/Memory';
import { AppState } from './types/AppState';

class App extends React.Component {
  
  constructor(props: {}){
    super(props);
    MemoryUpdate.setAppState = (appstate) => this.setState({ appstate });
  }

  state: MemoryState = {
    appstate: AppState.BOOTING,
    stopcode: "CRITICAL_PROCESS_DIED"
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
