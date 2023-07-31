import React from "react";
import Link from "next/link";
import Image from "next/image";
const GalleryItem = ({ image, title, alt, description, id }) => {
	return (
		<div className="hover:border-8 border-8 border-white hover:scale-105 rounded-lg hover:border-black ease-in duration-200">
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
	);
};

export default GalleryItem;
