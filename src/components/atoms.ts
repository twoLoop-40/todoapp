import { atom } from "recoil";
import { IToDo } from "../types/dataTypes";

export const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: [],
})