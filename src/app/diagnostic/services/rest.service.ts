import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Areas } from '../interfaces/areas.interface';
import { User } from '../interfaces/user.interface';
const { host, endpoints, version } = environment;

@Injectable({
  providedIn: 'root'
})
export class RestService {

  _areas!: Areas[];
  data: any = {};
  finishFormListener = new EventEmitter<boolean>();

  get getData() {
    return this.data;
  }

  get getAreas() {
    return this._areas;
  }

  constructor(
    private http: HttpClient
  ) {
  }

  // Local Data
  addToData(field: string, data: any, next: string) {
    this.data[field] = data;
    if (!next) {
      this.finishFormListener.emit(true);
    }
  }

  // Api requests

  async requestAreas() {
    const areas = await this.http.get<Areas[]>(`${host}/${version}/${endpoints.areas}`).toPromise();
    this._areas = areas;
    return [...this._areas];
  }

  async saveAnnouncement(data: any) {
    return this.http.post<any>(`${host}/${version}/${endpoints.users}/announcement/`, data).toPromise();
  }

  async getUser(id: string) {
    return this.http.get<User>(`${host}/${version}/${endpoints.users}/${id}`).toPromise();
  }

  async getUserByDocument(document: number) {
    return this.http.get<any>(`${host}/${version}/${endpoints.users}/?username=${document}`).toPromise();
  }



}
