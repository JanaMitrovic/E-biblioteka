import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { BookElementComponent } from './book-element/book-element.component';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // books: Book[] = [{id: 'b1', img: 'https://th.bing.com/th/id/R.eddc11e071e097a34b904de9263a26c5?rik=v5aQ9DvtwoguBg&pid=ImgRaw&r=0', category: 'drama', title: 'Title', author: 'Author', year: '2018', description: 'Description'},
  //                   {id: 'b2', img: 'https://th.bing.com/th/id/R.eddc11e071e097a34b904de9263a26c5?rik=v5aQ9DvtwoguBg&pid=ImgRaw&r=0', category: 'dramaa', title: 'Title2', author: 'Author2', year: '2018', description: 'Description2'}];

  apiUrl = 'http://localhost:8000/api';
  

  constructor(private http: HttpClient, private authService: AuthService) { 
    
  }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  // getBook(id: string){
  //   return this.books.find((b) => b.id === id);
  // }

  addBook(book: Book): Observable<Book>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.sessionStorage.getItem('access_tocken')}` });
    let options = { headers: headers };
    return this.http.post<Book>(`${this.apiUrl}/books`, book, options);
  }

  updateBook(bookId: number, book: Book): Observable<Book>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.sessionStorage.getItem('access_tocken')}` });
    let options = { headers: headers };
    return this.http.put<Book>(`${this.apiUrl}/books/${bookId}`, book, options);
  }

  deleteBook(bookId: number):Observable<Book>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.sessionStorage.getItem('access_tocken')}` });
    let options = { headers: headers };
    return this.http.delete<Book>(`${this.apiUrl}/books/${bookId}`, options);
  }

  borrowed: Book[] = [];

  addToBorrowed(book: Book){
    console.log(this.borrowed);
    let exists = false;
    this.borrowed.forEach(b => {
      if(book.id = b.id){
        exists = true;
      }
    });
    if(exists == false){
      this.borrowed.push(book);
    }

    
  }

  removeFromBorrowed(book: Book){
    this.borrowed.filter(b => b.id !== book.id)
    location.reload();
  }

  getBorrowed(){
    return this.borrowed;
  }

}
