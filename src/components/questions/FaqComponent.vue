<template>
  <div class="legal-question-wrapper">
    <div class="legal-question" v-for="item in faqQuestions" v-bind:key="item.id">
      <div class="legal-question-header" @click="openQuestion(item)">
        <h2>{{ item.question }}</h2>

        <span
          class="chevron"
          :class="{
            chevronOpen: item.open,
            chevronClose: !item.open,
          }"
        ></span>
      </div>

      <div class="legal-question-content" :class="{ opened: item.open }">
        <div class="legal-question-content-inner">
          <p style="margin-left: 20px; border-radius: 50px">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Question } from './models/question'

export default {
  name: 'FAQComponent',
  props: {
    questions: {
      // oxlint-disable-next-line typescript/no-wrapper-object-types
      type: Array<Question>,
      default: () => [],
    },
  },
  data() {
    return {
      faqQuestions: this.questions,
    }
  },
  methods: {
    openQuestion(question: Question) {
      question.open = !question.open
    },
  },
}
</script>
