import { useRecoilValue } from "recoil";
import { IToDo } from "../types/dataTypes";
import { toDoSelector } from "./atoms";

function ToDo () {
	//const setToDos = useSetRecoilState(toDoState)
	// const onClick = (event: ReactMouseEvent) => {
	// 	const { currentTarget: { name }} = event
	// 	setToDos((oldToDos) => {
	// 		const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id)
	// 		const newToDo = { text, id, category: name as any}
	// 		let newToDos
	// 		return (newToDos = [...oldToDos], newToDos[targetIndex] = newToDo, newToDos)
	// 	})
	// }
	const selectedToDos = useRecoilValue(toDoSelector)
	const showSeletedToDos = (toDos: IToDo[]) => 
		toDos.map((toDo) => ( 
			<li key={toDo.id}>
				{toDo.text} <button key={toDo.id}>버튼</button>
			</li>
		))
	return (
		<ul>{showSeletedToDos(selectedToDos)}</ul>
	)
}

export default ToDo