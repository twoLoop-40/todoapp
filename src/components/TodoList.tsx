import { useRecoilValue } from "recoil"
import { IToDo } from "../types/dataTypes"
import { toDoState } from "./atoms"
import CreateToDo from "./CreateToDo"
import ToDo from "./ToDo"

function TodoList () {
	const toDos = useRecoilValue(toDoState)
	return (
		<div>
			<h1>To Dos</h1>
			<hr />
			<CreateToDo />
			<ul>
				{
					toDos.map((toDo:IToDo) => {
						return <ToDo key={toDo.id} {...toDo} />
					})
				}
			</ul>
		</div>
	)	
}

export default TodoList