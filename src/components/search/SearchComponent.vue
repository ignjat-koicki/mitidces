<template>
  <div class="search-content" v-if="active">
    <div style="display: flex; align-self: flex-start">
      <SearchControlComponent style="margin-left: -8px" :active="active"></SearchControlComponent>
    </div>
    <p>
      <FontAwesomeIcon :size="'xs'" :icon="faChevronRight"></FontAwesomeIcon>
      &nbsp;Products
    </p>
    <p>
      <FontAwesomeIcon :size="'xs'" :icon="faChevronRight"></FontAwesomeIcon>
      &nbsp;About
    </p>
    <p>
      <FontAwesomeIcon :size="'xs'" :icon="faChevronRight"></FontAwesomeIcon>
      &nbsp;Services
    </p>
    <p>
      <FontAwesomeIcon :size="'xs'" :icon="faChevronRight"></FontAwesomeIcon>
      &nbsp;For Customers
    </p>
  </div>
</template>

<script lang="ts">
import { faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SearchControlComponent from '../searchControl/SearchControlComponent.vue'

export default {
  name: 'SearchComponent',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    FontAwesomeIcon: FontAwesomeIcon,
    SearchControlComponent: SearchControlComponent,
  },
  created() {
    if (this.active) {
      document.body.classList.add('bodySearch')
    } else {
      document.body.classList.remove('bodySearch')
    }
  },
  watch: {
    active(newValue: boolean) {
      if (newValue) {
        document.body.classList.add('bodySearch')
      } else {
        document.body.classList.remove('bodySearch')
      }
    },
  },
  data() {
    return {
      faSearch: faSearch,
      faChevronRight: faChevronRight,
    }
  },
}
</script>

<style scoped>
.search-content {
  height: 100vh;
  max-width: 1200px;
  overflow: hidden !important;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  animation: fromUp 1s ease forwards;
  padding: 20px;
}

@keyframes fromUp {
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>
