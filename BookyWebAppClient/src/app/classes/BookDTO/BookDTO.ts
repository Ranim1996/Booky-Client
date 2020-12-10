import { BookType } from '../Book/BookType';
import { constructor } from 'process';

export class BookDTO{

    constructor(
        public type: BookType,
        public number: number,
    )
    {}

    
}