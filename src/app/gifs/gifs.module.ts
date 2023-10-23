import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearBoxComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
  ]
})


export class GifsModule { }