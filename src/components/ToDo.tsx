import { IToDo } from "../types/dataTypes";

function ToDo ({ text }: IToDo) {
	return (
		<li>
			<span>{text}</span>
			<button>Doing</button>
			<button>Todo</button>
			<button>Done</button>
		</li>
	)
}

export default ToDo