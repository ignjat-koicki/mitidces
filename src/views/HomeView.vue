<template>
  <div class="home-page">
    <img src="./../assets/background.png" class="background-img" />
  </div>

  <div class="mobile-phone-views"></div>
</template>

<script lang="ts"></script>

<style scoped>
.home-page {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
}

.tv-img {
  max-width: 1200px;
}
.laptops-img {
  max-width: 1200px;
}
.mobile-phones-img {
  max-width: 1200px;
}
.background-img {
  display: block;
  width: 100% !important;
  height: 600px;
}

@media screen and (max-width: 600px) {
  .background-img {
    height: 150px;
  }
}
</style>
