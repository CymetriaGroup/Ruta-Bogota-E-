import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../platform/pages/courses/interfaces/review.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() config = {
    title: '',
    subtitle: '',
    description: '',
    url: '',
    image: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
