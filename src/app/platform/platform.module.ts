import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { PlatformComponent } from './pages/platform/platform.component';
import { PlatformRoutingModule } from './platform-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

import { CollaboratorsComponent } from './pages/collaborators/collaborators.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { SharedModule } from '../shared/shared.module';
import { CongratulationsComponent } from './components/congratulations/congratulations.component';
import { TableComponent } from './pages/collaborators/components/table/table.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { TableConnectionComponent } from './pages/connections/components/table/table.component';
import { FormsModule } from '@angular/forms';
import { ImagePipe } from '../shared/pipes/image.pipe';
import { UrlPipe } from './pages/dashboard/pipes/url.pipe';
import { NewsComponent } from './components/news/news.component';


@NgModule({
  declarations: [
    PlatformComponent,
    DashboardComponent,
    CollaboratorsComponent,
    ConnectionsComponent,
    CongratulationsComponent,
    TableComponent,
    TableConnectionComponent,
    MarketplaceComponent,
    UrlPipe,
    NewsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlatformRoutingModule,
    TimelineModule,
    CardModule,
    TableModule,
    CarouselModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    BlockUIModule,
    ProgressSpinnerModule,
    TooltipModule,
    DialogModule,
    ToastModule
  ],
  providers: [
    DatePipe,
    ImagePipe
  ]
})
export class PlatformModule { }
