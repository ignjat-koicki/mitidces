<template>
  <div id="search" class="regular-search-container" :class="{ hidden: false }">
    <div class="regular-search-wrapper">
      <FontAwesomeIcon :icon="faSearch" :size="'sm'" class="regular-search-icon" />
      <input
        ref="searchInput"
        type="text"
        v-model="query"
        @keyup="startSearchInput($event)"
        @keydown="endSearchInput($event)"
        placeholder="Search"
        class="regular-search-input"
      />
      <div
        class="regular-close-icon"
        :class="{ 'close-hidden': query == '' }"
        @click="closeQuery($event)"
      >
        <FontAwesomeIcon :icon="faClose" :size="'xs'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

export default {
  name: 'SearchControl',
  components: {
    FontAwesomeIcon: FontAwesomeIcon,
  },
  props: {
    mobile: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.loaded = true
  },
  created() {
    setTimeout(() => {
      this.loaded = true
    }, 200)
  },
  data() {
    return {
      query: '',
      loaded: false,
      isActive: this.active,
      faSearch: faSearch,
      faClose: faClose,
      searchInput: ref('searchInput'),
    }
  },
  watch: {
    active: {
      immediate: true,
      handler(newVal) {
        this.isActive = newVal
      },
    },
  },
  methods: {
    startSearchInput(event: Event) {
      const target = event.target as HTMLInputElement
      this.query = target.value
      this.isActive = true
      this.$emit('searchinput', this.query)
      this.$emit('onActiveEvent', this.isActive)
    },
    endSearchInput(event: Event) {
      const target = event.target as HTMLInputElement
      this.query = target.value
      this.$emit('searchinput', this.query)
      this.isActive = true
      this.$emit('onActiveEvent', this.isActive)
    },
    closeQuery(event: PointerEvent) {
      console.log(event)
      document.querySelector<HTMLInputElement>('.regular-search-input')!.value = ''
      this.query = ''
      this.$emit('closeQuery', this.query)
      this.isActive = false
      this.$emit('onActiveEvent', this.isActive)
    },
  },
}
</script>

<style scoped>
/* Regular Search Styles */
.regular-search-container {
  display: flex;
  align-items: center;
  background: white;
  border-top-left-radius: 20px;
  animation: fadeIn 0.2s ease forwards;
  margin-top: -3px;
  border-bottom: 2px solid #606060;
}

.close-hidden {
  opacity: 0 !important;
}

@keyframes fadeIn {
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
}

.regular-search {
  animation: fadeIn 0.2s ease forwards;
}

@media (max-width: 768px) {
  .regular-search-icon {
    font-size: 12px;
  }

  .regular-close-icon svg {
    font-size: 12px;
  }
  .regular-search-wrapper {
    height: 32px !important;
    padding: 3px 10px !important;
  }

  .regular-search-container {
    height: 32px !important;
  }
}

.regular-search-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  transition: all 0.2s ease;
  min-width: 120px;
  cursor: pointer;
}

.regular-search-wrapper input {
  font-weight: 200;
}

.regular-search-wrapper:focus-within {
  background-color: white;
}

.regular-search-icon {
  color: #4b4b4b;
  flex-shrink: 0;
}

.regular-close-icon {
  color: #4b4b4b;
  border-radius: 50%;
  opacity: 1;
  background-color: rgb(240, 240, 240);
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -2px !important;
  transition:
    opacity 0.1s ease,
    transform 0.3s ease;
}

.regular-close-icon svg {
  font-size: 12px !important;
}

.regular-close-icon:hover {
  background-color: rgba(216, 216, 216, 1);
  transform: rotate(90deg);
}

.regular-search-input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #141616;
  flex: 1;
  min-width: 0;
}

.regular-search-input::placeholder {
  color: #141616;
  font-size: 12px;
  font-weight: 500 !important;
}

.regular-search-clear {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #666;
  border-radius: 50%;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.regular-search-clear:hover {
  background-color: #e0e0e0;
  color: #232b2b;
}

#search {
  display: flex !important;
  margin-left: 0 auto;
  float: right;
  justify-self: end !important;
}
</style>
