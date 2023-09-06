import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDefectComponent } from './features/categories/new-defect/new-defect.component';
import { CategoryListComponent } from './features/categories/category-list/category-list.component';
//import { DefectsListComponent } from './defects-list/defects-list.component';

const routes: Routes = [
  // ... Other routes

  { path: 'Admin/Action', component: CategoryListComponent },
  { path: 'Admin/Action/Add', component: NewDefectComponent },
  //{ path: 'defects-list', component: DefectsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
