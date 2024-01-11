import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { CollaborativeResponse, Collaborative } from './interfaces/collaborators.interface';
import { CollaboratorService } from './services/collaborator.service';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css'],
  providers: [ MessageService ]
})
export class CollaboratorsComponent implements OnInit {

  collaboratives: Collaborative[] = [];
  registeredCollaborators: Collaborative[] = [];
  completedCollaborators: Collaborative[] = [];
  selectedCollaborative: Collaborative | undefined;
  user: User;
  showModalCode: boolean = false;
  showModalDecline: boolean = false;
  code: string = '';
  isRegisteredUser: boolean = false;

  constructor(
    private collaboratorService: CollaboratorService,
    private uiService: UiService,
    private userService: UserService,
    private messageService: MessageService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.isRegisteredUser = this.userService.isRegisteredUser(this.user);
  }

  ngOnInit(): void {
    if (this.isRegisteredUser) {
      this.getCollaboratives();
    }
  }

  async getCollaboratives() {
    this.uiService.setLoading();
    const collaborativeReponse: CollaborativeResponse = await this.collaboratorService.getCollaboratives();
    this.collaboratives = collaborativeReponse.results;
    this.renderCollaboratives();
    this.uiService.setLoading();
  }

  getCollaborativesActives() {
    return this.collaboratives.filter(collaborative => new Date(collaborative.end_date) >= new Date());
  }

  async signUpCollaborative(id: number) {
    this.uiService.setLoading();
    try {
      const collaborativePatched: Collaborative = await this.collaboratorService.signUpCollaborative(id);
      this.collaboratives = this.collaboratives.map(collaborative => {
        if (collaborative.id === collaborativePatched.id) {
          return {
            ...collaborativePatched
          }
        }
        return {
          ...collaborative
        }
      })
      this.renderCollaboratives();
    } catch (error) {
      this.messageService.add({severity:'error', summary: 'Error', detail: error.error});
    } finally {
      this.uiService.setLoading();
    }
  }

  async assistanceCollaborative(collaborative: Collaborative) {
    this.selectedCollaborative = collaborative;
    this.showModalCode = true;
  }

  async declineCollaborative(collaborative: Collaborative) {
    this.selectedCollaborative = collaborative;
    this.showModalDecline = true;
  }

  async sendAssistanceCollaborative() {
    if (!this.code.trim().length) {
      return;
    }
    this.uiService.setLoading();
    try {
      const collaborativePatched: Collaborative = await this.collaboratorService.assistanceCollaborative(
        this.selectedCollaborative!.id,
        this.code
      );
      await this.userService.getPoints(this.user.id);
      this.collaboratives = this.collaboratives.map(collaborative => {
        if (collaborative.id === collaborativePatched.id) {
          return {
            ...collaborativePatched
          }
        }
        return {
          ...collaborative
        }
      });

      this.renderCollaboratives();
    } catch (error) {
      this.messageService.add({severity:'error', summary: 'Error', detail: error.error});
    } finally {
      this.uiService.setLoading();
      this.selectedCollaborative = undefined;
      this.code = '';
    }
  }

  async removeCollaborative() {
    this.showModalDecline = false;
    try {
      await this.uiService.setLoading();
      await this.collaboratorService.removeCollaborative(
        this.selectedCollaborative!.id
      );
      const collaborativeReponse: CollaborativeResponse = await this.collaboratorService.getCollaboratives();
      this.collaboratives = collaborativeReponse.results;
      this.renderCollaboratives();
      await this.uiService.setLoading();
    } catch (error) {
      this.messageService.add({severity:'error', summary: 'Error', detail: error.error});
    } finally {
      this.selectedCollaborative = undefined;
      this.code = '';
    }
  }

  renderCollaboratives() {
    this.registeredCollaborators = this.collaboratives.filter(collaborative => {
      return collaborative.assistance_collaborative.length &&
      collaborative.assistance_collaborative.filter(assistanceCollaborative => {
        return assistanceCollaborative.user === this.user.id
      }).length
    });

    this.completedCollaborators = this.collaboratives.filter(collaborative => {
      return collaborative.assistance_collaborative.length &&
      collaborative.assistance_collaborative.filter(assistanceCollaborative => {
        return assistanceCollaborative.user === this.user.id &&
        assistanceCollaborative.assisted_at
      }).length
    });

  }

}
