import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AppHeaderModule, AppNavModule, AppSidebarModule, HeaderModule, NgxComponentsModule } from 'projects/ngx-components/src/public_api';
import { ConfigService, NgxAuthInterceptorService, NgxCoreModule } from 'projects/ngx-core/src/public_api';
import { AppMaterialModule } from 'projects/ngx-portal-app/src/app/app-material/app-material.module';
import { NgxDashboardModule } from 'projects/ngx-portal-app/src/app/dashboard/dashboard.module';
import { PagesModule } from 'projects/ngx-portal-web/src/app/pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store/ngx.reducers';

const config: SocketIoConfig = {
  // url: 'http://localhost:3232',
  url: 'https://prb.nangex-portal.com/',
  options: {},
}
const appInitializerFn = (appConfig: ConfigService) => {
  return () => {
    return appConfig.loadAppConfig()
  }
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxCoreModule,
    NgxComponentsModule,
    AppSidebarModule,
    AppHeaderModule,
    AppNavModule,
    NgxDashboardModule,
    PagesModule,
    HeaderModule,
    AppMaterialModule,
    // PortalWebModule,
    SocketIoModule.forRoot(config),
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: true }),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NgxAuthInterceptorService,
      multi: true,
    },

    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
  bootstrap: [AppComponent],
})
export class PortalModule {}
