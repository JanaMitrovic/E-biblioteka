import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AddNewPage } from 'src/app/add-new/add-new.page';
import { AuthService } from 'src/app/auth/auth.service';
import { Book } from '../book.model';
import { BooksService } from '../books.service';
import { User } from '../user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() book: Book;
  role: String;

  constructor(
    private modalCtrl: ModalController, 
    private bookService: BooksService, 
    private loadingCtrl: LoadingController,
    private authService: AuthService) { }

  ngOnInit() {
    this.role = this.authService.getRole();
    console.log(this.role);
  }

  closeModal(role = 'edit'){
    this.modalCtrl.dismiss(this.book, role);
  }

  async openUpdateModal(){
    const modal = await this.modalCtrl.create({
      component: AddNewPage,
      componentProps: {book: this.book},
      cssClass: 'fullscreen'
    });


    await modal.present();

    const {data: updatedBook} = await modal.onDidDismiss();
    if(updatedBook){
      this.book = updatedBook;
    }
    
  }

  async onDeleteBook(){
    this.bookService
    .deleteBook(this.book.id)
    .pipe(take(1))
    .subscribe(() => {
      this.closeModal('delete');
    });
  }

  borrow(){
    this.bookService.addToBorrowed(this.book);
  }

}
