import React from 'react';
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
    setTimeout(() => { this.props.onComplete?.() }, this.timeout + this.duration)
  }

  render(){
    return (
      <div className="boot screen">
        <div className="progress">
          <div className="inner" style={{width: this.state.width, transition: `width ${this.duration}ms linear`}}></div>
        </div>
      </div>
    )
  }
}

export default Boot;
