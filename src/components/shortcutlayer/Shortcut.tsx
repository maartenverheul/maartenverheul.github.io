import React from 'react';
import ShortcutIcon from '../../types/ShortcutIcon';
import './Shortcut.scss';

type Props = {
  position: [number, number],
  icon: ShortcutIcon|null,
  title: string,
  selected: boolean
  action: () => void
}
type State = {
  position: { x: number, y: number }
}

class Shortcut extends React.Component<Props> {

  private static SHORTCUTS: Shortcut[] = [];

  state: State = {
    position: {x: this.props.position[0], y: this.props.position[1]}
  };

  constructor(props: Props){
    super(props);
    Shortcut.SHORTCUTS.push(this);
  }

  private select(): void {
    this.setState({ selected: true });
  }

  render(){
    return (
      <div className={"shortcut" + (this.props.selected?" selected":"")} style={{gridColumn: this.state.position.x, gridRow: this.state.position.y}} onPointerUp={() => this.select()} onDoubleClick={() => this.props.action()}>
        <div className={`shortcut-icon shortcut-icon-${this.props.icon?.path || 'unknown' }`}>
          <div className="shortcut-arrow"></div>
        </div>
        <div className="shortcut-title">{this.props.title}</div>
      </div>
    );
  }
}

export default Shortcut;
