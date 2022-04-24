import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {


  @Input() book: Book | null = null;
  @Output() showListEvent = new EventEmitter<any>();


  constructor() {

  }

  ngOnInit(): void {
  }



  getRating(num: number | undefined) {
    return new Array(num);
  }


  showBookList() {
    this.showListEvent.emit();
  }


}
