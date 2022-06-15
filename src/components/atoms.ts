import { atom, selector } from "recoil";
import { ICategory, IToDo } from "../types/dataTypes";

const basicCategories: ICategory[] = [
	{
		id: 0,
		text: "TO_DO"
	},
	{
		id: 1,
		text: "DOING"
	},
	{
		id: 2,
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