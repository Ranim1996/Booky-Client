import { BookType } from './BookType';
import { Language } from './Profile/Language';
import { constructor } from 'process';

export class Book{
    // id: number;
    // bookName: String; 
    // authorName: String; 
    // bookType: BookType;
    // describtion: String; 
    // time: Date;
    // language: Language;

    constructor(
        public id: number,
        public bookName: String,
        public authorName: String,
        public bookType: BookType,
        public describtion: String,
        public time: Date,
        public language: Language,
    )
    {}

    
}