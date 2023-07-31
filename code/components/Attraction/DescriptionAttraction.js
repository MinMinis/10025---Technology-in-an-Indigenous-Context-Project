import React from "react";

const DescriptionAttraction = ({ children }) => {
	return (
		<div className="flex sm:basis-1 md:basis-1/2 lg:basis-1/2 sm:mx-0 md:mx-8 lg:mx-8 my-2 items-center justify-center">
			{children}
		</div>
	);
};

export default DescriptionAttraction;
