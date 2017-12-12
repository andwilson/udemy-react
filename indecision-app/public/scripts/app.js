'use strict';

var app = {
	title: 'Visibility Toggle',
	details: 'Hey. These are some details you can now see!',
	buttonName: "Show details"
};

var appRoot = document.getElementById('app');

var buttonState = false;
var onDetails = function onDetails(e) {
	if (buttonState) {
		app.buttonName = "Show Details";
		buttonState = false;
	} else {
		app.buttonName = "Hide Details";
		buttonState = true;
	};
	render();
};

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		React.createElement(
			'button',
			{ onClick: onDetails },
			app.buttonName
		),
		buttonState && React.createElement(
			'p',
			null,
			app.details
		)
	);
	ReactDOM.render(template, appRoot);
};

render();
