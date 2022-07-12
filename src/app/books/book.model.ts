import { Author } from "./author.model";
import { Category } from "./category.model";

export interface Book {
    id: number;
    imgUrl: string;
    category: Category;
    title: string;
    author: Author;
    year: string;
    description: string
}
