import { Injectable } from '@angular/core'
import { SwUpdate } from '@angular/service-worker'
import { UiService } from 'projects/ngx-components/src/public_api'
@Injectable({
  providedIn: 'root',
})
export class UpdateworkerService {
  constructor(private swUpdate: SwUpdate, private _ngxUiService: UiService) {
    if (!this.swUpdate.isEnabled) {
      console.log('Nope 🙁')
    }
  }
  checkWorkerUpdate() {
    this.swUpdate
      .checkForUpdate()
      .then(res => console.log('check worker update', res))
  }
  acitvateWorkerUpdate() {
    this.swUpdate
      .activateUpdate()
      .then(res => console.log('activated worker update: ', res))
  }
  checkWorkerAndReload() {
    console.log('check worker and reload', this.swUpdate)
    this.swUpdate.available.subscribe(evt => {
      this._ngxUiService.showToast(`Update Available page will`, `Reload`)
      // window.location.reload()
      console.log('pwa window reload after timeout')
      setTimeout(() => {
        location.reload()
      }, 1000)
    })
  }
}
