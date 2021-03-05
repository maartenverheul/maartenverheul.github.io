import React from 'react';
import ShortcutIcon, {EdgeIcon, NotepadIcon} from '../../types/ShortcutIcon';
import Shortcut from './Shortcut';
import './ShortcutLayer.scss';

type State = {
  shortcuts: {
    position: [number, number],
    title: string,
    icon: ShortcutIcon,
    action: () => void
  }[]
}

class ShortcutLayer extends React.Component {

  state: State = {
    shortcuts: [
      { position: [1, 1], title: "LinkedIn", icon: EdgeIcon, action: () =>  { this.openURL("https://www.linkedin.com/in/maarten-verheul/"); } },
      { position: [2, 1], title: "Instagram", icon: EdgeIcon, action: () => { this.openURL("https://www.instagram.com/meerofmindermaarten/"); } },
      { position: [2, 3], title: "CV.txt", icon: NotepadIcon, action: () => { console.log("CV"); } },
    ]
  }

  openURL(url: string){
    window.open(url, "_blank");
  }

  deselectAll(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    Shortcut.deselectAll();
  }

  render(){
    return (
      <div className="shortcutlayer">
        {
          this.state.shortcuts.map((e,i) => <Shortcut key={i} position={e.position} title={e.title} icon={e.icon} action={e.action}/>)
        }
        <div className="shortcutlayer-background" onClick={(e) => this.deselectAll(e)}></div>
      </div>
    );
  }
}

export default ShortcutLayer;
