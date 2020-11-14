import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationSystemRoutingModule } from './recommendation-system-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RecommendationSystemComponent } from './recommendation-system.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbToastrModule } from '@nebular/theme';
import { SubjectModule } from './subject/subject.module';
import { IconRendererComponent } from './components/icon-renderer/icon-renderer.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { DocumentModule } from './document/document.module';


@NgModule({
  declarations: [RecommendationSystemComponent, HeaderComponent, HomeComponent, IconRendererComponent, ConfirmationModalComponent],
  imports: [
    CommonModule,
    NbEvaIconsModule,
    SubjectModule,
    DocumentModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot(),
    NbLayoutModule,
    RecommendationSystemRoutingModule
  ]
})
export class RecommendationSystemModule { }
