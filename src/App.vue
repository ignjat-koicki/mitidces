<template>
  <HeaderComponent class="header-wrapper" />
  <div class="container">
    <component :is="getCurrentComponent()" />
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import HeaderComponent from './components/header/HeaderComponent.vue'
import FooterComponent from './components/footer/FooterComponent.vue'
import { Language } from './lang/lang.ts'

export default {
  name: 'App',
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent,
  },
  mounted() {
    const code = sessionStorage.getItem('lang') ?? 'en'
    const language = new Language()
    language.setCurrentLang(code)
  },
  methods: {
    getCurrentComponent() {
      const matched = this.$router.currentRoute.value.matched
      if (matched && matched.length > 0) {
        const component = matched[matched.length - 1]?.components?.default
        return component || null
      }
      return null
    },
  },
}
</script>
<style>
body {
  margin: 0 !important;
  padding: 0 !important;
  overflow-x: hidden;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.container {
  min-height: 100vh;
  box-sizing: border-box;
  margin-top: -20px !important;
}

.bodySearch {
  height: 100vh;
  overflow-y: hidden;
}
@media (max-width: 600px) {
  .container {
    min-height: calc(100vh - 72px);
  }
}
</style>
