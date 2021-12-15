import React, { useState } from "react";
import ToDoList from "./to-do-list.jsx";
import Task from "./task.jsx";

//include images into your bundle

//create your first component
const AppToDoList = () => {
	const [taskList, setTaskList] = useState([]);

	const taskNew = task => {
		setTaskList([task, ...taskList]);
	};

	const deleteTask = id => {
		const filterlist = taskList.filter((e, key) => key !== id);
		setTaskList(filterlist);
	};

	const upgradeTask = (id, task) => {
		const upgradeList = taskList.map((e, key) => {
			if (key === id) {
				e = task;
			}
			return e;
		});

		setTaskList(upgradeList);
	};

	return (
		<div className="app">
			<ToDoList taskNew={taskNew} />
			<div>
				{taskList.map((e, key) => (
					<Task
						key={key}
						task={e}
						deleteTask={deleteTask}
						id={key}
						edit={upgradeTask}
					/>
				))}
			</div>
		</div>
	);
};

export default AppToDoList;
