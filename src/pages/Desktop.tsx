import React from 'react';
import './Desktop.scss';
import ShortcutLayer from '../components/shortcutlayer/ShortcutLayer';
import Taskbar from '../components/taskbar/Taskbar';
import ProcessManager from '../components/processmanager/ProcessManager';

type State = {
  content: string,
}

class Desktop extends React.Component {

  state: State = {
    content: ""
  }

  componentDidMount(){
    // this.state.processManager.current?.run(`notepad "Maarten Verheul.txt"`);
  }

  render(){
    return (
      <div className="desktop screen show">
        <ProcessManager />
        <ShortcutLayer/>
        {/* <NotepadApp filename="Maarten Verheul.txt" content={this.state.content} /> */}
        <Taskbar />
      </div>
    )
  }
}

export default Desktop;
