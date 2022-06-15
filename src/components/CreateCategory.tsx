import { useForm } from "react-hook-form"
import { useRecoilState, useSetRecoilState } from "recoil"
import { CategoryForm, ICategory } from "../types/dataTypes"
import { ReactMouseEvent, ReactSelectEvent } from "../types/reactEvent"
import { categoryState, currentCategory, toDoState } from "./atoms"

function CreateCategory () {
	const { register, handleSubmit, setValue } = useForm<CategoryForm>()
	const [selectedCategory, setSelectedCategory] = useRecoilState(currentCategory)
	const [categories, setCategories] = useRecoilState(categoryState)
	const setToDos = useSetRecoilState(toDoState)
	
	const handleValid = ({ category }: CategoryForm) => {
		setCategories((oldCateries) => {
			const newCategory = { text: category, id: Date.now() }
			return [...oldCateries, newCategory]
		})
		setValue("category", "")
	}
	const onInput = (event: ReactSelectEvent) => {
		const { currentTarget: { value }} = event
		setSelectedCategory(() => categories[parseInt(value)])
	}
	const makeCategoryOptions = (categories: ICategory[]) => {
		return categories.map((category) => {
			return <option key={category.id} value={category.id}>{category.text}</option>
		})
	}
	// console.log("카테고리", categories)
	const deleteCategory = (event: ReactMouseEvent) => {
		event.preventDefault()
		setToDos((toDos) => 
			toDos.filter((toDo) => toDo.category.id !== selectedCategory.id)
		)
		setCategories((currentCategories) => {
			const rest = currentCategories.filter((category) => 
				category.id !== selectedCategory.id)
			return rest
		})
		setSelectedCategory(() => categories.length > 0 ? categories.filter(v => v)[0] : {id: Date.now(), text: ""})
						
	}
	
	
	return (
		<div>
			<form onSubmit={handleSubmit(handleValid)}>
				<input {...register("category", {
					required: "Write new category and Enter ..."
				})} placeholder="Add new Category" />
				<button>Add</button>
			</form>
			<form>
				<select value={selectedCategory ? selectedCategory.id : undefined} onInput={onInput}>
					{makeCategoryOptions(categories)}
				</select>
				<button onClick={deleteCategory}>Double click Delete</button>
			</form>
		</div>	
	)
}

export default CreateCategory