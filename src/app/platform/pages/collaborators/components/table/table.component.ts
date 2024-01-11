import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collaborative } from '../../interfaces/collaborators.interface';
import { User } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() collaboratives: Collaborative[] = [];
  @Input() kind!: string;
  @Output() onSignUpCollaborative: EventEmitter<number> = new EventEmitter();
  @Output() onAssistanceCollaborative: EventEmitter<Collaborative> = new EventEmitter();
  @Output() onDeclineCollaborative: EventEmitter<Collaborative> = new EventEmitter();
  user: User;
  messageError: string = '';

  constructor(
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {
  }

  signUpCollaborative(id: number) {
    this.onSignUpCollaborative.emit(id);
  }

  assistanceCollaborative(collaborative: Collaborative) {
    this.onAssistanceCollaborative.emit(collaborative);
  }

  declineCollaborative(collaborative: Collaborative) {
    this.onDeclineCollaborative.emit(collaborative);
  }

  canSignUp(collaborative: Collaborative) {

    let assigned = 0;
    this.collaboratives.forEach(collaborative => {
      assigned += collaborative.assistance_collaborative.filter(assitance => assitance.user === this.user.id).length
    });

    return !collaborative.assistance_collaborative.filter(assistanceCollaborative => assistanceCollaborative.user === this.user.id).length &&
    assigned === 0 &&
    collaborative.assistance_collaborative.length < collaborative.quota &&
    new Date() <= new Date(collaborative.end_date)
    ;
  }

  isTime(collaborative: Collaborative) {
    if (new Date() >= new Date(collaborative.start_date) &&
    collaborative.assistance_collaborative.filter(assitance => assitance.user === this.user.id && assitance.points === 0).length) {
      return true;
    } else {
      if (!collaborative.assistance_collaborative.filter(assitance => assitance.user === this.user.id && assitance.points === 0).length) {
        this.messageError = 'El colaboratorio ya ha sido tomado';
      } else {
        //this.messageError = collaborative.location == '1' ? 'Debes asistir puntualmente al colaboratorio virtual y asi lograrás obtener los puntos.' : 'Debes asistir puntualmente al colaboratorio presencial y asi lograrás obtener los puntos.';
        this.messageError = '';
      }
      return false;
    }
  }

  getCompleted(collaborative: Collaborative) {
    const assistance = collaborative.assistance_collaborative.find(assistance => assistance.user === this.user.id);
    return assistance?.assisted_at;
  }

  getMeet(collaborative: Collaborative) {
    return collaborative.location == '1' && collaborative.meet ? `<a target="_blank" href="${collaborative.meet}">${collaborative.meet}</a>` : collaborative.meet;
  }

}
