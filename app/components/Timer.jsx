var React = require('react');

var Timer = (props) => {
	return(
		<div>
			<h1>Timer Rendered</h1>
			{props.children}
		</div>
	)

};

module.exports = Timer;