import { useRecoilValue } from "recoil";
import { IToDo } from "../types/dataTypes";
import { toDoSelector } from "./atoms";

function ToDo () {
	//const setToDos = useSetRecoilState(toDoState)
	const selectedToDos = useRecoilValue(toDoSelector)
  // const onClick = (event: ReactMouseEvent) => {
	// 	const { currentTarget: { name }} = event
	// 	setToDos((oldToDos) => {
	// 		const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id)
	// 		const newToDo = { text, id, category: name as any}
	// 		let newToDos
	// 		return (newToDos = [...oldToDos], newToDos[targetIndex] = newToDo, newToDos)
	// 	})
	// }
	const showSeletedToDos = (toDos: IToDo[]) => {
		return toDos.map((toDo) => {
			return <li key={toDo.id}>{toDo.text}</li>
		})
	}
	return (
		<ul>{showSeletedToDos(selectedToDos)}</ul>
	)
}

export default ToDo