/*
/!*
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AbiturientComponent} from './abiturient/abiturient.component';
import {HttpClientModule} from '@angular/common/http';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {RouterModule, Routes} from '@angular/router';
import {AddFacultComponent} from './add-facult/add-facult.component';
import {AddSpecComponent} from './add-spec/add-spec.component';
import {MapSubjTestComponent} from './map-subj-test/map-subj-test.component';
import {KeyValuePipe} from './keys.pipe';
import {FinishMapComponent} from './finish-map/finish-map.component';
import {AbitMainPageComponent} from './abit-main-page/abit-main-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatInputModule, MatSelectModule, MatSortModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {RenamerPipe} from './renamer.pipe';

import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';


/!*const appRoutes: Routes = [
  { path: '', component: AbiturientComponent },
  { path: 'pass', component: AbitMainPageComponent },
  { path: 'fa' , component: AddFacultComponent},
  { path: 'spec' , component: AddSpecComponent},
  { path: 'about' , component: AboutUsComponent},
  {
    path: 'heroes',
    component: AboutUsComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
];*!/

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    // AbiturientComponent,
    // AdminPanelComponent,
    // AboutUsComponent,
    // AddFacultComponent,
    // AddSpecComponent,
    // MapSubjTestComponent,
    // KeyValuePipe,
    // FinishMapComponent,
    // AbitMainPageComponent,
    RenamerPipe
  ],
  imports: [
    // RouterModule.forRoot(appRoutes),
    // BrowserModule,
    // HttpClientModule,
    // FormsModule,
    // BrowserAnimationsModule,
    // MatIconModule,
    BrowserModule /!* or CommonModule *!/,
    FormsModule,
    ReactiveFormsModule,
    // MatToolbarModule,
    // MatInputModule,
    // MatSelectModule,
    // MatTableModule,
    // MatSortModule,
    authInterceptorProviders

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
*!/


import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RenamerPipe} from './renamer.pipe';

import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {AbitMainPageComponent} from './abit-main-page/abit-main-page.component';
import {AbiturientComponent} from './abiturient/abiturient.component';

import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {AddFacultComponent} from './add-facult/add-facult.component';
import {AddSpecComponent} from './add-spec/add-spec.component';
import {MapSubjTestComponent} from './map-subj-test/map-subj-test.component';
import {FinishMapComponent} from './finish-map/finish-map.component';
import {KeyValuePipe} from '@angular/common';


/!*const appRoutes: Routes = [
  { path: '', component: AbiturientComponent },
  { path: 'pass', component: AbitMainPageComponent },
  { path: 'fa' , component: AddFacultComponent},
  { path: 'spec' , component: AddSpecComponent},
  { path: 'about' , component: AboutUsComponent},
  {
    path: 'heroes',
    component: AboutUsComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
];*!/



@NgModule({
  declarations: [
    KeyValuePipe,
    // KeyValuePipe,
    AbitMainPageComponent,
    RenamerPipe,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    AbitMainPageComponent,
    AbiturientComponent,
    AboutUsComponent,
    AddFacultComponent,
    AddSpecComponent,
    MapSubjTestComponent,
    FinishMapComponent
  ],
  imports: [
    // RouterModule.forRoot(appRoutes),
    // BrowserModule,
    // HttpClientModule,
    // FormsModule,
    // BrowserAnimationsModule,
    // MatIconModule,
    BrowserModule /!* or CommonModule *!/,
    FormsModule,
    ReactiveFormsModule,
    // MatToolbarModule,
    // MatInputModule,
    // MatSelectModule,
    // MatTableModule,

    // MatSortModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    authInterceptorProviders

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/


import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {ProfileComponent} from './profile/profile.component';

import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {AbiturientComponent} from './abiturient/abiturient.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {RenamerPipe} from './renamer.pipe';
import {MatInputModule, MatSelectModule, MatSortModule, MatTableModule} from '@angular/material';
import {AddFacultComponent} from './add-facult/add-facult.component';
import {AddSpecComponent} from './add-spec/add-spec.component';
import {MapSubjTestComponent} from './map-subj-test/map-subj-test.component';
import {FinishMapComponent} from './finish-map/finish-map.component';
import {AbitMainPageComponent} from './abit-main-page/abit-main-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgxSpinnerModule} from 'ngx-spinner';

import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatRadioModule} from "@angular/material/radio";
import { SidebarComponent } from './sidebar/sidebar.component';
import { HelpBotComponent } from './help-bot/help-bot.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    AbiturientComponent,
    AboutUsComponent,
    RenamerPipe,
    AddFacultComponent,
    AddSpecComponent,
    MapSubjTestComponent,
    // KeyValuePipes,
    FinishMapComponent,
    AbitMainPageComponent,
    RenamerPipe,

  //  aaaaa
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    AbitMainPageComponent,
    AbiturientComponent,
    AboutUsComponent,
    AddFacultComponent,
    AddSpecComponent,
    MapSubjTestComponent,
    FinishMapComponent,
    SidebarComponent,
    HelpBotComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    BrowserAnimationsModule,

    NgxSpinnerModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
