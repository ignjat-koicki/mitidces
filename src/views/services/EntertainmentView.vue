<template>
  <div class="section-entertaiment-header">
    <img src="./../../assets/eplaystudio.png" class="xplay-img" alt="" />
    <p class="heading">GameStudio</p>
    <p style="margin: 0 auto; text-align: center">
      The ePlayStudio is a game studio for Mitidces games, comming soon!
    </p>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.section-entertaiment-header {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
}

.heading {
  text-align: center;
  font-weight: 600;
}

.xplay-img {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
}

@media screen and (max-width: 600px) {
  .heading {
    font-weight: 200;
  }
}
</style>
