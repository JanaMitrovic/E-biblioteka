import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {map, tap, toArray} from 'rxjs/operators'
import { AuthService } from '../auth/auth.service';
import { Book } from './book.model';
import { BooksService } from './books.service';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  // books: Book[] = [{id: 'b1', img: 'https://th.bing.com/th/id/R.eddc11e071e097a34b904de9263a26c5?rik=v5aQ9DvtwoguBg&pid=ImgRaw&r=0', category: 'drama', title: 'Title', author: 'Author', year: '2018', description: 'Description'},
  //                   {id: 'b2', img: 'https://th.bing.com/th/id/R.eddc11e071e097a34b904de9263a26c5?rik=v5aQ9DvtwoguBg&pid=ImgRaw&r=0', category: 'dramaa', title: 'Title2', author: 'Author2', year: '2018', description: 'Description2'}];

  uslov: '';
  books$: Observable<Book[]>;
  role: String;

  constructor(
    private booksService: BooksService, 
    private loadingCtl: LoadingController, 
    private modalCtrl: ModalController,
    private authService: AuthService) {

  }

  async ngOnInit() {
    this.role = this.authService.getRole();
    console.log(this.role);

  }

  async ionViewWillEnter(){
    const loading = await this.loadingCtl.create({message: 'Loading...'});
    loading.present();

    this.books$ = this.booksService.getBooks().pipe(
      tap(books => {
        loading.dismiss();
        return books;
      })
    );
  }

  async openModalDetail(book:Book){
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {book},
      cssClass: 'fullscreen'
    });

    await modal.present();

    const {data: updatedBook, role} = await modal.onDidDismiss();

    if(updatedBook && role === 'edit'){

      const loading = await this.loadingCtl.create({message: 'Loading...'});
      loading.present();

      this.books$ = this.books$.pipe(
        map((books) => {
          books.forEach((book) => {
            if(book.id === updatedBook.id){
              book = updatedBook;
            }
            return book;
          });
          loading.dismiss();
          return books;
        })
      )
    }

    if(role === 'delete'){

      const loading = await this.loadingCtl.create({message: 'Loading...'});
      loading.present();

      this.books$ = this.books$.pipe(
        map((books) => {
          books.filter(book => book.id !== updatedBook.id);
          loading.dismiss();
          return books;
        })
      )
    }
  }



}
