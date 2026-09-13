<template>
  <div class="language-page">
    <div v-for="region in regions" :key="region">
      <h3>{{ region }}</h3>
      <div
        v-for="lang in languages.filter((x) => x.region == region)"
        :key="lang.code"
        class="lang-code-item"
      >
        <div style="position: relative; top: -12px; left: -10px">{{ lang.nativeName }}</div>
        <div style="display: flex">
          <p>{{ lang.name }} &nbsp; / &nbsp;</p>
          <p>{{ lang.code }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LangPage',
  data() {
    return {
      searchTerm: '',
      selectedRegion: 'All regions',
      regions: ['Africa', 'Asia', 'Europe', 'Middle East', 'The Americas'],
      languages: [
        {
          name: 'Arabic',
          nativeName: 'العربية',
          code: 'AR',
          region: 'Middle East',
          speakers: '274 million',
        },
        {
          name: 'Bengali',
          nativeName: 'বাংলা',
          code: 'BN',
          region: 'Asia',
          speakers: '233 million',
        },
        {
          name: 'Chinese',
          nativeName: '中文',
          code: 'ZH',
          region: 'Asia',
          speakers: '1.3 billion',
        },
        {
          name: 'English',
          nativeName: 'English',
          code: 'EN',
          region: 'Europe',
          speakers: '1.5 billion',
        },
        {
          name: 'French',
          nativeName: 'Français',
          code: 'FR',
          region: 'Europe',
          speakers: '321 million',
        },
        {
          name: 'German',
          nativeName: 'Deutsch',
          code: 'DE',
          region: 'Europe',
          speakers: '134 million',
        },
        {
          name: 'Serbian',
          nativeName: 'Srpski',
          code: 'RS',
          region: 'Europe',
          speakers: '10 million',
        },
        {
          name: 'Hausa',
          nativeName: 'Harshen Hausa',
          code: 'HA',
          region: 'Africa',
          speakers: '94 million',
        },
        {
          name: 'Hindi',
          nativeName: 'हिन्दी',
          code: 'HI',
          region: 'Asia',
          speakers: '609 million',
        },
        {
          name: 'Indonesian',
          nativeName: 'Bahasa Indonesia',
          code: 'ID',
          region: 'Asia',
          speakers: '199 million',
        },
        {
          name: 'Japanese',
          nativeName: '日本語',
          code: 'JA',
          region: 'Asia',
          speakers: '125 million',
        },
        {
          name: 'Korean',
          nativeName: '한국어',
          code: 'KO',
          region: 'Asia',
          speakers: '82 million',
        },
        {
          name: 'Portuguese',
          nativeName: 'Português',
          code: 'PT',
          region: 'The Americas',
          speakers: '264 million',
        },
        {
          name: 'Punjabi',
          nativeName: 'ਪੰਜਾਬੀ',
          code: 'PA',
          region: 'Asia',
          speakers: '148 million',
        },
        {
          name: 'Russian',
          nativeName: 'Русский',
          code: 'RU',
          region: 'Europe',
          speakers: '255 million',
        },
        {
          name: 'Spanish',
          nativeName: 'Español',
          code: 'ES',
          region: 'The Americas',
          speakers: '559 million',
        },
        {
          name: 'Swahili',
          nativeName: 'Kiswahili',
          code: 'SW',
          region: 'Africa',
          speakers: '98 million',
        },
        { name: 'Tamil', nativeName: 'தமிழ்', code: 'TA', region: 'Asia', speakers: '86 million' },
        {
          name: 'Turkish',
          nativeName: 'Türkçe',
          code: 'TR',
          region: 'Middle East',
          speakers: '88 million',
        },
        { name: 'Urdu', nativeName: 'اردو', code: 'UR', region: 'Asia', speakers: '231 million' },
        {
          name: 'Yoruba',
          nativeName: 'Èdè Yorùbá',
          code: 'YO',
          region: 'Africa',
          speakers: '44 million',
        },
      ],
    }
  },
  computed: {
    filteredLanguages() {
      const query = this.searchTerm.trim().toLowerCase()
      return this.languages.filter((language) => {
        const matchesRegion =
          this.selectedRegion === 'All regions' || language.region === this.selectedRegion
        const matchesSearch = [language.name, language.nativeName, language.region].some((value) =>
          value.toLowerCase().includes(query),
        )
        return matchesRegion && matchesSearch
      })
    },
  },
}
</script>

<style scoped>
.language-page {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 78px 32px 110px;
  color: #101010;
}

.section-language-header {
  max-width: 720px;
  margin-bottom: 48px;
}

.lang-code-item {
  border: 1px solid #606060;
  padding: 20px;
  width: 200px;
  height: 50px;
}

.lang-code-item:hover {
  transform: scaleY(1.01);
  border-color: #0077ed;
}
</style>
