var React = require('react');

var Nav = require('Nav');

var Main = (props) => {
	return(
		<div>
			<Nav/>
			<div>
				<div>
					<h1>Main.jsx Rendered</h1>
					{props.children}
				</div>
			</div>
		</div>
	)

};

module.exports = Main;
