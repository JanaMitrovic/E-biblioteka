import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrowedPageRoutingModule } from './borrowed-routing.module';

import { BorrowedPage } from './borrowed.page';
import { BookElementComponent } from '../books/book-element/book-element.component';
import { BorrowedElementComponent } from './borrowed-element/borrowed-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrowedPageRoutingModule,
  ],
  declarations: [BorrowedPage,
    BorrowedElementComponent]
})
export class BorrowedPageModule {}
