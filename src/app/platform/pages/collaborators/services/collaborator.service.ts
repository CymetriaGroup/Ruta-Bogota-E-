import { Injectable } from '@angular/core';
import { SDK } from '../../../../sdk/sdk';
import { CollaborativeResponse, Collaborative, CollaborativeSimple } from '../interfaces/collaborators.interface';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService extends SDK {

  getCollaboratives() {
    return this.get<CollaborativeResponse>(`${this.endpoints.collaborative}/`, {
      time: Date.now()
    });
  }

  signUpCollaborative(id: number) {
    return this.patch<Collaborative>(`${this.endpoints.collaborative}/${id}/`, {});
  }

  getMyCollaboratives() {
    return this.get<CollaborativeSimple[]>(`${this.endpoints.myCollaboratives}/`, {
      time: Date.now()
    });
  }

  assistanceCollaborative(id: number, code: string) {
    return this.post<Collaborative>(`${this.endpoints.assistance}/`, {
      collaborative: id,
      code
    });
  }

  removeCollaborative(id: number) {
    return this.post<any>(`${this.endpoints.declineAssistance}/`, {
      collaborative: id
    });
  }

}
