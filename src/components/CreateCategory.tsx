import { useForm } from "react-hook-form"
import { useRecoilState } from "recoil"
import { CategoryForm, ICategory } from "../types/dataTypes"
import { ReactSelectEvent } from "../types/reactEvent"
import { categoryState, currentCategory } from "./atoms"

function CreateCategory () {
	const { register, handleSubmit, setValue } = useForm<CategoryForm>()
	const [selectedCategory, setSelectedCategory] = useRecoilState(currentCategory)
	const [categories, setCategories] = useRecoilState(categoryState)
	
	const handleValid = ({ category }: CategoryForm) => {
		setCategories((oldCateries) => {
			const length = oldCateries.length
			const newCategory = { text: category, id: length }
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
	return (
		<div>
			<form onSubmit={handleSubmit(handleValid)}>
				<input {...register("category", {
					required: "Write new category and Enter ..."
				})} placeholder="Add new Category" />
				<button>Add</button>
			</form>
			<form>
				<select value={selectedCategory.id} onInput={onInput}>
					{makeCategoryOptions(categories)}
				</select>
				<button>Delete</button>
			</form>
		</div>	
	)
}

export default CreateCategory