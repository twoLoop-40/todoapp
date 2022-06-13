import { useForm } from "react-hook-form"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { InputForm } from "../types/dataTypes"
import { categoryState, toDoState } from "./atoms"

function CreateToDo () {
	const setToDos = useSetRecoilState(toDoState)
	const { register, handleSubmit, setValue} = useForm<InputForm>()
	const category = useRecoilValue(categoryState)
	const handleValid = ({ toDo } : InputForm) => {
		setToDos((oldToDos) => [
			{ text: toDo, id: Date.now(), category }, 
			...oldToDos
		]) 
		setValue("toDo", "")
	}
	return (
		<form  onSubmit={handleSubmit(handleValid)}>
			<input {...register("toDo", {
				required: "Please write a toDo"
			})}
			placeholder="Write a to do" />
			<button>Add</button>
		</form>
	)
}

export default CreateToDo