<template>
  <HeaderComponent class="header-wrapper" />
  <div class="container">
    <router-view />
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import HeaderComponent from './components/header/HeaderComponent.vue'
import FooterComponent from './components/footer/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent,
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
