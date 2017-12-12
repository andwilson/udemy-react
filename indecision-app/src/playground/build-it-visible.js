const app = {
	title: 'Visibility Toggle',
	details: 'Hey. These are some details you can now see!',
	buttonName: "Show details"
};

const appRoot = document.getElementById('app');

let buttonState = false;
const onDetails = (e) => {
	if (buttonState) {
		app.buttonName = "Show Details";
		buttonState = false;
	} else {
		app.buttonName = "Hide Details";
		buttonState = true;
	};
	render();
};

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			<button onClick={onDetails}>{app.buttonName}</button>
			{buttonState && <p>{app.details}</p>}
		</div>
	);
	ReactDOM.render(template, appRoot);
}

render();