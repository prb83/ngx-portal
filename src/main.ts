import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { PortalModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

// platformBrowserDynamic()
//   .bootstrapModule(PortalModule)
//   .catch(err => console.error(err))

platformBrowserDynamic()
  .bootstrapModule(PortalModule)
  .then(() => {
    if ('serviceWorker' in navigator && environment.production) {
      console.log('production ngsw mode')
      navigator.serviceWorker.register('ngsw-worker.js')
    }
  })
  .catch(err => console.log(err))
