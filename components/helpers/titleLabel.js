import React from 'react';

const TitleLabel = (props) => {
	var titleName = props.titleName;
	return (
		<>
			<h1>{titleName}</h1>
			<style jsx>{`
				h1 {
					margin-bottom: 25px;
				}
			`}</style>
		</>
	);
};

export default TitleLabel;
