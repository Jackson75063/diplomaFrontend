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
import {MatIconModule, MatSelectModule, MatSortModule, MatTableModule, MatToolbarModule} from '@angular/material';

import { MatInputModule } from '@angular/material';
import { RenamerPipe } from './renamer.pipe';

const appRoutes: Routes = [
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
];


@NgModule({
  declarations: [
    AppComponent,
    AbiturientComponent,
    AdminPanelComponent,
    AboutUsComponent,
    AddFacultComponent,
    AddSpecComponent,
    MapSubjTestComponent,
    KeyValuePipe,
    FinishMapComponent,
    AbitMainPageComponent,
    RenamerPipe
  ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        BrowserModule /* or CommonModule */,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatSortModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
