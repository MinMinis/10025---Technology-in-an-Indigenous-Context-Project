import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
const Scenes = ({ data }) => {
	const [width, setWidth] = useState(500);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setWidth(window.innerWidth > 900 ? 720 : 500);
		}
	}, []);

	return (
		<div
			className="top-8 bg-cover bg-fixed scene-image"
			style={{
				backgroundImage: `url(${data.image})`,
			}}>
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-slate-800/70 scene-bg">
				<div className="m-auto mx-2 items-center rounded-2xl justify-center flex lg:flex-row flex-col ease-linear duration-200">
					<div className="basis-1/2">
						<Image
							className="rounded-2xl border-8"
							src={data.image}
							width={width}
							height={600}
							alt={data.alt}
						/>
					</div>
					<div className="basis-1/2 mx-1 my-1 p-10 rounded-2xl bg-slate-900/70 border ">
						<h1 className="text-white text-center text-2xl">{data.title}</h1>
						<hr />
						<p className="text-white">{data.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Scenes;
