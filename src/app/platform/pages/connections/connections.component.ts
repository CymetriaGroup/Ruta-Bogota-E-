import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { ConnectionResponse, Connection } from './interfaces/connections.interface';
import { ConnectionService } from './services/connection.service';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';
import { TransactionsService } from '../transactions/services/transactions.service';
import { Transaction } from '../transactions/interfaces/transaction.interface';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css'],
  providers: [MessageService]
})
export class ConnectionsComponent implements OnInit {

  connections: Connection[] = [];
  registeredConnections: Connection[] = [];
  completedConnections: Connection[] = [];
  selectedConnection: Connection | undefined;
  user: User;
  showModalCode: boolean = false;
  showModalDecline: boolean = false;
  code: string = '';
  isRegisteredUser: boolean = false;
  active: boolean = false;
  transactions: Transaction[] = [];

  constructor(
    private connectionService: ConnectionService,
    private uiService: UiService,
    private userService: UserService,
    private messageService: MessageService,
    private transactionService: TransactionsService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.isRegisteredUser = this.userService.isRegisteredUser(this.user);
  }

  ngOnInit(): void {
    this.getConnections();
  }

  async getConnections() {
    await this.uiService.setLoading();
    let totalPointsStar = 0;

    this.transactions = await this.transactionService.getTransactions();
    this.transactions.forEach(transaction => {

      totalPointsStar += transaction.points > 0 ? transaction.points : 0;

      if (transaction.description.startsWith('Invalid') || (transaction.description.startsWith('RutaBogotae') && transaction.points < 0)) {
        totalPointsStar += transaction.points;
      }
    });

    this.active = totalPointsStar >= 500 || false;

    if (!this.active) {
      await this.uiService.setLoading();
      return;
    }

    const connectionReponse: ConnectionResponse = await this.connectionService.getConnections();
    this.connections = connectionReponse.results;
    this.renderConnections();
    await this.uiService.setLoading();
  }

  getConnectionsActives() {
    return this.connections.filter(connection => new Date(connection.end_date) >= new Date());
  }

  async signUpConnection(id: number) {
    this.uiService.setLoading();
    try {
      const connectionPatched: Connection = await this.connectionService.signUpConnection(id);
      this.connections = this.connections.map(connection => {
        if (connection.id === connectionPatched.id) {
          return {
            ...connectionPatched
          }
        }
        return {
          ...connection
        }
      })
      this.renderConnections();
    } catch (error) {
      this.messageService.add({severity:'error', summary: 'Error', detail: error.error});
    } finally {
      this.uiService.setLoading();
    }
  }

  async assistanceConnection(connection: Connection) {
    this.selectedConnection = connection;
    this.showModalCode = true;
  }

  async declineConnection(connection: Connection) {
    this.selectedConnection = connection;
    this.showModalDecline = true;
  }

  async sendAssistanceConnection() {
    if (!this.code.trim().length) {
      return;
    }
    this.uiService.setLoading();
    try {
      const connectionPatched: Connection = await this.connectionService.assistanceConnection(
        this.selectedConnection!.id,
        this.code
      );
      await this.userService.getPoints(this.user.id);
      this.connections = this.connections.map(connection => {
        if (connection.id === connectionPatched.id) {
          return {
            ...connectionPatched
          }
        }
        return {
          ...connection
        }
      });

      this.renderConnections();
    } catch (error) {
      this.messageService.add({severity:'error', summary: 'Error', detail: error.error});
    } finally {
      this.uiService.setLoading();
      this.selectedConnection = undefined;
      this.code = '';
    }
  }

  async removeConnection() {
    this.showModalDecline = false;
    try {
      await this.uiService.setLoading();
      await this.connectionService.removeConnection(
        this.selectedConnection!.id
      );
      const connectionReponse: ConnectionResponse = await this.connectionService.getConnections();
      this.connections = connectionReponse.results;
      this.renderConnections();
      await this.uiService.setLoading();
    } catch (error) {
      this.messageService.add({severity:'error', summary: 'Error', detail: error.error});
    } finally {
      this.selectedConnection = undefined;
      this.code = '';
    }
  }

  renderConnections() {
    this.registeredConnections = this.connections.filter(connection => {
      return connection.assistance_connection.length &&
      connection.assistance_connection.filter(assistanceConnection => {
        return assistanceConnection.user === this.user.id
      }).length
    });

    this.completedConnections = this.connections.filter(connection => {
      return connection.assistance_connection.length &&
      connection.assistance_connection.filter(assistanceConnection => {
        return assistanceConnection.user === this.user.id &&
        assistanceConnection.assisted_at
      }).length
    });

  }

}
