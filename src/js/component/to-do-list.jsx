import React, { useState } from "react";
import PropTypes from "prop-types";

const ToDoList = props => {
	const [inputText, setInputText] = useState("");
	const [validation, setValidation] = useState(true);

	const handleForm = event => {
		setInputText(event.target.value);
	};
	const submit = event => {
		event.preventDefault();
		if (inputText.trim() !== "") {
			props.taskNew(inputText);
			setInputText("");
			setValidation(true);
		} else {
			setValidation(false);
		}
	};

	ToDoList.propTypes = {
		taskNew: PropTypes.string
	};

	return (
		<div className="text-center mt-5">
			<h1 className="title">To-Do List</h1>
			<form
				className="form d-flex justify-content-center"
				onSubmit={submit}>
				<input
					className="inputUp"
					placeholder="What will you do today?"
					value={inputText}
					onChange={handleForm}
				/>
			</form>

			{!validation && (
				<div className="alert alert-dark" role="alert">
					Write something... Please.
				</div>
			)}
		</div>
	);
};

export default ToDoList;
