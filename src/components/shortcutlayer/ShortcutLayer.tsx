import React from 'react';
import Memory from '../../context/Memory';
import Shortcut from './Shortcut';
import './ShortcutLayer.scss';

type State = {

}

class ShortcutLayer extends React.Component {

  state: State = {

  }

  deselectAll(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    Shortcut.deselectAll();
  }

  render(){
    return (
      <div className="shortcutlayer">
        <Memory>
          { memory => memory.shortcuts.map((e,i) => <Shortcut key={i} position={e.position} title={e.title} icon={e.icon} action={e.action}/>)}
        </Memory>
        <div className="shortcutlayer-background" onClick={(e) => this.deselectAll(e)}></div>
      </div>
    );
  }
}

export default ShortcutLayer;
