import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';

import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { ImagePipe } from './pipes/image.pipe';
import { TimePipe } from './pipes/time.pipe';


@NgModule({
  declarations: [
    CardComponent,
    EventsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    TopBarComponent,
    ImagePipe,
    TimePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverlayPanelModule,
    ButtonModule,
    MenuModule,
    ToastModule
  ],
  exports: [
    CardComponent,
    EventsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    TopBarComponent,
    ImagePipe,
    TimePipe
  ]
})
export class SharedModule { }
