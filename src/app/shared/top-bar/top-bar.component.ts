import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../platform/services/user.service';
import { User } from '../../platform/interfaces/user.interface';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { UiService } from 'src/app/platform/services/ui.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  providers: [ MessageService ]
})
export class TopBarComponent implements OnInit {

  @Input() user!: User;
  points: number = 0;
  totalPoints: number = 0;
  star: number = 1;
  items: MenuItem[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private messageService: MessageService,
    private uiService: UiService
  ) {
  }

  ngOnInit(): void {
    this.points = this.user?.points || 0;
    this.totalPoints = this.user?.total_points || 0;
    this.calculateStar();
    this.userService.pointsListener.subscribe((data: any) => {
      if (this.points > 0 && data.points == 0) {
        this.uiService.setLoading();
        this.messageService.add({severity:'error', summary: 'Tu sesión ha expirado', detail: 'Por favor inicia sesión nuevamente'});
        setTimeout(() => {
          this.logout();
          return;
        }, 3000);
        return;
      }
      this.points = data.points;
      this.totalPoints= data.total_points;
      this.calculateStar();
    });

    this.items = [{
      label: 'RutaBogotáe',
      items: [
        {
          label: 'Inicio',
          icon: 'mr-3 fas fa-home',
          routerLink: '/platform/dashboard',
        },
        {
          label: 'Auto-diagnóstico',
          icon: 'mr-3 fas fa-route',
          routerLink: '/platform/diagnostic',
        },
        {
          label: 'Academia E',
          icon: 'mr-3 fas fa-laptop',
          routerLink: '/platform/courses',
        },
        {
          label: 'Colaboratorios',
          icon: 'mr-3 fas fa-user-friends',
          routerLink: '/platform/collaborators',
        },
        {
          label: 'Conexiones',
          icon: 'mr-3 far fa-handshake',
          routerLink: '/platform/connections',
        },
        {
          label: 'Marketplace',
          icon: 'mr-3 fas fa-store',
          routerLink: '/platform/marketplace',
        }
      ]}
  ];

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  calculateStar() {
    if (this.totalPoints >= 0 && this.totalPoints < 400) {
      this.star = 1;
    } else if (this.totalPoints >= 400 && this.totalPoints < 600) {
      this.star = 2;
    } else if (this.totalPoints >= 600 && this.totalPoints < 800) {
      this.star = 3;
    } else if (this.totalPoints >= 800 && this.totalPoints < 999) {
      this.star = 4;
    }else {
      this.star = 5;
    }
  }

}
