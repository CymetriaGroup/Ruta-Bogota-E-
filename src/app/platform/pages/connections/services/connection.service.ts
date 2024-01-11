import { Injectable } from '@angular/core';
import { SDK } from '../../../../sdk/sdk';
import { ConnectionResponse, Connection, ConnectionSimple } from '../interfaces/connections.interface';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService extends SDK {

  getConnections() {
    return this.get<ConnectionResponse>(`${this.endpoints.connection}/`, {
      time: Date.now()
    });
  }

  signUpConnection(id: number) {
    return this.patch<Connection>(`${this.endpoints.connection}/${id}/`, {});
  }

  getMyConnections() {
    return this.get<ConnectionSimple[]>(`${this.endpoints.myConnections}/`, {
      time: Date.now()
    });
  }

  assistanceConnection(id: number, code: string) {
    return this.post<Connection>(`${this.endpoints.connectionAssistance}/`, {
      connection: id,
      code
    });
  }

  removeConnection(id: number) {
    return this.post<any>(`${this.endpoints.connectionDecline}/`, {
      connection: id
    });
  }

}
