export interface InputForm {
	toDo: string;
}
export interface IToDo {
	text: string;
	id: number;
	category: "TO_DO" | "DOING" | "DONE";
} 