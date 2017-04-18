var React = require('react');
var Clock = require('Clock');
var TimerControls = require('TimerControls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count +1
    	});
    }, 1000);
  },
  handleSetTimer: function (seconds) {
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },
  render: function () {
    var {count, timerStatus} = this.state;
    var renderControlArea = () => {
        return <TimerControls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>;
    };

    return (
      <div>
        <h1 className="page-title">Timer Clock</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
