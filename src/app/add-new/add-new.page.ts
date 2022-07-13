import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Book } from '../books/book.model';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.page.html',
  styleUrls: ['./add-new.page.scss'],
})
export class AddNewPage implements OnInit {

  @Input() book: Book;
  isEditMode = false;
  addForm: FormGroup;

  constructor(
    private router: Router, 
    private booksService: BooksService, 
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    // this.addForm = new FormGroup({
    //   imgUrl: new FormControl(null),
    //   category: new FormControl(null),
    //   title: new FormControl(null),
    //   authorName: new FormControl(null),
    //   authorSurname: new FormControl(null),
    //   year: new FormControl(null),
    //   description: new FormControl(null)
    // });
    this.initAddBookForm();

    if(this.book){
      this.isEditMode = true;
      this.setFormValues();
    }
  }

  initAddBookForm(){
    this.addForm = new FormGroup({
        imgUrl: new FormControl(null),
        category: new FormControl(null),
        title: new FormControl(null),
        authorName: new FormControl(null),
        authorSurname: new FormControl(null),
        year: new FormControl(null),
        description: new FormControl(null)
      });
  }

  setFormValues(){
    this.addForm.setValue({
        imgUrl: this.book.imgUrl,
        category: this.book.category.value,
        title: this.book.title,
        authorName: this.book.author.name,
        authorSurname: this.book.author.surname,
        year: this.book.year,
        description: this.book.description
    });

    this.addForm.updateValueAndValidity();
  }

  closeModal(data = null){
    this.modalCtrl.dismiss(data);
  }

  async addNew(){
    // this.router.navigateByUrl('/books');
    // console.log(this.addForm.value);

    const loading = await this.loadingCtrl.create({message:"Loading..."});
    loading.present();

    let response: Observable<Book>;

    if(this.isEditMode){
      response = this.booksService.updateBook(this.book.id, this.addForm.value);
    }else{
      response = this.booksService.addBook(this.addForm.value);
    }

    response.pipe(take(1)).subscribe((book) => {
        this.addForm.reset();
        loading.dismiss();
        
        if(this.isEditMode){
          this.closeModal(book);
        }
    });
  }

}
