import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {Book} from '../book.model';
import { BooksService } from '../books.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-book-element',
  templateUrl: './book-element.component.html',
  styleUrls: ['./book-element.component.scss'],
})
export class BookElementComponent implements OnInit {


  @Input() book: Book = {id : 1, 
                imgUrl: 'https://th.bing.com/th/id/R.eddc11e071e097a34b904de9263a26c5?rik=v5aQ9DvtwoguBg&pid=ImgRaw&r=0',
                category: null,
                title: 'enahsdfljs',
                author: null,
                year: '2017',
                description: 'jjjjjjjjjjjjjjjjjjjjjjj',
                user: null,};


  constructor(
    private actionSheetController: ActionSheetController, 
    private modalCtrl: ModalController,
    private bookService: BooksService, 
    private loadingCtrl: LoadingController) { 

  }

  ngOnInit() {
  }
 

}
