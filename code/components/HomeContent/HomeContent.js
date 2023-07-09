import React from "react";
const Homecontent = ({ heading, message, backgroundimg }) => {
	return (
		<div
			// change the background img based on props
			className={
				backgroundimg !== "default-img"
					? `flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover ${backgroundimg}`
					: "flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover default-img"
			}>
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"></div>
			<div className="p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]">
				<h2 className="text-5xl font-bold">{heading}</h2>
				<p className="py-5 text-xl">{message}</p>
			</div>
		</div>
	);
};

export default Homecontent;
