import React from 'react';
import './Shortcut.scss';

type Props = {
  position: [number, number],
  action: () => void
}
type State = {
  position: { x: number, y: number },
  selected: boolean
}

class Shortcut extends React.Component<Props> {

  private static SHORTCUTS: Shortcut[] = [];

  public static deselectAll(): void {
    this.SHORTCUTS.forEach((e, i) => {
      e.deselect();
    });
  }

  state: State = {
    position: {x: this.props.position[0], y: this.props.position[1]},
    selected: false
  };

  constructor(props: Props){
    super(props);
    Shortcut.SHORTCUTS.push(this);
  }

  private select(): void {
    Shortcut.deselectAll();
    this.setState({ selected: true });
  }
  private deselect(): void {
    this.setState({ selected: false });
  }

  render(){
    return (
      <div className={"shortcut" + (this.state.selected?" selected":"")} style={{gridColumn: this.state.position.x, gridRow: this.state.position.y}} onPointerUp={() => this.select()} onDoubleClick={() => this.props.action()}>
        <div className="shortcut-icon">
          <div className="shortcut-arrow"></div>
        </div>
        <div className="shortcut-title">Hoi</div>
      </div>
    );
  }
}

export default Shortcut;
