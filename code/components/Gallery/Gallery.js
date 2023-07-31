import React from "react";
import { useState } from "react";
import GalleryItem from "./GalleryItem";
const Gallery = ({ data1, data2 }) => {
	const [before, setBefore] = useState(true);
	const [after, setAfter] = useState(false);
	const beforeState = () => {
		setBefore(true);
		setAfter(false);
	};
	const afterState = () => {
		setBefore(false);
		setAfter(true);
	};

	return (
		<div className="mb-6">
			<h1 className="text-center text-4xl my-4">Image of Vung Tau</h1>
			<div className="m-auto p-4 items-center text-center">
				<button
					className={
						before
							? "mx-4 border-4 bg-black text-white border-gray-950 rounded-lg p-4 hover:bg-slate-700 hover:text-grey text-xl"
							: "mx-4 border-4 border-gray-950 rounded-lg p-4 hover:bg-slate-700 hover:text-white text-xl"
					}
					onClick={beforeState}>
					Before pollution
				</button>
				<button
					className={
						after
							? "mx-4 border-4 bg-black text-white border-gray-950 rounded-lg p-4 hover:bg-slate-700 hover:text-grey text-xl"
							: "mx-4 border-4 border-gray-950 rounded-lg p-4 hover:bg-slate-700 hover:text-white text-xl"
					}
					onClick={afterState}>
					After pollution
				</button>
			</div>
			<div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-6 my-2">
				{before &&
					data1.map(({ image, title, alt, description, id }) => (
						<GalleryItem
							key={id}
							image={image}
							title={title}
							alt={alt}
							description={description}
							id={id}
						/>
					))}
				{after &&
					data2.map(({ image, title, alt, description, id }) => (
						<GalleryItem
							key={id}
							image={image}
							title={title}
							alt={alt}
							description={description}
							id={id}
						/>
					))}
			</div>
		</div>
	);
};

export default Gallery;
