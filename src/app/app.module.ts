import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { NgxCoreModule } from 'projects/ngx-core/src/public_api'
import { NgxComponentsModule } from '../../../ngx-components/src/public_api'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { reducers } from './store/ngx.reducers'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxCoreModule,
    NgxComponentsModule,
    // PortalWebModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: true }),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class PortalModule {}
