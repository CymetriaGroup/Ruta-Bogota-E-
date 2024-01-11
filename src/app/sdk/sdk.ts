import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const {
  hostFull,
  host,
  endpoints,
  version
} = environment;

@Injectable()
export class SDK {

  constructor(
    private http: HttpClient
  ) {
  }

  public host = host;
  public hostFull = hostFull;
  public endpoints = endpoints;
  public version = version;

  public makeEndpointRequest<T>(query: string = '', method: string, data?: {}, headers?: {}, complete?: string) {
    if (complete) query = complete;
    else query = `${this.host}/${this.version}${query}`;
    if (method == 'post') {
      return this.http.post<T>(query, data, headers).toPromise();
    } else if (method == 'patch') {
      return this.http.patch<T>(query, data, headers).toPromise();
    } else {
      return this.http.get<T>(query, headers).toPromise();
    }
  }


  public async getHeaders(add?: string | {
    [name: string]: string | string[];
  }) {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders(add).set('Authorization', `JWT ${token}`);
      return { headers }
    }
    return {}
  }

  public async get<T>(query: string, data: any) {
    const headers = await this.getHeaders();
    let url = "";
    if (data) {
      var last = Object.keys(data).pop();
      url += "?"
      for (var key in data) {
        if (key == "id") {
          query = `${query}${data[key]}/`;
        } else {
          url += `${key}=${data[key]}`;
          if (last != key) url += "&";
        }
      }
    }
    return this.makeEndpointRequest<T>(query + url, 'get', {}, headers);
  }

  public async post<T>(query: string, data?: {}) {
    const headers = await this.getHeaders();
    return this.makeEndpointRequest<T>(query, 'post', data, headers);
  }

  public async put<T>(query: string, id: string, data?: {}) {
    const headers = await this.getHeaders();
    query = `${query}${id}/`;
    return this.makeEndpointRequest<T>(query, 'put', data, headers);
  }

  public async del<T>(query: string, id: string) {
    const headers = await this.getHeaders();
    query = `${query}${id}/`;
    return this.makeEndpointRequest<T>(query, 'delete', {}, headers);
  }

  public async patch<T>(query: string, data?: {}) {
    const headers = await this.getHeaders();
    return this.makeEndpointRequest<T>(query, 'patch', data, headers);
  }

}
