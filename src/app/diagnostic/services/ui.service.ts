import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  active: string = 'personal';
  activeListener = new EventEmitter<string>();

  get getActive() {
    return this.active;
  }

  constructor() { }

  setActive(active: string) {
    this.active = active;
    this.activeListener.emit(this.active);
  }

}
