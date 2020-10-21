import { BookType } from './BookType';
import { Language } from './Profile/Language';

export class Book{
    id: number;
    bookName: String; 
    authorName: String; 
    bookType: BookType;
    describtion: String; 
    time: Date;
    language: Language;
    
}