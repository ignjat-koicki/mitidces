import type { LangModel } from './lang-model'

export class Language {
  currentLang: LangModel = {
    Navigation: [
      {
        Name: 'Model offer',
        Route: 'Devices',
        SubItems: [
          {
            Name: 'Laptops',
            Route: 'Laptops',
          },
          {
            Name: 'Phones',
            Route: 'MobilePhones',
          },
          {
            Name: 'TVs',
            Route: 'TVs',
          },
        ],
      },
      {
        Name: 'Accessories',
        Route: 'Accessories',
        SubItems: [
          {
            Name: 'Digital Watches',
            Route: 'Watches',
          },
          {
            Name: 'Bunds',
            Route: 'Bunds',
          },
        ],
      },
      {
        Name: 'ePlayStudio',
        Route: 'Entertainment',
      },
      {
        Name: 'eOffice',
        Route: 'eOffice',
      },
      {
        Name: 'Support',
        Route: 'CustomerSupport',
      },
    ],
    Pages: {
      Tvs: {
        heading: 'Tvs',
      },
      Laptops: {
        heading: 'Laptops',
      },
      Phones: {
        heading: 'Phones',
      },
      ePlayStudio: {
        heading: 'ePlayStudio',
      },
      eOffice: {
        heading: 'eOffice',
      },
      News: {
        heading: 'News',
      },
      Accessories: {
        heading: 'Accessories',
      },
      Support: {
        heading: 'Support',
      },
    },
  }

  currentLangCode?: string = 'en'

  RS: LangModel = {
    Navigation: [
      {
        Name: 'Ponuda model',
        Route: 'Devices',
        SubItems: [
          {
            Name: 'Laptopovi',
            Route: 'Laptops',
          },
          {
            Name: 'Mobilni telefoni',
            Route: 'MobilePhones',
          },
          {
            Name: 'Televizori',
            Route: 'TVs',
          },
        ],
      },
      {
        Name: 'ePlayStudio',
        Route: 'Entertainment',
      },
      {
        Name: 'eOffice',
        Route: 'eOffice',
      },
      {
        Name: 'Dodatna oprema',
        Route: 'Accessories',
        SubItems: [
          {
            Name: 'Digitalni satovi',
            Route: 'Watches',
          },
          {
            Name: 'Slušalice',
            Route: 'Bunds',
          },
        ],
      },
      {
        Name: 'Podrška',
        Route: 'CustomerSupport',
      },
    ],
    Pages: {
      Tvs: {
        heading: 'Tvs',
      },
      Laptops: {
        heading: 'Laptops',
      },
      Phones: {
        heading: 'Phones',
      },
      ePlayStudio: {
        heading: 'ePlayStudio',
      },
      eOffice: {
        heading: 'eOffice',
      },
      News: {
        heading: 'News',
      },
      Accessories: {
        heading: 'Accessories',
      },
      Support: {
        heading: 'CustomerSupport',
      },
    },
  }

  EN: LangModel = {
    Navigation: [
      {
        Name: 'Model offer',
        Route: 'Devices',
        SubItems: [
          {
            Name: 'Laptops',
            Route: 'Laptops',
          },
          {
            Name: 'Phones',
            Route: 'MobilePhones',
          },
          {
            Name: 'TVs',
            Route: 'TVs',
          },
        ],
      },
      {
        Name: 'Accessories',
        Route: 'Accessories',
        SubItems: [
          {
            Name: 'Digital Watches',
            Route: 'Watches',
          },
          {
            Name: 'Bunds',
            Route: 'Bunds',
          },
        ],
      },
      {
        Name: 'ePlayStudio',
        Route: 'Entertainment',
      },
      {
        Name: 'eOffice',
        Route: 'eOffice',
      },
      {
        Name: 'Support',
        Route: 'CustomerSupport',
      },
    ],
    Pages: {
      Tvs: {
        heading: 'Tvs',
      },
      Laptops: {
        heading: 'Laptops',
      },
      Phones: {
        heading: 'Phones',
      },
      ePlayStudio: {
        heading: 'ePlayStudio',
      },
      eOffice: {
        heading: 'eOffice',
      },
      News: {
        heading: 'News',
      },
      Accessories: {
        heading: 'Accessories',
      },
      Support: {
        heading: 'Support',
      },
    },
  }

  getLang(code: string) {
    this.setCurrentLang(code)
    return this.currentLang
  }

  setCurrentLang(code: string) {
    if (code == 'en') {
      this.currentLang = this.EN
    }

    if (code == 'sr-latin-rs') {
      this.currentLang = this.RS
    }
    this.currentLangCode = code
  }
}
