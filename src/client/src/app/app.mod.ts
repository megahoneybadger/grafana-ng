import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { AppComponent } from './app';
import { AppRoutingModule } from './app.mod-r';
import { SidemenuComponent } from './pages/layout/sidemenu/sidemenu';
import { SidebarTopComponent } from './pages/layout/sidemenu/top/top';
import { SidebarBottomComponent } from './pages/layout/sidemenu/bottom/bottom';

import { MessageService } from 'primeng/api';
import { JwtHelperService } from '@auth0/angular-jwt';
import { OrgSettingsComponent } from './pages/org/settings/org-settings';
import { UsersComponent } from './pages/users/org/org-users';
import { NotFoundComponent } from './pages/base/not-found/not-found';
import { EdUilibModule, Notes } from 'uilib';
import { EdCommonModule, NavigationProvider, AuthService, PluginService,
  PluginStore, DataSourceStore, DataSourceService, AuthGuard, HttpErrorInterceptor, OrgService } from 'common';
import { PluginLoader } from './common/src/plugins/plugin-loader.s';
import { LoginComponent } from './pages/layout/login/login';
import { LayoutComponent } from './pages/layout/layout';
import { BackendSettingsComponent } from './pages/profile/config/config';
import { OrgUsersNameFilterPipe } from './pages/users/org/org-users.p';

@NgModule({
  declarations: [
    
    AppComponent,
    LayoutComponent,
    LoginComponent,

    SidemenuComponent,
    SidebarTopComponent,
    SidebarBottomComponent,
    
    UsersComponent,
    OrgUsersNameFilterPipe,
    BackendSettingsComponent,
    OrgSettingsComponent,

    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

    AppRoutingModule,
    EdCommonModule,
    EdUilibModule,

  ],
  providers: [
    NavigationProvider,
    JwtHelperService,
    AuthService,
    AuthGuard,

    PluginStore,
    PluginLoader,
    PluginService,
    OrgService,

    DataSourceService,
    DataSourceStore,

    MessageService,
    Notes,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( ){
    
  }
}
