import { atom, selector } from "recoil";
import { Categories, IToDo } from "../types/dataTypes";

export const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: [],
})

export const toDoSelector = selector({
	key: "toDoSelector",
	get: ({ get }) => {
		const toDos = get(toDoState)
		const category = get(categoryState)
		return toDos.filter((toDo) => toDo.category === category)
	}
})

export const categoryState = atom<Categories>({
	key: "category",
	default: Categories.TO_DO
})