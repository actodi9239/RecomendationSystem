import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject';
import { GridOptions } from 'ag-grid-community';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { IconRendererComponent } from 'src/app/recommendation-system/components/icon-renderer/icon-renderer.component';
import { DocumentService } from '../../services/document.service';
import { Documents } from 'src/app/models/document';
import { SubjectDatastoreService } from 'src/app/recommendation-system/subject/services/subject-datastore.service';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.scss']
})
export class ViewDocumentComponent implements OnInit {

  public documents: Documents[] = [];
  public isLoading: boolean;
  public searchIsEmpty: boolean = true;
  public gridOptions: GridOptions;
  public frameworkComponents: any;
  public modalOptions: NgbModalOptions;
  public columnDefs;

  constructor(
    private documentService: DocumentService,
    private subjectDatastoreService: SubjectDatastoreService,
    private modalService: NgbModal,
    private router: Router,
    private ngZone: NgZone,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit() {
    this.frameworkComponents = {
      iconRenderer: IconRendererComponent,
    };
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
      size: 'sm',
      centered: true
    }
    this.isLoading = true;
    this.documentService.listDocuments().subscribe(documents => {
      if (!documents.is_loading) {
        this.isLoading = false;
        this.documents = documents.data;
      }
    });
    this.loadData();
  }

  loadData() {
    this.gridOptions = {
      domLayout: 'autoHeight',
      pagination: true,
      paginationPageSize: 20,
      onGridReady: (params) => {
        params.api.sizeColumnsToFit();
        params.api.collapseAll();
      },
      onGridSizeChanged: (params) => {
        params.api.collapseAll();
      }
    }

    this.columnDefs = [
      {
        headerName: 'Nombre',
        field: 'attributes',
        valueFormatter: (params) => { return params.value.name != null ? params.value.name : ""; },
        minWidth: 250
      },
      {
        headerName: 'Descripción',
        field: 'attributes',
        valueFormatter: (params) => { return params.value.description != null ? params.value.description : ""; },
        minWidth: 250
      },
      {
        headerName: 'Materia',
        field: 'relationships',
        valueFormatter: (params) => { return params.value.subject.data.attributes.name != null ? params.value.subject.data.attributes.name : ""; },
        minWidth: 250
      },
      {
        headerName: 'Docente',
        field: 'relationships',
        valueFormatter: (params) => { return params.value.subject.data.attributes.docente != null ? params.value.subject.data.attributes.docente : ""; },
        minWidth: 250
      },
      {
        cellRenderer: 'iconRenderer',
        cellRendererParams: {
          onClick: this.viewDocument.bind(this),
          label: 'eye-outline',
          tooltip: 'view-document'
        },
        width: 60,
        minWidth: 60
      }
    ];
  }

  viewDocument(e) {
    window.open(e.rowData.attributes.link);
  }
}
