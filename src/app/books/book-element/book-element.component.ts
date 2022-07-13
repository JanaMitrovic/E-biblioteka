import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {Book} from '../book.model';
import { BooksService } from '../books.service';
import { DetailComponent } from '../detail/detail.component';
import { UpdateModalComponent } from '../update-modal/update-modal.component';

@Component({
  selector: 'app-book-element',
  templateUrl: './book-element.component.html',
  styleUrls: ['./book-element.component.scss'],
})
export class BookElementComponent implements OnInit {

  // books$: Observable<Book[]>;

  @Input() book: Book = {id : 1, 
                imgUrl: 'https://th.bing.com/th/id/R.eddc11e071e097a34b904de9263a26c5?rik=v5aQ9DvtwoguBg&pid=ImgRaw&r=0',
                category: null,
                title: 'enahsdfljs',
                author: null,
                year: '2017',
                description: 'jjjjjjjjjjjjjjjjjjjjjjj'};


  constructor(
    private actionSheetController: ActionSheetController, 
    private modalCtrl: ModalController,
    private bookService: BooksService, 
    private loadingCtrl: LoadingController) { 

  }

  ngOnInit() {
  }
 

  // async openActionSheet() {
  //   const actionSheet = await this.actionSheetController.create({
  //     buttons: [{
  //       text: 'OBRIŠI',
  //       role: 'destructive',
  //       icon: 'trash',
  //       id: 'delete-button',
  //       data: {
  //         type: 'delete'
  //       },
  //       handler: () => {
  //         // console.log('Delete clicked');
  //         this.bookService.deleteBook(this.book.id);
  //       }
  //     }, {
  //       // text: 'IZMENI',
  //       // icon: 'build-outline',
  //       // data: 10,
  //       // handler: () => {
  //       //   // console.log('Share clicked');
  //       //   this.openModal();
  //       // }
  //     }, {
  //       text: 'IZNAJMI',
  //       icon: 'heart',
  //       handler: () => {
  //         console.log('Favorite clicked');
  //       }
  //     }, {
  //       text: 'ODUSTANI',
  //       icon: 'close',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     }]
  //   });
  //   await actionSheet.present();

  //   const { role, data } = await actionSheet.onDidDismiss();
  //   console.log('onDidDismiss resolved with role and data', role, data);
  // }

  // openModal(){
  //   this.modalCtrl.create({
  //     component: UpdateModalComponent
  //   }).then((modal) => {
  //     modal.present();
  //   });
  // }

  // async openModalDetail(book:Book){
  //   const modal = await this.modalCtrl.create({
  //     component: DetailComponent,
  //     componentProps: {book}
  //   });

  //   await modal.present();

  //   const {data: updatedBook, role} = await modal.onDidDismiss();

  //   if(updatedBook && role === 'edit'){
  //     this.book = updatedBook;
  //   }

  //   // if(updatedBook && role === 'edit'){
  //   //   this.books$ = this.books$.pipe(
  //   //     map((books) => {
  //   //       books.forEach((book) => {
  //   //         if(book.id === updatedBook.id){
  //   //           book = updatedBook;
  //   //         }
  //   //         return book;
  //   //       });
  //   //       return books;
  //   //     })
  //   //   )
  //   // }

  //   if(role === 'delete'){

  //   }

  //   // if(role === 'delete'){
  //   //   this.books$ = this.books$.pipe(
  //   //     map((books) => {
  //   //       books.filter(book => book.id !== updatedBook.id);
  //   //       return books;
  //   //     })
  //   //   )
  //   // }
  // }

}
