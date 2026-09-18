<template>
  <div class="section-office-header">
    <h1 style="font-size: 50px">eOffice &nbsp;</h1>
    <img src="./../assets/eOffice.png" class="office-img" />
  </div>
  <div v-for="app in apps" v-bind:key="app.id" class="section-apps">
    <div>
      <p class="text-align-start">{{ app.name }}</p>
      <img :src="app.src" :alt="app.alt" class="office-item-icon" />
    </div>
    <div>
      <p class="apps-content">
        {{ app.text }}
      </p>
    </div>
  </div>
  <div class="section-office-content">
    <p style="text-align: start">
      eOffice je moderna digitalna platforma namenjena organizaciji, upravljanju i automatizaciji
      poslovnih procesa. Sistem omogućava korisnicima da na jednom mestu upravljaju dokumentima,
      poslovnim zadacima, komunikacijom i drugim aktivnostima koje su deo svakodnevnog poslovanja.
      Cilj eOffice platforme je da pojednostavi rad zaposlenih, smanji potrebu za manuelnim
      procesima i omogući efikasnije upravljanje poslovnom dokumentacijom. Kroz centralizovan sistem
      korisnici mogu lakše da kreiraju, pregledaju, organizuju i prate dokumente tokom njihovog
      životnog ciklusa.
    </p>
    <p>
      eOffice pruža podršku elektronskom upravljanju dokumentima, organizaciji poslovnih procesa i
      praćenju aktivnosti korisnika. Sistem može da obuhvati različite funkcionalnosti kao što su
      arhiviranje dokumenata, pretraga, upravljanje korisnicima i pravima pristupa, tokovi
      odobravanja, evidencija aktivnosti i elektronsko potpisivanje dokumenata. Poseban fokus
      stavljen je na preglednost i jednostavno korišćenje sistema. Korisnici mogu da pristupe
      relevantnim informacijama kroz intuitivan interfejs, dok organizacije dobijaju centralizovano
      mesto za upravljanje poslovnim sadržajem i procesima. eOffice je namenjen kompanijama i
      organizacijama koje žele da unaprede način na koji upravljaju dokumentima i poslovnim
      procesima, uz mogućnost prilagođavanja sistema sopstvenim potrebama i organizacionoj
      strukturi.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'eOffice',
  data() {
    return {
      apps: [
        {
          id: 1,
          name: 'Power Acel',
          text: 'Power Acel je aplikacija namenjena za vođenje svakodnevne dokumentacije potrebne svakom korisniku.',
          alt: 'power acel img',
          src: '/power-acel.png',
        },

        {
          id: 1,
          name: 'Square Cells',
          alt: 'square cells img',
          text: '',
          src: '/square-cells.png',
        },

        {
          id: 1,
          name: 'Presentation Manager',
          alt: 'presentation manager img',
          text: '',
          src: '/presentation-manager.png',
        },
      ],
    }
  },
}
</script>

<style scoped>
.section-office-header {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.office-item-icon {
  width: 100px;
}

.text-align-start {
  text-align: start;
}

.apps-content {
  margin-top: 100px;
  margin-left: 50px;
}

.section-apps {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1200px;
  row-gap: 50px;
  padding: 20px;
  margin: 0 auto;
  box-shadow: 2px 5px 9px rgba(0, 0, 0, 0.15);
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
  width: 200px;
  height: 130px;
}
</style>
