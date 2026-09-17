<template>
  <div class="support-content-page">
    <h1>AirBunds</h1>

    <div style="display: flex; justify-content: center">
      <img src="./../../assets/earbund.png" style="width: 190px; height: 200px" />
      <img src="./../../assets/earbund2.png" style="width: 190px; height: 200px" />
    </div>

    <p style="font-size: 24px; font-weight: 400">
      Air Bunds su bežične slušalice namenjene za svakodnevno slušanje muzike, gledanje video
      sadržaja, obavljanje poziva i druge aktivnosti. Povezuju se putem Bluetooth, nakon
      uključivanja potrebno je pronaći u podešavanjima uređaja i izvršiti povezivanje.
    </p>
    <p style="font-size: 24px; font-weight: 400">
      Slušalice koriste ugrađenu bateriju koja omogućava bežično korišćenje, dok se punjenje vrši
      preko odgovarajućeg kućišta ili priključka za punjenje, u zavisnosti od modela.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      test: [
        {
          question: '',
          answer: '',
        },
      ],
    }
  },
}
</script>

<style scoped>
.support-content-page {
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
