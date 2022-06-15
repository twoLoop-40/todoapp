import { useEffect } from "react"
import { RecoilState, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { ICategory, IToDo } from "../types/dataTypes"
import { categoryState, toDoState } from "./atoms"
import CreateCategory from "./CreateCategory"
import CreateToDo from "./CreateToDo"
import ToDo from "./ToDo"

// function useStorage () {
// 	const useGetStorage = <T extends unknown> (key: string, state: RecoilState<T[]>) => {
// 		const items: string | null = localStorage.getItem(key)
// 		const storedState: T[] =  items ? JSON.parse(items) : []
// 		const setState = useSetRecoilState(state)
// 		useEffect(() => {
// 			return storedState.length === 0 
// 			? undefined
// 			: setState(storedState)
// 		}, [])
// 	}
// 	const useSetStorage = <T extends unknown> (key: string, changedState: RecoilState<T[]>) => {
// 		const [state, setState] = useRecoilValue(changedState)
// 		useEffect(() => {
// 			return !state 
// 			? undefined
// 			: localStorage.setItem(key, JSON.stringify(state))
// 		}, [state])
// 	}
// 	return { useGetStorage, useSetStorage }
// }
function TodoList () {
	const [toDos, setToDos] = useRecoilState(toDoState)
	const makeToDoList = (toDos:IToDo[]) => {
		const items = localStorage.getItem("toDos")
		const toDoList: IToDo[] = !items ? [] : JSON.parse(items)
		const filteredToDoList = toDoList.filter((oldToDo) => {
			return !toDos.find((toDo) => toDo.id === oldToDo.id)
		}) 
		return filteredToDoList.concat(toDos)
	}		
	useEffect(() => {
		const toDoList = makeToDoList(toDos)
		if(toDos.length !== 0) localStorage.setItem("toDos", JSON.stringify(toDoList)) 
	}, [toDos])
	
	const loadToDos = () => {
		const items = localStorage.getItem("toDos")
		const toDos: IToDo[] = !items ? [] : JSON.parse(items)
		localStorage.clear()
		setToDos((oldToDos) => {
			return [...toDos]
		})		
	}
	const clearToDos = () => {
		localStorage.clear()
	}
	return (
		<div>
			<h1>Category</h1>
			<br />
			<CreateCategory />
			<hr />
			<h1>To Dos</h1>
			<br />
			<button onClick={loadToDos}>Load Old ToDos</button>
			<button onClick={clearToDos}>clear Old ToDos</button>
			<br />
			<CreateToDo />
			<ToDo />
		</div>
	)	
}

export default TodoList