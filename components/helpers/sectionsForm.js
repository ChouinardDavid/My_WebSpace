import React from 'react';

const SectionForm = (props) => {
	console.log(props.className);
	return (
		<>
			<div className={props.className}>{props.children}</div>
			<style jsx>{`
				div {
					margin-top: 75px;
				}
			`}</style>
		</>
	);
};

export default SectionForm;
