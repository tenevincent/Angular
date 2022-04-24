import { Component, Input } from '@angular/core';
import { Book } from './shared/book';

type ViewState = 'list' | 'details';


@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'first-project';
   @Input() book: Book | null = null;
  viewState: ViewState = 'list';

  constructor(){

  }

  showList() {
    this.viewState = 'list';
  }


  showDetails(book: Book) {
    this.book = book;
    this.viewState = 'details';
  }


}
