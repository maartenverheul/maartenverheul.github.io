import React from 'react';
import { connect } from 'react-redux';
import Win32API from '../../services/Win32API';
import { AppDispatch, RootState } from '../../store';
import { ShortcutConfig } from '../../types/ShortcutConfig';
import Shortcut from './Shortcut';
import './ShortcutLayer.scss';

type Props = {
  shortcuts: ShortcutConfig[]
}

class ShortcutLayer extends React.Component<Props> {

  deselectAll(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    // Shortcut.deselectAll();
  }

  onShortcutAction(target: string){
    (window as any).pm.run(target);
  }

  renderShortcuts() { 
    return this.props.shortcuts.map((e,i) => <Shortcut key={i} position={e.position} title={e.title} selected={false} icon={Win32API.getIcon(e.target)} action={() => this.onShortcutAction(e.target)}/>)
  }

  render(){
    return (
      <div className="shortcutlayer">
        { this.renderShortcuts() }
        <div className="shortcutlayer-background" onClick={(e) => this.deselectAll(e)}></div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  shortcuts: state.shortcuts
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ShortcutLayer);
