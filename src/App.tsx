import React from 'react';
import './App.scss';
import Bluescreen from './pages/Bluescreen';
import Boot from './pages/Boot';
import Desktop from './pages/Desktop';

enum AppState {
  BOOTING,
  DESKTOP,
  BLUESCREEN
}

class App extends React.Component {
  
  state = {
    appstate: AppState.BOOTING,
    stopcode: "CRITICAL_PROCESS_DIED"
  }

  onBluescreenComplete(){
    window.location.reload();
  }

  render(){
    return (
      <div className="computer">
        { this.state.appstate === AppState.BOOTING && <Boot onComplete={() => this.setState({appstate: AppState.DESKTOP})}/> }
        { this.state.appstate === AppState.DESKTOP && <Desktop/> }
        { this.state.appstate === AppState.BLUESCREEN && <Bluescreen onComplete={() => this.onBluescreenComplete()} stopcode={this.state.stopcode}/> }
        {/* <Desktop /> */}
      </div>
    )
  }
}

export default App;
