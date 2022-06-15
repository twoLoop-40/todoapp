import { atom, selector } from "recoil";
import { ICategory, IToDo } from "../types/dataTypes";

const basicCategories: ICategory[] = [
		{
			id: Date.now(),
			text: "TO_DO"
		},
		{
			id: Date.now() + 1,
			text: "DOING"
		},
		{
			id: Date.now() + 2,
			text: "DONE"
		}
	]

export const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: [],
})

export const toDoSelector = selector({
	key: "toDoSelector",
	get: ({ get }) => {
		const toDos = get(toDoState)
		const selectedCategory = get(currentCategory)				
		return toDos.filter((toDo) => toDo.category.id === selectedCategory.id )
	}
})

export const categoryState = atom<ICategory[]>({
	key: "category",
	default: [...basicCategories]
})  

export const currentCategory = atom<ICategory>({
	key: "currentCategory",
	default: basicCategories[0]
})