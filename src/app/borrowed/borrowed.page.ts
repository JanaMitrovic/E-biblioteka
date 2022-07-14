import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../books/book.model';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-borrowed',
  templateUrl: './borrowed.page.html',
  styleUrls: ['./borrowed.page.scss'],
})
export class BorrowedPage implements OnInit {

  

  books: Book[];

  constructor(private booksService: BooksService,private loadingCtl: LoadingController) { }

  ngOnInit() {
    this.books = this.booksService.getBorrowed();
    console.log(this.books);
  }

  async ionViewWillEnter(){
    const loading = await this.loadingCtl.create({message: 'Loading...'});
    loading.present();

    this.books = this.booksService.getBorrowed();
    loading.dismiss();
  }

}


}
