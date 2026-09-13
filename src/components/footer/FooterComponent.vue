<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-item-header">
        <h2>Mitidces</h2>
      </div>
      <div v-for="section in footer" :key="section.header" class="footer-item">
        <h3>{{ section.header }}</h3>
        <div v-for="item in section.items" :key="item.name" class="footer-sub-item">
          <a>
            {{ item.name }}
            <span class="text-line"></span>
          </a>
        </div>
      </div>
    </div>
    <p class="copyright">
      © 2024 Mitidces. All rights reserved. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp;<span>Terms of use</span> &nbsp; | &nbsp;<span>Privacy Policy</span> &nbsp; |
      &nbsp;Legal Questions &nbsp;| &nbsp; Sales
      <router-link
        :to="{ name: 'Language' }"
        style="margin-left: auto; display: flex; justify-self: flex-end"
        >{{ currentLang.name }}</router-link
      >
    </p>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterView',
  data() {
    return {
      footer: [
        {
          header: 'Explore',
          items: [
            { name: 'Products', href: '/products' },
            { name: 'Services', href: '/services' },
            { name: 'Features', href: '/features' },
          ],
        },
        {
          header: 'Company',
          items: [
            { name: 'About us', href: '/about' },
            { name: 'Contact us', href: 'mailto:hello@mitidces.com' },
          ],
        },
        {
          header: 'Connect',
          items: [{ name: 'hello@mitidces.com' }, { name: 'Available Monday to Friday' }],
        },
      ],
      currentLang: {
        name: 'English',
        nativeName: 'English',
        code: 'EN',
        region: 'Europe',
        speakers: '1.5 billion',
      },
    }
  },
}
</script>

<style scoped>
.footer {
  padding: 40px 32px 20px;
}

.text-line {
  display: block;
  width: 2px;
  height: 2px;
  background-color: #0077ed;
  transition: width 0.3s ease !important;
}

.footer-sub-item:hover {
  text-decoration: underline;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  border-top: 1px solid #909090;
  padding-top: 20px;
  margin: 0 auto;
}

.footer-item,
.footer-item-header {
  display: flex;
  flex-direction: column;
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

.copyright {
  max-width: 1200px;
  margin: 32px auto 0 !important;
  padding-top: 16px;
  border-top: 1px solid #909090;
  font-size: 0.875rem;
  display: flex;
}

@media (max-width: 600px) {
  .footer {
    padding: 32px 16px 16px;
    text-align: center;
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 16px;
  }

  .footer-item-header {
    grid-column: 1 / -1;
    align-items: center;
  }

  .copyright {
    margin-top: 24px !important;
  }
}
</style>
