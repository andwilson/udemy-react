console.log('app.js is running!');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: ['One', 'Two']
}
const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length ? 'Here are your options' : 'No options'}</p>
	</div>
);

let count = 0;
const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
		<button id="my-id" className="button">+1</button>
	</div>
);
console.log(templateTwo);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot)