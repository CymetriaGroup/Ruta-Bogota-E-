import { Component, Input, OnInit } from '@angular/core';
import { CollaborativeSimple } from '../../platform/pages/collaborators/interfaces/collaborators.interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Input() title: string = '';
  @Input() collaboratives: CollaborativeSimple[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
