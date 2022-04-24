import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  rating: number = 0;
  onClick(ratingValue: number) {
    this.rating = ratingValue;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
