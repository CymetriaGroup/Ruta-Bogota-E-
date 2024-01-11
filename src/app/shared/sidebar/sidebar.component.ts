import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../platform/interfaces/user.interface';
import { Router } from '@angular/router';
import { UserService } from '../../platform/services/user.service';

interface MenuItem {
  label: string;
  icon: string;
  link: string;
  disabled: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() user!: User;
  menuItems: MenuItem[] = [];

  manualItems = [
    {
      label: 'Déjanos tu testimonio',
      icon: 'mr-3 fas fa-pencil-alt',
      link: 'https://cymetria.typeform.com/to/rybOxg21'
    },
    {
      label: 'Manual de usuario',
      icon: 'mr-3 fas fa-book',
      link: 'https://rutabogotae.co/docs/manual_usuario_rutae.pdf',
    },
    {
      label: 'Preguntas frecuentes',
      icon: 'mr-3 fas fa-question-circle',
      link: 'https://rutabogotae.co/docs/pmf_rutae.pdf',
    },
    /*{
      label: 'Términos y condiciones',
      icon: 'mr-3 fas fa-list-ol',
      link: 'https://rutabogotae.co/documents/terminos_y_condiciones_ruta_bogotae.pdf',
    }*/
  ];

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    const isRegisteredUser = this.userService.isRegisteredUser(this.user);
    this.menuItems = [
      {
        label: 'Inicio',
        icon: 'mr-3 fas fa-home',
        link: '/platform/dashboard',
        disabled: false
      },
      {
        label: 'Auto-diagnóstico',
        icon: 'mr-3 fas fa-route',
        link: isRegisteredUser ? '/platform/results' : '/platform/diagnostic',
        disabled: false
      },
      {
        label: 'Academia E',
        icon: 'mr-3 fas fa-laptop',
        link: '/platform/courses',
        disabled: false
      },
      {
        label: 'Colaboratorios',
        icon: 'mr-3 fas fa-user-friends',
        link: '/platform/collaborators',
        disabled: true
      },
      {
        label: 'Conexiones',
        icon: 'mr-3 far fa-handshake',
        link: '/platform/connections',
        disabled: true
      },
      {
        label: 'Marketplace',
        icon: 'mr-3 fas fa-store',
        link: '/platform/marketplace',
        disabled: true
      }
    ];
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
