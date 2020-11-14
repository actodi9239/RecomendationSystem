import { Injectable } from '@angular/core';
import { Subject } from 'src/app/models/subject';
import { DocumentDatastoreService } from './document-datastore.service'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private documentDatastoreService: DocumentDatastoreService) { }

  public addDocument(document, subject: Subject){
    let newDocument = this.documentDatastoreService.new();
    newDocument.attributes.name = document.name;
    newDocument.attributes.description = document.description;
    newDocument.attributes.link = document.thumbnailUrl;

    newDocument.addRelationship(subject, 'subject');

    return newDocument.save({include: ['subject']});
  }

  public listDocuments(){
    return this.documentDatastoreService.all();
  }

  public findDocumentById(id){
    return this.documentDatastoreService.get(id);
  }
}
