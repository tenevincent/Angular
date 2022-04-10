import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
 import { IDemoService, MY_TOKEN } from './services/idemo-service';
import { DemoServiceService } from './services/demo-service.service';
import { MyErrorHandler } from './services/my-error-handler';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SecondComponent } from './Stuffs/second/second.component';
import { FirstComponent } from './Stuffs/first/first.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { routes } from './route';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { TokenInterceptor } from './shared/token-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    SecondComponent,
    FirstComponent,
    HomeComponent,
    NotFoundComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // NEW
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: IDemoService, useClass: DemoServiceService },
    { provide: ErrorHandler, useClass: MyErrorHandler } ,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true } , // NEW
    { provide: MY_TOKEN, useValue: '123', multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
