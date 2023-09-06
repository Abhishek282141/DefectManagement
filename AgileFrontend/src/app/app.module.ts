import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewDefectComponent } from './features/categories/new-defect/new-defect.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CategoryListComponent } from './features/categories/category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DefectListComponent } from './features/categories/defect-list/defect-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NewDefectComponent,
    NavbarComponent,
    CategoryListComponent,
    DefectListComponent,
  
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,

    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
