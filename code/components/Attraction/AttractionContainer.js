import React from "react";

const AttractionContainer = ({ children }) => {
	return (
		<div className="flex flex-col lg:flex-row md:flex-row sm:flex-col w-full my-4">
			{children}
		</div>
	);
};

export default AttractionContainer;
