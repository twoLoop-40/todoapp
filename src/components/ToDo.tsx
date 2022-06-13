import { useSetRecoilState } from "recoil";
import { Categories, IToDo } from "../types/dataTypes";
import { ReactMouseEvent } from "../types/reactEvent";
import { toDoState } from "./atoms";

function ToDo ({ text, category, id }: IToDo) {
	const setToDos = useSetRecoilState(toDoState)
	const onClick = (event: ReactMouseEvent) => {
		const { currentTarget: { name }} = event
		setToDos((oldToDos) => {
			const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id)
			const newToDo = { text, id, category: name as any}
			let newToDos
			return (newToDos = [...oldToDos], newToDos[targetIndex] = newToDo, newToDos)
		})
	}
	
	return (
		<li>
			<span>{text}</span>
			{category !== Categories.DOING && (
				<button name={Categories.DOING} onClick={onClick}>
					Doing
				</button>)}
			{category !== Categories.TO_DO && (
				<button name={Categories.TO_DO} onClick={onClick}>
					To Do
				</button>
			)}
			{category !== Categories.DONE && (
				<button name={Categories.DONE} onClick={onClick}>
					Done
				</button>
			)}
		</li>
	)
}

export default ToDo