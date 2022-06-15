export interface InputForm {
	toDo: string;
}
export interface IToDo {
	text: string;
	id: number;
	category: ICategory;
} 
export interface CategoryForm {
	category: string;
}
export interface ICategory {
	text: string;
	id: number;
}
