import { useRecoilState, useRecoilValue } from "recoil"
import { Categories, IToDo } from "../types/dataTypes"
import { ReactSelectEvent } from "../types/reactEvent"
import { categoryState, toDoSelector } from "./atoms"
import CreateToDo from "./CreateToDo"
import ToDo from "./ToDo"

function TodoList () {
	const toDos = useRecoilValue(toDoSelector)
	const [category, setCategory] = useRecoilState(categoryState)
	const onInput = (event: ReactSelectEvent) => {
		const { currentTarget: {value}} = event
		setCategory(value as any)
	}
	const makeWorks = (work: IToDo): JSX.Element => {
		return <ToDo key={work.id} {...work} />		
	}
	const options = ["To Do", "Doing", "Done"]
	const makeOptions = (options: string[]) => {
		return options.map((option: string, index) => <option value={index}>{option}</option>)
	} 
	return (
		<div>
			<h1>Category</h1>
			<br />
			<select>
				{makeOptions(options)}
			</select>
			<select value={category} onInput={onInput}>
				<option value={Categories.TO_DO}>To Do</option>
				<option value={Categories.DOING}>Doing</option>
				<option value={Categories.DONE}>Done</option>
			</select>
			<hr />
			<h1>To Dos</h1>
			<br />
			<CreateToDo />
			{
				toDos?.map((toDo, index) => {
					return (
						<ul key={index}>
							{makeWorks(toDo)}
						</ul>
					)
				})	
			}
		</div>
	)	
}

export default TodoList