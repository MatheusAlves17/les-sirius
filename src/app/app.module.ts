import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
// import { NgxMaskModule } from 'ngx-mask';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NavbarComponent } from './components/navbar/navbar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SnackSuccessComponent } from './components/snack-success/snack-success.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpComponent,
    SidebarComponent,
    ProfileComponent,
    SnackSuccessComponent,
  ],
  imports: [
    // NgxMaskModule.forRoot(),
    RouterModule,
    MatMenuModule,
    BrowserModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
