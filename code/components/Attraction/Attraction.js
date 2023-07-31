import React from "react";
import Image from "next/image";
import DescriptionAttraction from "./DescriptionAttraction";
import AttractionContainer from "./AttractionContainer";
import ImageContainer from "./ImageContainer";
import { AttractionData } from "./AttractionData";
const Attraction = () => {
	return (
		<div className="w-auto overflow-hidden">
			<h1 className="text-4xl text-center font-semibold my-8">Attractions</h1>
			<div className="w-auto mx-4">
				{AttractionData.map((attraction, index) => {
					return (
						<AttractionContainer key={index}>
							<ImageContainer>
								<Image
									className="rounded-xl"
									src={attraction.image}
									width={500}
									height={900}
									alt="Image"
								/>
							</ImageContainer>
							<DescriptionAttraction>
								<p className="text-justify">{attraction.description}</p>
							</DescriptionAttraction>
						</AttractionContainer>
					);
				})}
			</div>
		</div>
	);
};

export default Attraction;
