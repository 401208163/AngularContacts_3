import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

import { LayoutComponent } from './layout/layout.component';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent} from './contact-edit/contact-edit.component';
import { ContactNewComponent } from './contact-new/contact-new.component';

import { TagEditComponent } from './tag-edit/tag-edit.component';
// tslint:disable-next-line: import-spacing
import { TagListComponent } from  './tag-list/tag-list.component';
import { TagNewComponent } from './tag-new/tag-new.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ContactListComponent
      },
      {
        path: 'new',
        component: ContactNewComponent
      },
      {
        path: 'edit/:id', // 动态路径
        component: ContactEditComponent
      }
    ]
  },
  {
    path: 'tags',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TagListComponent
      },
      {
        path: 'new',
        component: TagNewComponent
      },
      {
        path: 'edit', 
        component: TagEditComponent
      }
    ]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
