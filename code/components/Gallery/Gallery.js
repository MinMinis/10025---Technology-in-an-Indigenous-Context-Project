import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Gallery = ({ data1, data2 }) => {
	const [before, setBefore] = useState(true);
	const [after, setAfter] = useState(false);
	const [activebefore, setActivebefore] = useState(before);
	const [activeafter, setActiveafter] = useState(after);
	const beforeState = () => {
		if (before) {
			setBefore(before);
			setActivebefore(before);
		} else {
			setBefore((before) => !before);
			setActivebefore((activebefore) => !activebefore);
			setAfter((after) => !after);
			setActiveafter((activeafter) => !activeafter);
		}
	};
	const afterState = () => {
		if (after) {
			setAfter(after);
			setActiveafter(after);
		} else {
			setAfter((after) => !after);
			setActiveafter((activeafter) => !activeafter);
			setBefore((before) => !before);
			setActivebefore((activebefore) => !activebefore);
		}
	};

	return (
		<div className="mb-6">
			<h1 className="text-center text-4xl my-4">Image of Vung Tau</h1>
			<div className="m-auto p-4 items-center text-center">
				<button
					className={
						activebefore
							? "mx-4 border-4 bg-black text-white border-gray-950 rounded-lg p-4 hover:bg-slate-700 hover:text-grey text-xl"
							: "mx-4 border-4 border-gray-950 rounded-lg p-4 hover:bg-slate-700 hover:text-white text-xl"
					}
					onClick={beforeState}>
					Before pollution
				</button>
				<button
					className={
						activeafter
							? "mx-4 border-4 bg-black text-white border-gray-950 rounded-lg p-4 hover:bg-slate-700 hover:text-grey text-xl"
							: "mx-4 border-4 border-gray-950 rounded-lg p-4 hover:bg-slate-700 hover:text-white text-xl"
					}
					onClick={afterState}>
					After pollution
				</button>
			</div>
			<div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-6 my-2">
				{before &&
					data1.map(({ image, title, alt, description, id }, index) => (
						<div
							key={index}
							className="hover:border-8 hover:scale-105 rounded-lg border-black ease-in duration-200">
							{" "}
							<Link href={`/scenes/${id}`}>
								{" "}
								<Image
									width={1000}
									height={500}
									src={image}
									alt={alt}
									style={{ objectFit: `cover` }}
									className="rounded-md"
								/>
								<div className="flex justify-center">{title}</div>
							</Link>
						</div>
					))}
				{after &&
					data2.map(({ image, title, alt, description, id }, index) => (
						<div
							key={index}
							className="hover:border-8 hover:scale-105 rounded-lg border-black ease-in duration-200">
							<Link href={`/scenes/${id}`}>
								{" "}
								<Image
									width={1000}
									height={500}
									src={image}
									alt={alt}
									style={{ objectFit: `cover` }}
									className="rounded-md"
								/>
								<div className="flex justify-center">{title}</div>
							</Link>
						</div>
					))}
			</div>
		</div>
	);
};

export default Gallery;
