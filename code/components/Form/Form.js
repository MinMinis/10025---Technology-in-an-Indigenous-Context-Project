import { useRef } from "react";
import React from "react";
import Input from "../Input/Input";
const Form = () => {
	const fullnameRef = useRef();
	const emailRef = useRef();
	const telephoneRef = useRef();
	const reasonapplyRef = useRef();
	const locationRef = useRef();
	const preferJobRef = useRef();
	const imageRef = useRef();
	function addEmployee(employee) {
		fetch("https://cos10025-default-rtdb.firebaseio.com/employees.json", {
			method: "POST",
			body: JSON.stringify(employee),
			header: {
				"Content-Type": "application/json",
			},
		}).then(() => {
			// do something after upload the data
		});
	}
	const handlesubmit = (event) => {
		event.preventDefault();
		const inputName = fullnameRef.current.value;
		const inputEmail = emailRef.current.value;
		const inputTelephone = telephoneRef.current.value;
		const inputReason = reasonapplyRef.current.value;
		const inputLocation = locationRef.current.value;
		const inputPreferJob = preferJobRef.current.value;
		const inputImage = imageRef.current.value;
		fullnameRef.current.value = "";
		emailRef.current.value = "";
		telephoneRef.current.value = "";
		reasonapplyRef.current.value = "";
		locationRef.current.value = "";
		preferJobRef.current.value = "";
		imageRef.current.value = "";

		const registerJob = {
			name: inputName,
			email: inputEmail,
			telephone: inputTelephone,
			location: inputLocation,
			preferJob: inputPreferJob,
			image: inputImage,
			reason: inputReason,
		};
		console.log(registerJob);
		addEmployee(registerJob);
	};
	return (
		<div>
			{" "}
			<div className="w-full h-full">
				<h1 className="text-center my-4 text-2xl font-bold">Contact for Job</h1>
				<form className="w-2/4 m-auto" onSubmit={handlesubmit}>
					<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
						{" "}
						<div className="w-52">
							<label htmlFor="name" className="p-1 text-center">
								Full Name
							</label>
							<br />
							<input
								type="text"
								id="name"
								placeholder="Please input your full name"
								className="p-1 border rounded-lg w-64"
								ref={fullnameRef}
								required
							/>
						</div>
						<div className="w-52">
							<label htmlFor="email" className="p-1 text-center">
								Email
							</label>
							<br />
							<input
								type="text"
								id="email"
								placeholder="Please input your email"
								className="p-1 border rounded-lg w-64"
								ref={emailRef}
								required
							/>
						</div>
						<div className="w-52">
							{" "}
							<label htmlFor="telephone" className="p-1 text-center">
								Telephone
							</label>
							<br />
							<input
								type="text"
								id="telephone"
								placeholder="Please input your telephone"
								className="p-1 border rounded-lg w-64"
								ref={telephoneRef}
								required
							/>
						</div>
						<div className="w-52">
							{" "}
							<label htmlFor="reason" className="p-1 text-center">
								Reason Apply
							</label>
							<br />
							<input
								type="text"
								id="reason"
								placeholder="Please input your reason"
								className="p-1 border rounded-lg w-64"
								ref={reasonapplyRef}
								required
							/>
						</div>
						<div className="w-52">
							{" "}
							<label htmlFor="location" className="p-1 text-center">
								Location
							</label>
							<br />
							<input
								type="text"
								id="location"
								placeholder="Please input your location"
								className="p-1 border rounded-lg w-64"
								ref={locationRef}
								required
							/>
						</div>
						<div className="w-52">
							{" "}
							<label htmlFor="preferjob" className="p-1 text-center">
								Prefer Job
							</label>
							<br />
							<input
								type="text"
								id="preferjob"
								placeholder="Please input your prefer job"
								className="p-1 border rounded-lg w-64"
								ref={preferJobRef}
								required
							/>
						</div>
						<div className="w-52">
							{" "}
							<label htmlFor="profileimage" className="p-1 text-center">
								Profile Image
							</label>
							<br />
							<input
								type="file"
								id="profileimage"
								placeholder="Please input your profile image"
								className="p-1 border rounded-lg w-64"
								ref={imageRef}
								required
							/>
						</div>
						<div className="m-auto w-max hover:bg-slate-900 border rounded-lg hover:text-white px-8 py-2">
							<button>Submit</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
