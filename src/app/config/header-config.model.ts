export class PortalWebConfiguration {
  _headerConfig
  constructor() {
    this._headerConfig = {
      featureLinksIsActive: true,
      name: 'Nangex-Web',
      link: '/',
      linkIsActive: true,
    }
  }

  /**====================================================
   * GETTER METHODS
   *
   ====================================================*/
  get headerConfig() {
    return this._headerConfig
  }
  /**====================================================
   * SETTER METHODS
   *
   ====================================================*/
}
