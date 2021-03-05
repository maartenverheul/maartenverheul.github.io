import React from 'react';
import Memory from '../context/Memory';
import './Boot.scss';

type Props = {
  onComplete?: () => void
}

class Boot extends React.Component<Props> {
  
  state = {
    width: "0%"
  }

  timeout = 500
  duration = 1000

  componentDidMount(){
    setTimeout(() => this.setState({width: "100%"}), this.timeout);
    setTimeout(() => { if(this.props.onComplete) this.props.onComplete() }, this.timeout + this.duration)
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
