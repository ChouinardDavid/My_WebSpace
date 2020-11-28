import React from 'react';

const TitleLabel = (props) => {
    var { titleName, ...rest } = props;
    return (
        <div {...rest}>
            <h1>{titleName}</h1>
            <style jsx>{`
				h1 {
					margin-bottom: 25px;
				}
			`}</style>
        </div>
    );
};

export default TitleLabel;
