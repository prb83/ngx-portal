export class SidebarWebConfiguration {
  private defaultSidebarConfiguration: any

  defaultItemList = [
    // {
    //     name: 'Menu',
    //     group: '0',
    // },
    {
      name: 'Home',
      group: '1',
      sub: [],
    },
    {
      name: 'Themenwelt',
      group: '2',
      sub: [],
    },
    {
      name: 'Sport',
      group: '3',
      sub: [
        {
          name: 'Lauftraining',
          group: '4',
          sub: [],
        },
        {
          name: 'Wettkampfvorbereitung',
          group: '5',
          sub: [],
        },
        {
          name: 'Laufschuhtest',
          group: '6',
          sub: [],
        },
      ],
    },
    {
      name: 'Technical',
      group: '7',
      sub: [
        {
          name: 'Webdevelopment',
          group: '8',
          sub: [],
        },
        {
          name: 'Tools',
          group: '9',
          sub: [],
        },
        {
          name: 'Nangex',
          group: '10',
          sub: [],
        },
      ],
    },
    {
      name: 'Contact',
      group: '11',
      sub: [],
    },
  ]
  constructor() {
    /** ============================================================================
     * sidebar
     *
     =============================================================================*/
    this.defaultSidebarConfiguration = {
      items: this.defaultItemList,
      isOpen: false,
      isActive: true,
    }
  }

  /**====================================================
   * GETTER METHODS
   *
   ====================================================*/

  get defaultSidebarConfig(): Array<any> {
    return this.defaultSidebarConfiguration
  }
  /**====================================================
   * SETTER METHODS
   *
   ====================================================*/
}
