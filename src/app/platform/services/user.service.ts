import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user.interface';
const { host, endpoints, version } = environment;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  pointsListener = new EventEmitter<{}>();

  constructor(
    private http: HttpClient
  ) { }

  async getPoints(id: string) {
    const user = await this.http.get<User>(`${host}/${version}/${endpoints.users}/${id}/?time=${Date.now()}`).toPromise();
    localStorage.setItem('user', JSON.stringify(user));
    this.pointsListener.emit({
      points: user.points,
      total_points: user.total_points
    });
    return {
      points: user.points,
      total_points: user.total_points
    };
  }

  isRegisteredUser(user: User) {
    return !!user.total_commercial &&
    !!user.total_finance &&
    !!user.total_human &&
    !!user.total_innovation &&
    !!user.total_merchant &&
    !!user.total_operations &&
    !!user.total_social &&
    !!user.total_strategy &&
    !!user.total_trends;
  }
}
