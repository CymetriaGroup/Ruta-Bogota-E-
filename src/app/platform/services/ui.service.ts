import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  isLoading: boolean = false;
  active: string = 'personal';

  loadingListener = new EventEmitter<boolean>();
  activeListener = new EventEmitter<string>();

  get getActive() {
    return this.active;
  }

  constructor() { }

  setLoading() {
    this.isLoading = !this.isLoading;
    this.loadingListener.emit(this.isLoading);
  }

  setActive(active: string) {
    this.active = active;
    this.activeListener.emit(this.active);
  }

}
