import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrowedPage } from './borrowed.page';

const routes: Routes = [
  {
    path: '',
    component: BorrowedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrowedPageRoutingModule {}
