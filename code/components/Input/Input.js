import React from "react";

const Input = ({ type, label, id, placeholder, ref }) => {
	return (
		<>
			<label htmlFor={id} className="p-1 text-center">
				{label}
			</label>
			<br />
			<input
				type={type ? type : "text"}
				id={id}
				placeholder={placeholder}
				className="p-1 border rounded-lg w-64"
				ref={ref}
			/>
		</>
	);
};

export default Input;
