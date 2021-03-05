import React from 'react';
import './Desktop.scss';
import ShortcutLayer from '../components/shortcutlayer/ShortcutLayer';
import Taskbar from '../components/taskbar/Taskbar';
import NotepadApp from '../apps/NotepadApp';

class Desktop extends React.Component {

  render(){
    return (
      <div className="desktop screen show">
        <ShortcutLayer/>
        <NotepadApp />
        <Taskbar />
      </div>
    )
  }
}

export default Desktop;
