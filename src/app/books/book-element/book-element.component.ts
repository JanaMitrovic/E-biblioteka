import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {Book} from '../book.model';
import { DetailComponent } from '../detail/detail.component';
import { UpdateModalComponent } from '../update-modal/update-modal.component';

@Component({
  selector: 'app-book-element',
  templateUrl: './book-element.component.html',
  styleUrls: ['./book-element.component.scss'],
})
export class BookElementComponent implements OnInit {

  books$: Observable<Book[]>;

  @Input() book: Book = {id : 1, 
                imgUrl: 'https://th.bing.com/th/id/R.eddc11e071e097a34b904de9263a26c5?rik=v5aQ9DvtwoguBg&pid=ImgRaw&r=0',
                category: null,
                title: 'enahsdfljs',
                author: null,
                year: '2017',
                description: 'jjjjjjjjjjjjjjjjjjjjjjj'};


  constructor(private actionSheetController: ActionSheetController, private modalCtrl: ModalController) { 

  }

  ngOnInit() {
  }
 

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'OBRIŠI',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'IZMENI',
        icon: 'build-outline',
        data: 10,
        handler: () => {
          // console.log('Share clicked');
          this.openModal();
        }
      }, {
        text: 'IZNAJMI',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'ODUSTANI',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  openModal(){
    this.modalCtrl.create({
      component: UpdateModalComponent
    }).then((modal) => {
      modal.present();
    });
  }

  async openModalDetail(book:Book){
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {book}
    });

    await modal.present();

  }

}

