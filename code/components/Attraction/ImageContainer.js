import React from "react";

const ImageContainer = ({ children }) => {
	return (
		<div className="sm:basis-1 md:basis-1/2 lg:basis-1/2 sm:mx-0 md:mx-8 lg:mx-8 my-2 w-screen">
			{children}
		</div>
	);
};

export default ImageContainer;
