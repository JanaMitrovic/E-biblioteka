import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/books/book.model';
import { BooksService } from 'src/app/books/books.service';

@Component({
  selector: 'app-borrowed-element',
  templateUrl: './borrowed-element.component.html',
  styleUrls: ['./borrowed-element.component.scss'],
})
export class BorrowedElementComponent implements OnInit {

  @Input() book: Book = {id : 1, 
    imgUrl: 'https://th.bing.com/th/id/R.eddc11e071e097a34b904de9263a26c5?rik=v5aQ9DvtwoguBg&pid=ImgRaw&r=0',
    category: null,
    title: 'enahsdfljs',
    author: null,
    year: '2017',
    description: 'jjjjjjjjjjjjjjjjjjjjjjj'};

  constructor(private bookService: BooksService) { }

  ngOnInit() {}

  remove(){
    this.bookService.removeFromBorrowed(this.book);
  }
}
