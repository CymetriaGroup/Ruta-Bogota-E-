import { Injectable, EventEmitter } from '@angular/core';
import { SDK } from '../../../../sdk/sdk';
import { Areas } from '../interfaces/areas.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService extends SDK {

  _areas!: Areas[];
  data: any = {};
  finishDiagnosticListener = new EventEmitter<boolean>();

  get getData() {
    return this.data;
  }

  get getAreas() {
    return this._areas;
  }

  // Local Data
  addToData(field: string, data: any, next: string) {
    this.data[field] = data;
    if (!next) {
      this.finishDiagnosticListener.emit(true);
    }
  }

  // Api requests

  async requestAreas() {
    const areas = await this.get<Areas[]>(`${this.endpoints.areas}`, {});
    this._areas = areas;
    return [...this._areas];
  }

  async saveAnnouncement(data: any, id: string) {
    return this.patch<any>(`/${this.endpoints.users}/${id}/pannouncement/`, data);
  }

  async getUser(id: string) {
    return this.get<User>(`/${this.endpoints.users}/${id}`, {});
  }

  async getUserByDocument(document: number) {
    return this.get<any>(`/${this.endpoints.users}/?username=${document}`, {});
  }

}
