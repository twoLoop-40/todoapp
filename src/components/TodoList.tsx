import { useEffect } from "react"
import { RecoilState, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { ICategory, IToDo } from "../types/dataTypes"
import { categoryState, toDoState } from "./atoms"
import CreateCategory from "./CreateCategory"
import CreateToDo from "./CreateToDo"
import ToDo from "./ToDo"

function TodoList () {
	const [toDos, setToDos] = useRecoilState(toDoState)
	const [categories, setCategories] = useRecoilState(categoryState)
	const getStorageItems = <T extends unknown>(key: string) => {
		const items = localStorage.getItem(key)
		const oldList: T[] = !items ? [] : JSON.parse(items)
		return oldList
	}
			
	useEffect(() => {
		const makeFullList = <T extends {id: number}>(key:string, list: T[]) => {
			return getStorageItems<T>(key).filter((oldItem: T) => 
				!list.find((item) => item.id === oldItem.id)).concat(list)
		}
		const toDoList = makeFullList<IToDo>("toDos",toDos)
		const categoryList = makeFullList<ICategory>("category", categories)
		// console.log('저장된 투두스', toDoList)
		// console.log('저장된 카테고리', categoryList)
		if(toDos.length !== 0) {
			localStorage.setItem("toDos", JSON.stringify(toDoList))
			localStorage.setItem("categories", JSON.stringify(categoryList))
		} 
	}, [toDos, categories])
	
	const loadToDos = () => {
		const toDos = getStorageItems<IToDo>("toDos")
		const categories = getStorageItems<ICategory>("categories")
		setToDos(() => [...toDos])
		setCategories(() => [...categories])		
	}
	const clearToDos = () => {
		localStorage.clear()
	}
	// console.log('투두스', toDos)
	// console.log('카테고리스', categories)
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