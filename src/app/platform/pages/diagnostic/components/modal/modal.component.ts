import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() showModal: boolean = false;
  @Input() message: string = '';
  @Input() header: string = '';
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.onClose.emit(false);
  }

}
