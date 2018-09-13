import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { AboutUsComponent } from "./components/about-us/about-us.component";
import { AcademyComponent } from "./components/academy/academy.component";
import { AlternaTvComponent } from "./components/alterna-tv/alterna-tv.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { PlatformComponent } from "./components/platform/platform.component";
import { SocialContractComponent } from "./components/social-contract/social-contract.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { LogiComponent } from "./components/logi/logi.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {AddProjectComponent} from "./components/add-project/add-project.component";
import {AllProjectsComponent} from "./components/all-projects/all-projects.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import { AdminProjectsComponent } from './components/admin-projects/admin-projects.component';
import {AdminAuthGuardService} from './services/admin-auth-guard.service';
import {PrivacyPolicyComponent} from './components/privacy-policy/privacy-policy.component';
import {UserAgreementComponent} from './components/user-agreement/user-agreement.component';
import {ResetEmailComponent} from './components/reset-email/reset-email.component';


const routes: Routes = [
  {path: '', redirectTo: 'platform', pathMatch: 'full'},
  {path: 'login', component: LogiComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'academy', component: AcademyComponent},
  {path: 'alterna-tv', component: AlternaTvComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'platform', component: PlatformComponent},
  {path: 'social-contract', component: SocialContractComponent},
  {path: 'all-projects', component: AllProjectsComponent},
  {path: 'all-projects/new', component: AddProjectComponent, canActivate: [AuthGuardService]},
  {path: 'all-projects/id:', component: AddProjectComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
  {path: 'admin/projects', component: AdminProjectsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'user-agreement', component: UserAgreementComponent},
  {path: 'reset-email', component: ResetEmailComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
