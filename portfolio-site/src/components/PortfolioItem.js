import React from 'react';

const PortfolioItem = (props) => (
		<div>
			<p>This is portfolio item {props.match.params.id}</p>
		</div>
	);

export default PortfolioItem;