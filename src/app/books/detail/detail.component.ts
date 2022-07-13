import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AddNewPage } from 'src/app/add-new/add-new.page';
import { Book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() book: Book;

  constructor(
    private modalCtrl: ModalController, 
    private bookService: BooksService, 
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    
  }

  closeModal(role = 'edit'){
    this.modalCtrl.dismiss(this.book, role);
  }

  async openUpdateModal(){
    const modal = await this.modalCtrl.create({
      component: AddNewPage,
      componentProps: {book: this.book},
    });


    await modal.present();

    const {data: updatedBook} = await modal.onDidDismiss();
    if(updatedBook){
      this.book = updatedBook;
    }
    
  }

  async onDeleteBook(){
    // const loading = await this.loadingCtrl.create({message: 'Deleting...'});
    // loading.present();
    this.bookService
    .deleteBook(this.book.id)
    .pipe(take(1))
    .subscribe(() => {
      // loading.dismiss();
      this.closeModal('delete');
    });
  }

}
