import React from 'react';
import './App.scss';
import Bluescreen from './pages/Bluescreen';
import Boot from './pages/Boot';
import Desktop from './pages/Desktop';
import { AppState } from './types/AppState';
import { AppDispatch, RootState } from './store';
import { connect } from 'react-redux';
import { setBootstate } from './store/actions';
import Win32API from './services/Win32API';
import NotepadApp from './apps/NotepadApp';

type Props = {
  appstate: number,
  bootComplete: () => void
}

Win32API.registerApp("notepad", () => NotepadApp);
Win32API.registerApp("open", (...args) => {
  Win32API.openURL(args[1]);
  return null;
});

class App extends React.Component<Props> {
  
  private static readonly REPOWERTIMEOUT = 1000 * 60 * 24;

  onBluescreenComplete(){
    window.location.reload();
  }

  openContextMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    e.preventDefault();
    return false;
  }

  render(){
    return (
      <div className="computer" onContextMenu={(e) => this.openContextMenu(e)}>
        { this.props.appstate === AppState.BOOTING && <Boot onComplete={() => this.props.bootComplete()}/> }
        { this.props.appstate === AppState.DESKTOP && <Desktop/> }
        { this.props.appstate === AppState.BLUESCREEN && <Bluescreen onComplete={() => this.onBluescreenComplete()}/> }
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  appstate: state.appstate
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  bootComplete: () => dispatch(setBootstate(AppState.DESKTOP))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);