import Scenes from "@/components/EachScene/EachScene";
import React from "react";

const scene = ({ data }) => {
	return (
		<div>
			<Scenes data={data} />
		</div>
	);
};

export default scene;

export async function getStaticPaths() {
	const data = await import("../data/data.json");
	const paths = [...data.vung_tau_before, ...data.vung_tau_after].map(
		({ id }) => ({
			params: { id: id.toString() },
		})
	);
	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps({ params }) {
	const id = params.id;
	const data = await import("../data/data.json");
	const item = [...data.vung_tau_before, ...data.vung_tau_after].find(
		(item) => item.id.toString() === id
	);
	return {
		props: {
			data: item,
		},
	};
}
