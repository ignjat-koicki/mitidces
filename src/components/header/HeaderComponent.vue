<template>
  <header class="header">
    <div class="main-header">
      <div class="search-mobile" :class="{ 'search-active': isActive }">
        <FontAwesomeIcon color="black" :size="'lg'" :icon="faSearch" />
      </div>
      <img src="@/assets/logo.png" alt="Logo" class="logo" @click="toHome()" />
      <div class="menu">
        <FontAwesomeIcon
          color="black"
          :size="'sm'"
          :icon="faMinus"
          style="top: 8px; position: relative"
        />
        <FontAwesomeIcon color="black" :size="'sm'" :icon="faMinus" />
        <FontAwesomeIcon
          color="black"
          :size="'sm'"
          :icon="faMinus"
          style="bottom: 8px; position: relative"
        />
      </div>
      <div class="header-wrapper">
        <div v-for="item in header" :key="item.name" class="route-link-items">
          <router-link v-if="!item.children" :to="{ name: item.routeName }" class="route-link">
            <div class="route-link-item">
              <span>{{ item.name }}</span>
              <span class="text-line"></span>
            </div>
            <span v-if="item.children"
              ><FontAwesomeIcon :size="'xs'" :icon="faChevronRight"
            /></span>
          </router-link>
          <div v-if="item.children" class="route-link">
            <div class="route-link-item">
              <span>{{ item.name }}</span>
              <span class="text-line"></span>
            </div>
            <span v-if="item.children"
              ><FontAwesomeIcon :size="'xs'" :icon="faChevronRight"
            /></span>
          </div>
          <div v-if="item.children?.length" class="dropdown">
            <div class="dropdown-items">
              <router-link
                v-for="child in item.children"
                :key="child.name"
                :to="{ name: child.routeName }"
                class="sub-route-link"
              >
                <FontAwesomeIcon :size="'xs'" :icon="faArrowRightLong" />
                &nbsp;&nbsp;&nbsp;&nbsp;{{ child.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="search" :class="{ 'search-active': isActive }">
        <FontAwesomeIcon
          color="black"
          :size="'lg'"
          @click="isActive = !isActive"
          :icon="faSearch"
        />
      </div>
    </div>
  </header>
  <SearchComponent :active="isActive" />
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowRightLong,
  faChevronRight,
  faMinus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import SearchComponent from '../search/SearchComponent.vue'
import router from '@/router/index.ts'

export default {
  components: {
    FontAwesomeIcon: FontAwesomeIcon,
    SearchComponent: SearchComponent,
  },
  name: 'HeaderView',
  data() {
    return {
      window: window,
      faChevronRight: faChevronRight,
      faSearch: faSearch,
      faMinus: faMinus,
      faArrowRightLong: faArrowRightLong,
      isActive: false,
      header: [
        {
          name: 'Devices',
          routeName: 'Products',
          children: [
            {
              name: 'Phones',
              routeName: 'MobilePhones',
            },
            {
              name: 'Laptops',
              routeName: 'Laptops',
            },
            {
              name: 'TVs',
              routeName: 'TVs',
            },
          ],
        },
        {
          name: 'ePlayStudio',
          routeName: 'Entertainment',
        },
        {
          name: 'eOffice',
          routeName: 'eOffice',
        },
        {
          name: 'News',
          routeName: 'News',
        },
        {
          name: 'Accessories',
          routeName: 'Accessories',
        },

        {
          name: 'Support',
          routeName: 'CustomerSupport',
        },
      ],
    }
  },
  methods: {
    onActiveEvent(event: boolean) {
      this.isActive = event
    },
    toHome() {
      router.push('/')
    },
  },
}
</script>

<style scoped>
.header {
  padding: 0.5rem;
  height: 50px;
  max-width: 1200px;
  position: relative;
  z-index: 999999999;
  margin: 0 auto;
  top: -7px;
}

.top-header {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 30px;
  margin-left: 0 auto;
  margin-right: 0 auto;
  background-color: white;
}

.search-active {
  border: 2px dashed #0077ed;
}

.main-header {
  display: flex;
  align-items: center;
  background-color: white;
  flex-wrap: wrap;
  border-bottom: 1px solid #e0e0e0;
}

.route-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
  height: 50px;
}

.sub-route-link {
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
  font-weight: 200;
  height: 50px;
}

.route-link-items {
  position: relative;
  margin-left: 1rem;
}

.route-link:hover span {
}
.header-wrapper {
  display: flex;
}

.header-search {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: auto;
}

.logo {
  height: 50px;
  width: auto;
  margin-left: 1rem;
}

@media (max-width: 600px) {
  .main-header {
    padding: 0.5rem;
  }

  .search {
    display: none !important;
  }

  .logo {
    height: 42px;
    margin-left: 0.25rem;
    margin: 0 auto;
  }

  .route-link {
    margin-left: 0;
    padding: 0.5rem;
    font-size: 0.9rem;
  }

  .route-link-items {
    display: none;
  }

  .logo {
    display: flex;
    justify-content: center;
  }

  .search-mobile {
    display: block !important;
    padding: 5px;
  }
}

.top-header-item {
  margin-left: 5ox;
  margin-right: 5px;
  padding: 0.1rem;
  margin-top: 1rem;
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  z-index: 1;
  min-width: 160px;
}

.route-link-items:hover .dropdown {
  display: block !important;
}

.route-link-items:hover .text-line {
  width: 100%;
}

.route-link-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 200 !important;
}

.menu {
  display: none;
  flex-direction: column;
}

.dropdown-items {
  margin-top: 2px;
  border: 1px solid #e0e0e0;
  background-color: white;
  width: 200px;
}

.menu-item:hover .dropdown {
  display: block;
}

@media (max-width: 600px) {
  .menu-item {
    margin-left: 0;
  }

  .menu {
    display: flex;
  }
}

.route-link span {
  display: flex;
}

@keyframes slideIn {
  from {
    width: 0px;
  }
  to {
    width: 100% !important;
  }
}

.text-line {
  display: block;
  width: 0;
  height: 2px;
  background-color: #0077ed;
  transition: width 0.3s ease;
}

.search {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 1rem;
  padding: 0.5rem;
}

.search:hover {
  cursor: pointer;
}

.search-mobile {
  display: none;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
}
</style>
