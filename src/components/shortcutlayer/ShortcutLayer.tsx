import React from 'react';
import Shortcut from './Shortcut';
import './ShortcutLayer.scss';

type State = {
  shortcuts: {
    position: [number, number],
    action: () => void
  }[]
}

class ShortcutLayer extends React.Component {

  state: State = {
    shortcuts: [
      { position: [1, 1], action: () => { console.log("Open shortcut"); } },
      { position: [2, 1], action: () => { console.log("Open shortcut"); } },
      { position: [3, 1], action: () => { console.log("Open shortcut"); } },
      { position: [4, 1], action: () => { console.log("Open shortcut"); } },
      { position: [1, 2], action: () => { console.log("Open shortcut"); } },
      { position: [2, 2], action: () => { console.log("Open shortcut"); } },
      { position: [3, 2], action: () => { console.log("Open shortcut"); } },
      { position: [4, 2], action: () => { console.log("Open shortcut"); } },
    ]
  }

  deselectAll(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    Shortcut.deselectAll();
  }

  render(){
    return (
      <div className="shortcutlayer">
        {
          this.state.shortcuts.map((e,i) => <Shortcut key={i} position={e.position} action={e.action}/>)
        }
        <div className="shortcutlayer-background" onClick={(e) => this.deselectAll(e)}></div>
      </div>
    );
  }
}

export default ShortcutLayer;
