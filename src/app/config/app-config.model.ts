export class AppWebConfiguration {
  private _liveEndpoint: boolean

  constructor() {
    this._liveEndpoint = true
  }
  /**====================================================
   * GETTER METHODS
   *
   ====================================================*/

  // get endpoint(): string {
  //     let temp = this._configService.devEnvironment
  //     if (this._liveEndpoint) {
  //         temp = this._configService.environment
  //     }
  //     return temp
  // }
  get liveEndpoint(): boolean {
    return this._liveEndpoint
  }

  /**====================================================
   * SETTER METHODS
   *
   ====================================================*/
}
