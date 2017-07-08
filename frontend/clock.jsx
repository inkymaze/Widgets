import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    this.intervalId = 0;
    this.monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    // this.state.time = this.state.time.bind(this);
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    const interval = setInterval(this.tick.bind(this), 1000);
    this.intervalId = interval;
  }


  render() {
    return (
      <div className="clock-widget">
        <h1> Big Ben </h1>
          <div className="clock-border">
            <div className="clock-display">
              <div> Date: </div>
              <div> {this.monthNames[this.state.time.getMonth()]}</div>
              <div> {this.state.time.getDate().toString()}</div>
              <div> {this.state.time.getFullYear().toString()}</div>
            </div>

            <div className="clock-display">
              <div> Time: </div>
              <div className="clock-time">
                {this.state.time.getHours().toString()}
              </div>
              <div> : </div>
              <div className="clock-time">
                {this.state.time.getMinutes().toString()}
              </div>
              <div> : </div>
              <div className="clock-time">
                {this.state.time.getSeconds().toString()}
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Clock;
