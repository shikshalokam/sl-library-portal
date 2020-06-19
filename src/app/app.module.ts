import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, DoBootstrap, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CoreModule, TranslateService, SharedModule } from 'shikshalokam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/portal-core/components/header/header.component';
// import { JwtModule } from '@auth0/angular-jwt';
import { PortalCoreModule } from './modules/portal-core/portal-core.module';
// import { keyCloakService } from './modules/admin-core';
PortalSharedModule
import { environment } from 'src/environments/environment';
import { KeycloakAngularModule } from 'keycloak-angular';
import { keyCloakService } from './keycloack.service';

import { CommonModule } from '@angular/common';
// import { BreadCrumComponent } from './modules/admin-core/components/bread-crum/bread-crum.component';
import { PortalSharedModule } from './modules/portal-shared/portal-shared.module';
import { HomeComponent } from './modules/portal-core/components/home/home.component';
import { PortalFooterComponent } from './modules/portal-core/components/portal-footer/portal-footer.component';
import { SideMenuComponent } from './modules/portal-core/components/side-menu/side-menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';



export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SideMenuComponent,
    // BreadCrumComponent,
    PortalFooterComponent
  ],
  imports: [
    BrowserModule,
    PortalSharedModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    CommonModule,
    MatSidenavModule,
    // CoreModule.forRoot(),
    PortalCoreModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //   }
    // }),
    // AdminCoreModule,
  ],
  entryComponents: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    //  TranslateService,
    keyCloakService
  ],
})
export class AppModule  {

  constructor(private auth: keyCloakService) { }

  ngDoBootstrap(appRef: ApplicationRef) {
    this.auth.initilizeKeycloak({
      config: {
        'url': environment.keycloak.url,
        'realm': environment.keycloak.realm,
        'clientId': environment.keycloak.clientId,
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
    }).then(success => {
      appRef.bootstrap(AppComponent);
    }).catch(error => {
    })
  }
}
