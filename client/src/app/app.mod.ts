import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { AppComponent } from './app';
import { AppRoutingModule } from './app.mod-r';
import { SidemenuComponent } from './pages/layout/sidemenu/sidemenu';
import { SidebarTopComponent } from './pages/layout/sidemenu/top/top';
import { SidebarBottomComponent } from './pages/layout/sidemenu/bottom/bottom';
import { DataSourcesComponent } from './pages/datasources/datasources';
import { UilibModule } from './uilib/uilib.mod';
import { NavigationProvider } from './core/services/navigation.s';
import { MessageService } from 'primeng/api';
import { Notes } from './uilib/note/note-dispatcher';
import { AuthService } from './core/services/auth-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { OrgSettingsComponent } from './pages/org/settings/org-settings';
import { UsersComponent } from './pages/users/org/org-users';


@NgModule({
  declarations: [
    AppComponent,

    SidemenuComponent,
    SidebarTopComponent,
    SidebarBottomComponent,
    
    UsersComponent,
    OrgSettingsComponent,
    DataSourcesComponent,
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

    AppRoutingModule,
    UilibModule,
  ],
  providers: [
    NavigationProvider,
    JwtHelperService,
    AuthService,

    MessageService,
    Notes,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
