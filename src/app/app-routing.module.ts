import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component'

import { ContactListComponent } from './contact-list/contact-list.component'
import { ContactEditComponent} from './contact-edit/contact-edit.component'
import { ContactNewComponent } from './contact-new/contact-new.component'

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
    children: [
      {
        path: '',
        component: ContactListComponent
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
