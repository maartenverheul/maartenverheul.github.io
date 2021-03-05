import React from 'react';
import Memory, {MemoryUpdate} from '../context/Memory';
import { AppState } from '../types/AppState';
import './Boot.scss';

type Props = {}

class Boot extends React.Component<Props> {
  
  state = {
    width: "0%"
  }

  timeout = 500
  duration = 1000

  componentDidMount(){
    setTimeout(() => this.setState({width: "100%"}), this.timeout);
    setTimeout(() => { MemoryUpdate.setAppState(AppState.DESKTOP); }, this.timeout + this.duration)
  }

  render(){
    return (
      <Memory>
        {memory => 
          <div className="boot screen">
            <div className="progress">
              <div className="inner" style={{width: this.state.width, transition: `width ${this.duration}ms linear`}}></div>
            </div>
          </div>
        }
      </Memory>
    )
  }
}

export default Boot;
