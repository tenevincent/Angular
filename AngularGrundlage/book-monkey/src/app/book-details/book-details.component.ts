import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute } from '@angular/router';
import { BookRaw } from '../shared/book-raw';



@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  /** ⚠️ Unterschied zum Buch:
   * Property ist optional, sonst muss es direkt zugewiesen werden.
   * Das Input-Property wird allerdings zur Laufzeit der Komponente durch das Property Binding zugewiesen.
   * Da dieses Binding nicht verpflichtend ist, muss das Property auch optional sein.
   */
  @Input() book: Book | undefined;
  @Output() showListEvent = new EventEmitter<any>();


  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    /** ⚠️ Unterschied zum Buch:
     * Der Typ des Routen-Parameters ist `string | null`. Die Methode `getSingle()` erwartet allerdings `string`.
     * Wir definieren deshalb hier einen leeren String als Fallback-Wert. So wird der Typ in jedem Fall `string`.
     */
      this.bs.getSingle(params.get('isbn') || '').subscribe( item => this.book = item);
  }




  getRating(num: number) {
    return new Array(num);
  }

  showBookList() {
    this.showListEvent.emit();
  }
}
