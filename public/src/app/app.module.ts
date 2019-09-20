import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NewResComponent } from './new-res/new-res.component';
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { FormsModule } from '@angular/forms';
import { EditResComponent } from './edit-res/edit-res.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewRevComponent } from './new-rev/new-rev.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewResComponent,
    RestaurantsComponent,
    EditResComponent,
    ReviewsComponent,
    NewRevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
