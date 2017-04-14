var React = require('react');

var Countdown = (props) => {
	return(
		<div>
			<h1>Countdown Rendered</h1>
			{props.children}
		</div>
	)

};

module.exports = Countdown;