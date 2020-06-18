import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './services/interceptor/interceptor';
import { PortalSharedModule } from '../portal-shared';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PortalSharedModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ]
})
export class PortalCoreModule { }
