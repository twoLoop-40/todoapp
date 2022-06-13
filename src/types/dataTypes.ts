export interface InputForm {
	toDo: string;
}
export interface IToDo {
	text: string;
	id: number;
	category: Categories;
} 

export enum Categories {
	"TO_DO" = "TO_DO",
	"DOING" = "DOING",
	"DONE" = "DONE" 
}