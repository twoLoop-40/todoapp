import { useForm } from "react-hook-form"
import { useSetRecoilState } from "recoil"
import { InputForm } from "../types/dataTypes"
import { toDoState } from "./atoms"

function CreateToDo () {
	const setToDos = useSetRecoilState(toDoState)
	const { register, handleSubmit, setValue} = useForm<InputForm>()
	const handleValid = ({ toDo } : InputForm) => {
		setToDos((oldToDos) => [
			{ text: toDo, id: Date.now(), category: "TO_DO" }, 
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