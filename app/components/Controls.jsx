var React = require('react');

var Controls = React.createClass({
	propTypes: {
		countdownStatus: React.PropTypes.string.isRequired,
	},
	render: function() {
		var {countdownStatus} = this.props;
		var renderStartStopButtons = () => {
			if (countdownStatus === 'started') {
				return <button className="button secondary">Pause</button>
			} else if (countdownStatus === 'paused') {
				return <button className="button primary">Start</button>
			}
		};

		return(
			<div className="controls">
				{renderStartStopButtons()}
				<button className="button alert hollow">Clear</button>
			</div>

		)
	}
});

module.exports = Controls;