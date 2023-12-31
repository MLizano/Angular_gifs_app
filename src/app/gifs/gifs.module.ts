import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearBoxComponent } from './components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CardComponent,
        CardListComponent,
        HomePageComponent,
        SearBoxComponent,
    ],
    imports: [CommonModule, SharedModule],
    exports: [HomePageComponent],
})
export class GifsModule {}
