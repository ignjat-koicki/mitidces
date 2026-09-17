```vue
<template>
  <section class="legal-questions">
    <h1>Legal Questions</h1>

    <p>
      Find answers to some of the most common questions regarding our services, user rights,
      privacy, terms of use, and legal responsibilities.
    </p>
  </section>
  <FaqComponent :questions="legalQuestions"></FaqComponent>
</template>

<script lang="ts">
import FaqComponent from '@/components/questions/FaqComponent.vue'
import type { Question } from '@/components/questions/models/question'

export default {
  components: {
    FaqComponent: FaqComponent,
  },
  name: 'LegalQuestions',

  data() {
    return {
      opened: false,
      legalQuestions: [
        {
          id: 1,
          question: 'What are the Terms of Use?',
          answer:
            'The Terms of Use define the rules and conditions under which users may access and use our website and services.',
          open: false,
        },
        {
          id: 2,
          question: 'What Privacy Policy applies to my personal data?',
          answer:
            'Our Privacy Policy explains what personal data we collect, why we collect it, how we use it, and how we protect it.',
          open: false,
        },
        {
          id: 3,
          question: 'What personal information do you collect?',
          answer:
            'We may collect information provided directly by users, such as their name, email address, account information, and other information necessary to provide our services.',
          open: false,
        },
        {
          id: 4,
          question: 'How is my personal data protected?',
          answer:
            'We use appropriate technical and organizational measures designed to protect personal data against unauthorized access, alteration, disclosure, or destruction.',
          open: false,
        },
        {
          id: 5,
          question: 'How can I request deletion of my personal data?',
          answer:
            'Users may contact us to request deletion of their personal data, subject to applicable legal requirements and legitimate reasons for retaining certain information.',
          open: false,
        },
        {
          id: 6,
          question: 'How long do you keep my personal data?',
          answer:
            'Personal data is retained only for as long as necessary for the purposes for which it was collected or as required by applicable law.',
          open: false,
        },
        {
          id: 7,
          question: 'Do you use cookies?',
          answer:
            'Our website may use cookies and similar technologies to provide essential functionality, improve user experience, and understand how our services are used.',
          open: false,
        },
        {
          id: 8,
          question: 'Can I withdraw my consent?',
          answer:
            'Where processing is based on consent, users may withdraw their consent at any time. Withdrawal does not affect the lawfulness of processing carried out before the withdrawal.',
        },
        {
          id: 9,
          question: 'What are my rights regarding my personal data?',
          answer:
            'Depending on applicable law, users may have rights relating to access, correction, deletion, restriction of processing, data portability, and objection to certain processing activities.',
          open: false,
        },
        {
          id: 10,
          question: 'Can the Terms of Use be changed?',
          answer:
            'We may update the Terms of Use from time to time. Changes will become effective when published on the website unless a different effective date is specified.',
          open: false,
        },
        {
          id: 11,
          question: 'What happens if I violate the Terms of Use?',
          answer:
            'Violation of the Terms of Use may result in restriction or termination of access to certain services, where permitted by applicable law.',
          open: false,
        },
        {
          id: 12,
          question: 'Can I terminate my account?',
          answer:
            'Users may request termination of their account in accordance with the applicable account and service procedures.',
          open: false,
        },
        {
          id: 13,
          question: 'Who can I contact regarding legal or privacy matters?',
          answer:
            'Users can contact our designated support or privacy contact regarding questions, requests, or concerns related to our services and data processing.',
          open: false,
        },
        {
          id: 14,
          question: 'What happens if I have a complaint?',
          answer:
            'Users may contact us directly with complaints or concerns. We will review the matter and respond in accordance with our applicable procedures and legal obligations.',
          open: false,
        },
        {
          id: 15,
          question: 'Which law applies to the use of the website?',
          answer:
            'The applicable law and jurisdiction are determined by the Terms of Use and any other applicable agreements, subject to mandatory legal rights and requirements.',
          open: false,
        },
      ] as Question[],
    }
  },

  methods: {
    openQuestion(
      question:
        | { id: number; question: string; answer: string; open: boolean }
        | { id: number; question: string; answer: string; open?: undefined },
    ) {
      question.open = !question.open
    },
  },
}
</script>

<style>
.legal-questions {
  max-width: 900px;

  margin: 0px auto;
  padding: 40px;

  font-family: Arial, sans-serif;

  color: #222;
  background-color: #ffffff;
}

.legal-questions h1 {
  font-size: 36px;
  font-weight: 700;

  text-align: center;

  color: #1f2937;
}

.legal-questions > p {
  max-width: 700px;

  margin: 0 auto 40px;

  text-align: center;

  line-height: 1.7;

  color: #6b7280;

  font-size: 16px;
}

.legal-question {
  border-radius: 10px;

  background-color: #f9fafb;

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.legal-question:hover {
  border-color: #b8c0ca;

  background-color: #f3f4f6;
}

.legal-question-header {
  display: flex;

  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 20px;

  border-bottom: 1px solid #202020;

  perspective: 600px;
}

.legal-question-header h2 {
  margin: 0;

  font-size: 19px;

  font-weight: 600;

  color: #1f2937;
}

.chevron {
  width: 10px;
  height: 10px;

  flex-shrink: 0;

  margin-left: 20px;
  margin-right: 5px;

  border-right: 2px solid #606060;
  border-bottom: 2px solid #606060;

  transform: rotate(0deg);

  transform-style: preserve-3d;

  backface-visibility: visible;
}

/* OPEN */

@keyframes chevronOpen {
  0% {
    transform: rotateY(0deg) rotate(0deg);
  }

  50% {
    transform: rotateY(90deg) rotate(112.5deg);
  }

  100% {
    transform: rotateY(180deg) rotate(225deg);
  }
}

/* CLOSE */

@keyframes chevronClose {
  0% {
    transform: rotateY(180deg) rotate(225deg);
  }

  50% {
    transform: rotateY(90deg) rotate(112.5deg);
  }

  100% {
    transform: rotateY(0deg) rotate(0deg);
  }
}

.chevronOpen {
  animation: chevronOpen 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.chevronClose {
  animation: chevronClose 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.legal-question-content {
  display: grid;

  grid-template-rows: 0fr;

  overflow: hidden;

  background-color: white !important;
  transition: grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.legal-question-content.opened {
  grid-template-rows: 1fr;
}

.legal-question-content-inner {
  min-height: 0;

  overflow: hidden;

  margin-top: 0px !important;
  transition: padding-top 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.legal-question-content.opened .legal-question-content-inner {
  padding-top: 15px;
}

.legal-question p {
  margin: 0;

  line-height: 1.7;

  font-size: 15px;

  color: #4b5563;
}

.legal-question p + p {
  margin-top: 12px;
}

.legal-question-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

@media screen and (max-width: 600px) {
  .legal-question {
    width: 100vw;
  }

  .legal-question-wrapper {
    padding: 0px;
  }
}
</style>
