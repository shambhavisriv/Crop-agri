import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CropCardComponent } from './component/crop-card/crop-card.component';
import { CropListComponent } from './component/crop-list/crop-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crop-list', component: CropListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
