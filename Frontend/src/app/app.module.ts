import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from 'ng-mat-carousel';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SensorListComponent } from './components/sensor-list/sensor-list.component';
import { SensorRegisterComponent } from './components/sensor-register/sensor-register.component';
import { ErrorSettingsComponent } from './components/error-settings/error-settings.component';
import { ErrorListComponent } from './components/error-list/error-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SensorListComponent,
    SensorRegisterComponent,
    ErrorSettingsComponent,
    ErrorListComponent
  ],
  imports: [
    AppRoutingModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    CommonModule,
    BrowserModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ChartsModule,
    MatAutocompleteModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

