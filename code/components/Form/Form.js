import { useState } from "react";
import React from "react";
import Input from "../Input/Input";
import InputContainer from "../Input/InputContainer";
const Form = () => {
	const [fullnameRef, setfullnameRef] = useState();
	const [emailRef, setemailRef] = useState();
	const [telephoneRef, settelephoneRef] = useState();
	const [reasonapplyRef, setreasonapplyRef] = useState();
	const [locationRef, setlocationRef] = useState();
	const [preferJobRef, setpreferJobRef] = useState();
	const [imageRef, setimageRef] = useState(null);
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
		const inputName = fullnameRef;
		const inputEmail = emailRef;
		const inputTelephone = telephoneRef;
		const inputReason = reasonapplyRef;
		const inputLocation = locationRef;
		const inputPreferJob = preferJobRef;
		// const formData = new FormData();
		const inputImage = imageRef;
		// console.log(imageRef);
		// formData.append("file", inputImage);

		setfullnameRef("");
		setemailRef("");
		settelephoneRef("");
		setreasonapplyRef("");
		setlocationRef("");
		setpreferJobRef("");
		setimageRef("");

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
		// console.log(formData);
		// addEmployee(registerJob);
	};
	return (
		<div>
			{" "}
			<div className="w-full h-full">
				<h1 className="text-center my-4 text-2xl font-bold">Contact for Job</h1>
				<form className="w-2/4 m-auto" onSubmit={handlesubmit}>
					<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
						{" "}
						<InputContainer>
							<Input
								label="Full name"
								id="name"
								placeholder="Please input in your full name"
								value={fullnameRef}
								onChange={(e) => setfullnameRef(e.target.value)}
							/>
						</InputContainer>
						<InputContainer>
							<Input
								type="email"
								label="Email"
								id="email"
								placeholder="Please input in your email"
								value={emailRef}
								onChange={(e) => setemailRef(e.target.value)}
							/>
						</InputContainer>
						<InputContainer>
							<Input
								type="number"
								label="Telephone"
								id="tel"
								placeholder="Please input in your Telephone"
								value={telephoneRef}
								onChange={(e) => settelephoneRef(e.target.value)}
							/>
						</InputContainer>
						<InputContainer>
							<Input
								label="Location"
								id="location"
								placeholder="Please input in your location"
								value={locationRef}
								onChange={(e) => setlocationRef(e.target.value)}
							/>
						</InputContainer>
						<InputContainer>
							<Input
								label="Prefer Job/Field"
								id="preferjob"
								placeholder="Please input in your prefer job"
								value={preferJobRef}
								onChange={(e) => setpreferJobRef(e.target.value)}
							/>
						</InputContainer>
						<InputContainer>
							<Input
								type="file"
								label="Profile Image"
								id="image"
								placeholder="Please input in your profile image"
								value={imageRef}
								onChange={(e) => (
									console.log(e.target.files[0]), setimageRef(e.target.value)
								)}
							/>
						</InputContainer>
					</div>
					<div className="w-full mx-4 my-4">
						<label>Reason Apply</label>
						<textarea
							className="border-2 border-black rounded-lg resize-none h-24 w-11/12"
							placeholder="Please fill in your reason"
							value={reasonapplyRef}
							onChange={(e) => setreasonapplyRef(e.target.value)}></textarea>
						<button className="m-auto my-8 w-max hover:bg-slate-900 border rounded-lg hover:text-white px-8 py-2">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
