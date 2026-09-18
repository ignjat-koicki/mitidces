<template>
  <footer class="footer">
    <div class="footer-heading">
      <p>
        Discover innovative technology, digital products, gaming experiences, and solutions designed
        for modern users. Explore our products, learn about purchasing, shipping, returns, refunds,
        privacy, and other important information to ensure a secure and transparent experience.
      </p>
      <p>
        We are committed to delivering a transparent and reliable experience for every customer.
        Visit our support and legal pages to learn more about our terms of use, privacy policies,
        customer rights, and the guidelines that govern our services. Whether you're exploring our
        latest technology, gaming solutions, or digital products, we're here to help you navigate
        every step with confidence.
      </p>
    </div>
    <div class="footer-content">
      <div class="footer-item-header">
        <img src="./../../assets/logo.png" style="width: 160px" />
      </div>
      <div class="footer-menu">
        <div v-for="section in footer" :key="section.header" class="footer-item">
          <h3>{{ section.header }}</h3>
          <div v-for="item in section.items" :key="item.name" class="footer-sub-item">
            <router-link :to="{ name: item.href }">
              {{ item.name }}
              <span class="text-line"></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <p class="copyright social-links">
      <span>Follow us:</span>
      <a href="#" aria-label="Instagram">
        <font-awesome-icon :icon="faInstagram" />
      </a>

      <a href="#" aria-label="Facebook">
        <font-awesome-icon :icon="faFacebook" />
      </a>

      <a href="#" aria-label="Twitter">
        <font-awesome-icon :icon="faTwitter" />
      </a>
    </p>
    <p class="copyright">
      © 2024 Mitidces. All rights reserved. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<router-link
        v-for="value in bottomFooter"
        :to="{ name: value.route }"
        :key="value.route"
        >{{ value.name }}&nbsp;&nbsp;
      </router-link>
      <router-link
        :to="{ name: 'Language' }"
        style="margin-left: auto; display: flex; justify-self: flex-end"
        >{{ currentLang.name }} / {{ currentLang.code }}</router-link
      >
    </p>
  </footer>
</template>

<script lang="ts">
import { Language } from '@/lang/lang'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'FooterView',
  components: {
    FontAwesomeIcon: FontAwesomeIcon,
  },
  data() {
    return {
      footer: [
        {
          header: 'Explore',
          items: [
            { name: 'ModelOffers', href: 'ModelOffers' },
            { name: 'TechBook', href: 'Laptops' },
            { name: 'Tech', href: 'MobilePhones' },
            { name: 'STech', href: 'TVs' },
          ],
        },
        {
          header: 'Entertaiment',
          items: [
            { name: 'ePlayStudio', href: 'ModelOffers' },
            { name: 'MyMovie', href: 'ModelOffers' },
            { name: 'Mitidces Fitness', href: 'ModelOffers' },
            { name: 'Mitidces News', href: 'ModelOffers' },
            { name: 'Mitidces Podcasts', href: 'ModelOffers' },
          ],
        },
        {
          header: 'About',
          items: [
            { name: 'About us', href: 'ModelOffers' },
            { name: 'Customer Support', href: 'ModelOffers' },
            { name: 'Stores', href: 'ModelOffers' },
            { name: 'Investors', href: 'ModelOffers' },
            { name: 'Contact us', href: 'ModelOffers' },
            { name: 'Offices', href: 'ModelOffers' },
            { name: 'Career', href: 'ModelOffers' },
          ],
        },
      ],
      bottomFooter: [
        {
          name: 'Terms of Use',
          route: 'TermsOfUses',
        },
        {
          name: 'Privacy Policy',
          route: 'PrivacyPolices',
        },
        {
          name: 'Legal Questions',
          route: 'LegalQuestions',
        },
        {
          name: 'Sales',
          route: 'Sales',
        },
      ],
      currentLang: {
        name: 'English',
        nativeName: 'English',
        code: 'EN',
        region: 'Europe',
        speakers: '1.5 billion',
      },
      currentLangCode: '',
      faInstagram: faInstagram,
      faFacebook: faFacebook,
      faTwitter: faTwitter,
    }
  },
  methods: {
    initLang() {
      const language = new Language()
      this.currentLangCode = language.currentLangCode!
    },
  },
  created() {
    if (sessionStorage.getItem('currentLanguage'))
      this.currentLang = JSON.parse(sessionStorage.getItem('currentLanguage')!)
  },
}
</script>

<style>
.footer {
  padding: 40px 32px 20px;
}

.footer-heading {
  max-width: 1200px;
  margin: 0 auto;
  color: grey;

  display: flex;
  flex-direction: column;
  row-gap: 10px;

  padding: 10px 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 180px 1fr;

  gap: 32px;

  border-top: 1px solid #909090;
  padding-top: 20px;
}

.footer-item-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-menu {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  gap: 80px;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.footer h2,
.footer h3,
.footer p {
  margin: 0;
}

.footer h3 {
  font-size: 1rem;
}

.footer a {
  color: inherit;
  text-decoration: none;
}

.footer-sub-item:hover {
  text-decoration: underline;
}
.footer-sub-item:hover .text-line {
  width: 100%;
  height: 2px;
}

.footer-sub-item a {
  text-decoration: none;
}

.text-line {
  display: block;
  width: 0px;
  height: 2px;
  margin: 0 auto;

  background-color: #0077ed;

  transition: width 0.3s ease !important;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 18px;
}

.social-links a {
  color: #606060;
  font-size: 20px;
  text-decoration: none;

  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.social-links a:hover {
  color: #000;
  transform: translateY(-2px);
}

.copyright {
  max-width: 1200px;

  margin: 32px auto 0 !important;
  padding-top: 16px;

  border-top: 1px solid #909090;

  font-size: 0.875rem;

  display: flex;
}

/* =========================================
   MOBILE
========================================= */
@media screen and (max-width: 600px) {
  .footer {
    padding: 32px 16px 16px;
    text-align: center;
  }

  .footer-content {
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 35px;
  }

  .footer-item-header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-menu {
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 35px;

    margin: 0 !important;
  }

  .footer-item {
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 10px;

    margin: 0;
  }

  .footer-item h3 {
    text-align: center;
    margin: 0;
  }

  .footer-sub-item {
    text-align: center;
  }

  .copyright {
    width: 100%;

    margin-top: 24px !important;

    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;

    gap: 10px;
    font-size: 12px;
  }

  .copyright a {
    font-size: 12px !important;
  }

  .social-links {
    justify-content: center;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */

@media screen and (max-width: 400px) {
  .footer-menu {
    gap: 25px 15px;
  }

  .footer-item {
    width: 120px;
  }
}
</style>
