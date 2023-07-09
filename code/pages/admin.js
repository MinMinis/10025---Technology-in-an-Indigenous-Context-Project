import React, { useEffect, useState } from "react";

const Admin = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	useEffect(() => {
		//update the data from the fire base
		fetch("https://cos10025-default-rtdb.firebaseio.com/employees.json")
			.then((response) => {
				//return in json format
				return response.json();
			})
			.then((data) => {
				const employees = [];
				for (const key in data) {
					employees.push({
						name: data[key].name,
						email: data[key].email,
						telephone: data[key].telephone,
						location: data[key].location,
						preferJob: data[key].preferJob,
						image: data[key].image,
						reason: data[key].reason,
					});
				}
				setData(employees);
				//storing and displaying data
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h1>Admin</h1>
			{data.map((item) => {
				return (
					<ul key={item.name}>
						<li>{item.name}</li>
						<li>{item.email}</li>
						<li>{item.location}</li>
						<li>{item.preferJob}</li>
						<li>{item.telephone}</li>
						<li>{item.image}</li>
					</ul>
				);
			})}
		</div>
	);
};

export default Admin;
