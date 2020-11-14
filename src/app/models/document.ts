import { DocumentResource, Resource } from 'ngx-jsonapi';
import { Subject } from './subject';

export class Documents extends Resource {
    public attributes = {
        name: '',
        description: '',
        link: ''
    };
    
    public relationships = {
        'subject': new DocumentResource<Subject>()
    }
}