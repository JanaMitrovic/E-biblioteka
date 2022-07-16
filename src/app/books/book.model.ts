import { Author } from "./author.model";
import { Category } from "./category.model";
import { User } from "./user.model";

export interface Book {
    id: number;
    imgUrl: string;
    category: Category;
    title: string;
    author: Author;
    year: string;
    description: string,
    user: User
}
