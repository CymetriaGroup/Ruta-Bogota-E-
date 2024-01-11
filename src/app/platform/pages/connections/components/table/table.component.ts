import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Connection } from '../../interfaces/connections.interface';
import { User } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-table-connections',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableConnectionComponent implements OnInit {

  @Input() connections: Connection[] = [];
  @Input() kind!: string;
  @Output() onSignUpConnection: EventEmitter<number> = new EventEmitter();
  @Output() onAssistanceConnection: EventEmitter<Connection> = new EventEmitter();
  @Output() onDeclineConnection: EventEmitter<Connection> = new EventEmitter();
  user: User;
  messageError: string = '';

  constructor(
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {
  }

  signUpConnection(id: number) {
    this.onSignUpConnection.emit(id);
  }

  assistanceConnection(connection: Connection) {
    this.onAssistanceConnection.emit(connection);
  }

  declineConnection(connection: Connection) {
    this.onDeclineConnection.emit(connection);
  }

  canSignUp(connection: Connection) {

    let assigned = 0;
    this.connections.forEach(conn => {
      assigned += conn.assistance_connection.filter(assistance => assistance.user === this.user.id && conn.id === connection.id).length
    });

    return !connection.assistance_connection.filter(assistanceConnection => assistanceConnection.user === this.user.id).length &&
    assigned === 0 &&
    connection.assistance_connection.length < connection.quota &&
    new Date() <= new Date(connection.end_date)
    ;
  }

  isTime(connection: Connection) {
    if (new Date() >= new Date(connection.start_date) &&
    connection.assistance_connection.filter(assistance => assistance.user === this.user.id && !assistance.assisted_at).length) {
      return true;
    } else {
      if (!connection.assistance_connection.filter(assistance => assistance.user === this.user.id && !assistance.assisted_at).length) {
        this.messageError = 'La conexión ya ha sido tomada';
      } else {
        //this.messageError = connection.location == '1' ? 'Debes asistir puntualmente al colaboratorio virtual y asi lograrás obtener los puntos.' : 'Debes asistir puntualmente al colaboratorio presencial y asi lograrás obtener los puntos.';
        this.messageError = '';
      }
      return false;
    }
  }

  getCompleted(connection: Connection) {
    const assistance = connection.assistance_connection.find(assistance => assistance.user === this.user.id);
    return assistance?.assisted_at;
  }

  getMeet(connection: Connection) {
    return connection.location == '1' && connection.meet ? `<a target="_blank" href="${connection.meet}">${connection.meet}</a>` : connection.meet;
  }

}
