import {environment} from "../environments/environment";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlatformComponent } from './components/platform/platform.component';
import { SocialContractComponent } from './components/social-contract/social-contract.component';
import { AcademyComponent } from './components/academy/academy.component';
import { AlternaTvComponent } from './components/alterna-tv/alterna-tv.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderNavComponent } from './components/slider-nav/slider-nav.component';
import { LogiComponent } from './components/logi/logi.component';
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {UserService} from "./services/user.service";
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import {CategoryService} from "./services/category.service";
import { ProjectService } from "./services/project.service";
import { SignInComponent } from './components/sign-in/sign-in.component';
import {AdminAuthGuardService} from './services/admin-auth-guard.service';
import { AdminProjectsComponent } from './components/admin-projects/admin-projects.component';
import { EditProjectsComponent } from './components/edit-projects/edit-projects.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlatformComponent,
    SocialContractComponent,
    AcademyComponent,
    AlternaTvComponent,
    AboutUsComponent,
    ContactsComponent,
    NotFoundComponent,
    FooterComponent,
    SliderNavComponent,
    LogiComponent,
    AllProjectsComponent,
    AddProjectComponent,
    SignInComponent,
    AdminProjectsComponent,
    EditProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProjectService,
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
