<template>
  <div class="section-office-header">
    <h1 style="font-size: 50px">eOffice &nbsp;</h1>
    <img src="./../assets/eOffice1.png" class="office-img" />
  </div>
  <div class="section-office-content">
    <p style="text-align: center; font-size: 24px">
      eOffice je naše okruženje za poslovne aplikacije. Poslovne aplikacije Vam mogu biti od velike
      pomoći u svakodnevnoj upotrebi. To je vrsta alata za izradu dokumentacija, prezentacija,
      izveštaja, tabelarnih prikaza podataka.
    </p>
    <p style="text-align: center; font-size: 24px">
      Popularne aplikacije su: PowerAcel, DataLetter, Presentation Manager, TMail.
    </p>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.section-office-header {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-office-content {
  display: flex;
  flex-direction: column;
  margin-top: 30px !important;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.office-img {
  width: 100px;
  height: 75px;
}
</style>
