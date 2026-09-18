```vue
<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<template>
  <div class="search-content" v-if="active">
    <div class="search-inner">
      <div class="search-control">
        <SearchControlComponent :active="active" />
      </div>
      <div v-if="isChildrenRoute" class="back-button" @click="lastPage($event)">
        <div><FontAwesomeIcon :icon="faChevronLeft" :size="'xs'"></FontAwesomeIcon>Back</div>
      </div>
      <div class="search-links">
        <div
          v-for="currentElement in currentSearchElements"
          @click="onCurrentSearch(currentElement)"
          v-bind:key="currentElement.route"
          class="current-element"
        >
          <FontAwesomeIcon :size="'xs'" :icon="faChevronRight" />
          <span>{{ currentElement.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'
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
    lastPage(event) {
      this.isChildrenRoute = false
      this.currentSearchElements = this.searchElements
    },
    onCurrentSearch(currentElement) {
      if (currentElement.isParent) {
        this.currentSearchElements = currentElement.subItems
        this.isChildrenRoute = true
      } else {
        this.$router.push({ name: currentElement.route })
      }
    },
  },

  data() {
    return {
      faSearch,
      faChevronRight,
      faChevronLeft,
      isChildrenRoute: false,
      searchElements: [
        {
          name: 'Products',
          route: 'ModelOffers',
          isParent: true,
          subItems: [
            {
              name: 'Laptops',
              route: 'Laptops',
              isParent: false,
            },
            {
              name: 'Mobile Phones',
              route: 'MobilePhones',
              isParent: false,
            },
            {
              name: 'TVs',
              route: 'TVs',
              isParent: false,
            },
            {
              name: 'Watches',
              route: 'Watches',
              isParent: false,
            },
            {
              name: 'AirBunds',
              isParent: false,
              route: 'Bunds',
            },
          ],
        },
        {
          name: 'About',
          route: 'CustomerSupport',
          isParent: true,
          subItems: [
            {
              name: 'Customer Support',
              route: 'CustomerSupport',
              isParent: false,
            },
            {
              name: 'Language',
              route: 'Language',
              isParent: false,
            },
            {
              name: 'Legal Questions',
              isParent: false,
              route: 'LegalQuestions',
            },
            {
              name: 'Terms of Usage',
              isParent: false,
              route: 'TermsOfUses',
            },
          ],
        },
        {
          name: 'Services',
          route: 'eOffice',
          isParent: true,
          subItems: [
            {
              name: 'Customer Support',
              isParent: false,
              route: 'CustomerSupport',
            },
            {
              name: 'Language',
              isParent: false,
              route: 'Language',
            },
            {
              name: 'Legal Questions',
              isParent: false,
              route: 'LegalQuestions',
            },
            {
              name: 'Terms of Usage',
              isParent: false,
              route: 'TermsOfUses',
            },
          ],
        },
      ],
      currentSearchElements: [
        {
          name: 'Products',
          route: 'ModelOffers',
          isParent: true,
          subItems: [
            {
              name: 'Laptops',
              route: 'Laptops',
              isParent: false,
            },
            {
              name: 'Mobile Phones',
              route: 'MobilePhones',
              isParent: false,
            },
            {
              name: 'TVs',
              route: 'TVs',
              isParent: false,
            },
            {
              name: 'Watches',
              route: 'Watches',
              isParent: false,
            },
            {
              name: 'AirBunds',
              route: 'Bunds',
              isParent: false,
            },
          ],
        },
        {
          name: 'About',
          route: 'CustomerSupport',
          isParent: true,
          subItems: [
            {
              name: 'Customer Support',
              route: 'CustomerSupport',
              isParent: false,
            },
            {
              name: 'Language',
              route: 'Language',
              isParent: false,
            },
            {
              name: 'Legal Questions',
              route: 'LegalQuestions',
              isParent: false,
            },
            {
              name: 'Terms of Usage',
              route: 'TermsOfUses',
              isParent: false,
            },
          ],
        },
        {
          name: 'Services',
          route: 'eOffice',
          isParent: true,
          subItems: [
            {
              name: 'Customer Support',
              route: 'CustomerSupport',
            },
            {
              name: 'Language',
              route: 'Language',
            },
            {
              name: 'Legal Questions',
              route: 'LegalQuestions',
            },
            {
              name: 'Terms of Usage',
              route: 'TermsOfUses',
            },
          ],
        },
      ],
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
  height: 42vh;

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

.current-element {
  cursor: pointer;
}

/* Links */

.search-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 10px;
}

.search-links a {
  text-decoration: none;
  color: black;
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

.back-button {
  cursor: pointer;
  padding: 5px 5px 5px 0px;
  box-sizing: border-box;
  width: 60px;
  border: 2px dashed transparent;
}

.back-button:hover {
  border: 2px dashed #0077ed;
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
