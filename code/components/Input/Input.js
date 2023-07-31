import React from "react";

const Input = ({
	type = "text",
	label,
	id,
	placeholder = "Please fill in",
	value,
	onChange,
}) => {
	return (
		<>
			<label htmlFor={id} className="p-1 text-center">
				{label}
			</label>
			<br />
			<input
				value={value}
				type={type}
				id={id}
				name={label}
				placeholder={placeholder}
				className="p-1 border rounded-lg w-64"
				onChange={onChange}
				// required
			/>
		</>
	);
};

export default Input;
