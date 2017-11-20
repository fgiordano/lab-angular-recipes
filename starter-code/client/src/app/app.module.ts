import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { DishService } from './dish.service';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    DishDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
