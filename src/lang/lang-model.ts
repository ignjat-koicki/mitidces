export class LangModel {
  Navigation: Navigation[] = []
  Pages: Pages = new Pages()
}

export class Navigation {
  Name: string = ''
  Route: string = ''
  SubItems?: Navigation[] = []
}

export class Pages {
  [key: string]: {
    [key: string]: object | string | number | boolean
  }
}
