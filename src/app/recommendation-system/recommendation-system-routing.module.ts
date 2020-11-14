import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from '../authentication/components/change-password/change-password.component';
import { AuthGuardService } from '../authentication/services/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { AddDocumentComponent } from './document/components/add-document/add-document.component';
import { ViewDocumentComponent } from './document/components/view-document/view-document.component';
import { RecommendationSystemComponent } from './recommendation-system.component';
import { EditSubjectComponent } from './subject/components/edit-subject/edit-subject.component';
import { ViewSubjectsComponent } from './subject/components/view-subjects/view-subjects.component';


const routes: Routes = [{
  path: "",
  component: RecommendationSystemComponent,
  children: [
    {
      path: "",
      component: HomeComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'change-password/:id',
      component: ChangePasswordComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'subjects/add-subject',
      component: EditSubjectComponent,
      canActivate: [AuthGuardService],
      data:{
        roles : 'Admin'
      }
    },
    {
      path: 'subjects/edit-subject/:id',
      component: EditSubjectComponent,
      canActivate: [AuthGuardService],
      data:{
        roles : 'Admin'
      }
    },
    {
      path: 'subjects/view-subjects',
      component: ViewSubjectsComponent,
      canActivate: [AuthGuardService],
      data:{
        roles : 'Admin'
      }
    },
    {
      path: 'documents/add-documents',
      component: AddDocumentComponent,
      canActivate: [AuthGuardService],
    },
    {
      path: 'documents/view-documents',
      component: ViewDocumentComponent,
      canActivate: [AuthGuardService],
      data:{
        roles : 'Admin'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationSystemRoutingModule { }
