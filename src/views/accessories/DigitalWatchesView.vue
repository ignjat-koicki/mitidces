<template>
  <div class="support-content-page">
    <h1>IWatch</h1>

    <div style="display: flex; justify-content: center">
      <img src="./../../assets/watch.png" style="width: 320px; height: 200px" />
      <img src="./../../assets/watch2.png" style="width: 320px; height: 200px" />
    </div>
    <p style="font-size: 24px; font-weight: 400">
      IWatch je najnovija serija digitalnih satova Mitidces kompanije. Satovi nam služe da znamo
      koliko je sati i da pratimo svoje svakodnevne aktivnosti. Merimo puls, otkucaje srca, bavimo
      se merenjima fizičkih aktivnosti, možemo da kažemo pratimo svakodnevne aktivnosti.
    </p>

    <p style="font-size: 24px; font-weight: 400">
      IWatch satove možete pronaći u najbližim prodavnicama za kupovinu. Za više pitanja
      kontaktirajte najbližu prodavnicu.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DigitalWatches',
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped>
.support-content-page {
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
