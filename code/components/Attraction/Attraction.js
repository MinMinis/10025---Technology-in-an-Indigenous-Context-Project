import React from "react";
import Image from "next/image";

const Attraction = () => {
	return (
		<div className="w-full">
			<h1 className="text-4xl text-center my-8">Attractions</h1>
			<div>
				<div className="flex flex-col lg:flex-row md:flex-row sm:flex-col w-full my-4">
					{" "}
					<div className="sm:basis-1 md:basis-1/2 lg:basis-1/2 sm:mx-0 md:mx-8 lg:mx-8 my-2 w-screen">
						<Image
							className="rounded-2xl"
							src={
								"https://images.unsplash.com/photo-1623596711744-c10ed15581d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1149&q=80"
							}
							width={500}
							height={900}
							alt="Image"
						/>
					</div>{" "}
					<div className="flex sm:basis-1 md:basis-1/2 lg:basis-1/2 sm:mx-0 md:mx-8 lg:mx-8 my-2 items-center justify-center">
						<p>
							Vung Tau Beach is a popular tourist destination in Vietnam, known
							for its white sand, clear blue water, and stunning views of the
							South China Sea. Visitors can enjoy a variety of activities on the
							beach, including swimming, sunbathing, surfing, and fishing. There
							are also a number of restaurants and shops located near the beach,
							where visitors can enjoy fresh seafood and other local delicacies.
							In addition to its beautiful beach, Vung Tau also offers a variety
							of other attractions, including the Vung Tau Lighthouse, the
							Christ of Vung Tau, and the Cua Dai Beach. Whether you&apos;re
							looking for a relaxing beach vacation or a more active exploration
							of Vietnam&apos;s natural beauty, Vung Tau is the perfect
							destination for you.
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row md:flex-row sm:flex-col w-full my-4">
					{" "}
					<div className="sm:basis-1 md:basis-1/2 lg:basis-1/2 sm:mx-0 md:mx-8 lg:mx-8 my-2 w-screen">
						<Image
							className="rounded-2xl"
							src={
								"https://images.unsplash.com/photo-1623596711744-c10ed15581d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1149&q=80"
							}
							width={500}
							height={900}
							alt="Image"
						/>
					</div>{" "}
					<div className="flex sm:basis-1 md:basis-1/2 lg:basis-1/2 sm:mx-0 md:mx-8 lg:mx-8 my-2 items-center justify-center">
						<p>
							Vung Tau Beach is a popular tourist destination in Vietnam, known
							for its white sand, clear blue water, and stunning views of the
							South China Sea. Visitors can enjoy a variety of activities on the
							beach, including swimming, sunbathing, surfing, and fishing. There
							are also a number of restaurants and shops located near the beach,
							where visitors can enjoy fresh seafood and other local delicacies.
							In addition to its beautiful beach, Vung Tau also offers a variety
							of other attractions, including the Vung Tau Lighthouse, the
							Christ of Vung Tau, and the Cua Dai Beach. Whether you&apos;re
							looking for a relaxing beach vacation or a more active exploration
							of Vietnam&apos;s natural beauty, Vung Tau is the perfect
							destination for you.
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row md:flex-row sm:flex-col w-full my-4">
					{" "}
					<div className="sm:basis-1 md:basis-1/2 lg:basis-1/2 sm:mx-0 md:mx-8 lg:mx-8 my-2 w-screen">
						<Image
							className="rounded-2xl"
							src={
								"https://images.unsplash.com/photo-1623596711744-c10ed15581d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1149&q=80"
							}
							width={500}
							height={900}
							alt="Image"
						/>
					</div>{" "}
					<div className="flex sm:basis-1 md:basis-1/2 lg:basis-1/2 sm:mx-0 md:mx-8 lg:mx-8 my-2 items-center justify-center">
						<p>
							Vung Tau Beach is a popular tourist destination in Vietnam, known
							for its white sand, clear blue water, and stunning views of the
							South China Sea. Visitors can enjoy a variety of activities on the
							beach, including swimming, sunbathing, surfing, and fishing. There
							are also a number of restaurants and shops located near the beach,
							where visitors can enjoy fresh seafood and other local delicacies.
							In addition to its beautiful beach, Vung Tau also offers a variety
							of other attractions, including the Vung Tau Lighthouse, the
							Christ of Vung Tau, and the Cua Dai Beach. Whether you&apos;re
							looking for a relaxing beach vacation or a more active exploration
							of Vietnam&apos;s natural beauty, Vung Tau is the perfect
							destination for you.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Attraction;
