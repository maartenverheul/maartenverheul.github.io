import React from 'react';
import './AppShell.scss';

type Props = {
  title: string,
  icon: string,
  resizable?: boolean,
  closable?: boolean
  position: [number, number],
  size: [number, number],
}
type State = {
  position: {x: number, y: number},
  size: {width: number, height: number},
  isMoving: boolean,
  moveOffset: {x: number, y: number}|null,
  moverLocation: {x: number, y: number}|null,
  show: boolean
}

class AppShell extends React.Component<Props> {

  private static readonly MOVERSIZE: [number, number] = [400, 400]

  public state: State = {
    position: {x: this.props.position[0], y: this.props.position[1]},
    size: {width: this.props.size[0], height: this.props.size[1]},
    isMoving: false,
    moveOffset: null,
    moverLocation: null,
    show: true
  }
  private element: React.RefObject<HTMLDivElement>;

  constructor(props: Props){
    super(props);
    this.element = React.createRef<HTMLDivElement>();
  }

  private onPointerDown(e: React.PointerEvent<HTMLDivElement>){
    if(!this.element.current) return;
    this.setState({
      isMoving: true,
      moveOffset: { x: e.clientX - this.element.current.offsetLeft, y: e.clientY - this.element.current.offsetTop },
      moverLocation: { x: e.clientX - this.element.current.offsetLeft - AppShell.MOVERSIZE[0]/2, y: e.clientY - this.element.current.offsetTop - AppShell.MOVERSIZE[0]/2 },
    });
  }
  private onPointerUp(){
    this.setState({
      isMoving: false,
      moveOffset: null,
      moverLocation: null
    });
  }
  private onPointerMove(e: React.PointerEvent<HTMLDivElement>){
    if(this.state.isMoving && this.state.moveOffset) 
    this.setState({
      position: { 
        x: e.clientX - this.state.moveOffset.x, 
        y: e.clientY - this.state.moveOffset.y
      }
    });
  }
  private close(){
    this.destroy();
  }
  private minimize(){

  }
  private maximize(){
    
  }

  public resize(width: number, height: number): void {
    this.setState({
      size: {
        width, height
      }
    })
  }
  public destroy(): void {
    this.setState({
      show: false
    })
  }

  public render() {
    if(!this.state.show) return <p></p>;
    return (
      <div className="app focus" style={{left: this.state.position.x, top: this.state.position.y, width: this.state.size.width, height: this.state.size.height}} ref={this.element}>
        {this.state.isMoving && <div className="app-mover" style={{left: this.state.moverLocation?.x, top: this.state.moverLocation?.y, width: AppShell.MOVERSIZE[0], height: AppShell.MOVERSIZE[1]}} onPointerMove={(e) => this.onPointerMove(e)} onPointerUp={() => this.onPointerUp()}></div>}
        <div className="app-header" onPointerDown={(e) => this.onPointerDown(e)}>
          
            <div className="app-icon icon-notepad"></div>
            <span className="app-title">{this.props.title}</span>
          
          <div className="right">
            <button className="app-header-button red" onMouseDown={() => this.close()}>X</button>
            <button className="app-header-button" onMouseDown={() => this.maximize()}>[]</button>
            <button className="app-header-button" onMouseDown={() => this.minimize()}>-</button>
          </div>
        </div>
        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AppShell;
