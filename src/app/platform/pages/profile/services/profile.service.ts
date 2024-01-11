import { Injectable } from '@angular/core';
import { SDK } from '../../../../sdk/sdk';

interface Profile {
  web: string;
  facebook: string;
  instagram: string;
  twitter: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends SDK {

  updateProfile(id: string, data: Profile) {
    return this.patch<any>(`/${this.endpoints.users}/${id}/profile/`, data);
  }

}
