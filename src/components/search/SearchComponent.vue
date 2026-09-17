```vue
<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<template>
  <div class="search-content" v-if="active">
    <div class="search-inner">
      <div class="search-control">
        <SearchControlComponent :active="active" />
      </div>

      <div class="search-links">
        <p>
          <FontAwesomeIcon :size="'xs'" :icon="faChevronRight" />
          <span>Products</span>
        </p>

        <p>
          <FontAwesomeIcon :size="'xs'" :icon="faChevronRight" />
          <span>About</span>
        </p>

        <p>
          <FontAwesomeIcon :size="'xs'" :icon="faChevronRight" />
          <span>Services</span>
        </p>

        <p>
          <FontAwesomeIcon :size="'xs'" :icon="faChevronRight" />
          <span>For Customers</span>
        </p>
      </div>
    </div>
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
    FontAwesomeIcon,
    SearchControlComponent,
  },

  created() {
    this.updateSearchState()
  },

  watch: {
    active() {
      this.updateSearchState()
    },
  },

  beforeUnmount() {
    document.querySelector('.main-header')?.classList.remove('no-line')
    document.body.classList.remove('bodySearch')
  },

  methods: {
    updateSearchState() {
      const header = document.querySelector('.main-header')

      if (this.active) {
        header?.classList.add('no-line')
        document.body.classList.add('bodySearch')
      } else {
        header?.classList.remove('no-line')
        document.body.classList.remove('bodySearch')
      }
    },
  },

  data() {
    return {
      faSearch,
      faChevronRight,
    }
  },
}
</script>

<style scoped>
.search-content {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 40vh;

  background: rgba(255, 255, 255, 0.98);

  z-index: 9999;

  overflow-y: auto;

  animation: searchOpen 0.35s ease forwards;

  border-bottom: 2px solid black;
}

.search-inner {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 100px 20px 40px;

  box-sizing: border-box;
}

/* Search input */

.search-control {
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
}

/* Links */

.search-links {
  width: 100%;
}

.search-links p {
  display: flex;
  align-items: center;

  column-gap: 10px;

  margin: 0;
  padding: 4px 0;

  font-size: 20px;
  font-weight: 500;

  cursor: pointer;

  border-bottom: 1px solid #eeeeee;

  transition:
    padding-left 0.2s ease,
    color 0.2s ease;
}

.search-links p:hover {
  padding-left: 10px;
}

.search-links svg {
  flex-shrink: 0;
}

/* Opening animation */

@keyframes searchOpen {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Prevent body scrolling while search is open */

:global(body.bodySearch) {
  overflow: hidden;
}

/* Header without bottom line */

:global(.main-header.no-line) {
  border-bottom: none !important;
}

/* Mobile */

@media (max-width: 768px) {
  .search-inner {
    padding: 80px 20px 30px;
  }

  .search-control {
    margin-bottom: 30px;
  }

  .search-links p {
    font-size: 18px;
    padding: 15px 0;
  }
}
</style>
