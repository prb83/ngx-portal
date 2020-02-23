import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io'
// import { WebBarModule } from 'projects/ngx-components/src/lib/web-module-bar/web-module-bar.module'
import {
  AppBarModule,
  AppNavModule,
  AppOptionsModule,
  AppSidebarModule,
  HeaderModule,
  NgxComponentsModule,
  WebBarModule,
  WebModuleContentRowModule,
} from 'projects/ngx-components/src/public_api'
import {
  ConfigService,
  NgxAuthInterceptorService,
  NgxCoreModule,
  GraphqlModule,
} from 'projects/ngx-core/src/public_api'
import { AppMaterialModule } from 'projects/ngx-portal-app/src/app/app-material/app-material.module'
import { NgxDashboardModule } from 'projects/ngx-portal-app/src/app/dashboard/dashboard.module'
import { PagesModule } from 'projects/ngx-portal-web/src/app/pages/pages.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LogFirstService } from './log-first.service'
import { LogSecondService } from './log-second.service'
import { reducers } from './store/ngx.reducers'

const config: SocketIoConfig = {
  // url: 'http://localhost:3232',
  url: 'https://www.brix-running.de/',
  options: {},
}
const appInitializerFn = (appConfig: ConfigService) => {
  return () => {
    return appConfig.loadAppConfig()
  }
}
export function getLogService(useOAuth: boolean) {
  if (useOAuth) {
    return new LogFirstService()
  } else {
    return LogSecondService
  }
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxCoreModule,
    GraphqlModule,
    NgxComponentsModule,
    AppOptionsModule,
    AppSidebarModule,
    AppBarModule,
    WebBarModule,
    WebModuleContentRowModule,
    AppNavModule,
    NgxDashboardModule,
    PagesModule,
    HeaderModule,
    AppMaterialModule,
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
    { provide: 'ENABLE_OAUTH', useValue: true },
    {
      provide: LogFirstService,
      useFactory: getLogService,
      deps: ['ENABLE_OAUTH'],
    },
  ],
  bootstrap: [AppComponent],
})
export class PortalModule {}
