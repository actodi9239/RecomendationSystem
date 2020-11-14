import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbIconModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SubjectDatastoreService } from '../subject/services/subject-datastore.service';
import { DocumentService } from './services/document.service';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [AddDocumentComponent, ViewDocumentComponent],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NbCardModule,
    NbIconModule,
    NbEvaIconsModule,
    NbSpinnerModule,
    CommonModule,
    AgGridModule.withComponents([
      ViewDocumentComponent
    ])
  ],
  providers: [
    SubjectDatastoreService,
    DocumentService
  ]
})
export class DocumentModule { }
