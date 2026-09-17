<template>
  <section class="support-page">
    <div class="support-hero">
      <div class="support-hero-content">
        <span class="support-badge">Mitidces Support</span>

        <h1>How Can We Help You?</h1>

        <p>
          Welcome to the Mitidces Support Center. Find answers, explore helpful resources, and get
          assistance with TechBook1 laptops, eOffice, ePlayStudio, and ITech.
        </p>

        <div class="support-search">
          <input type="text" placeholder="Search for help..." />

          <button type="button">Search</button>
        </div>
      </div>
    </div>

    <div class="support-container">
      <div class="support-section-header">
        <h2>Explore Our Support Services</h2>

        <p>Select a product or service to find relevant information and assistance.</p>
      </div>

      <div class="support-grid">
        <article class="support-card">
          <div class="support-icon">TB</div>

          <h3>TechBook1 Laptop</h3>

          <p>
            Get help with TechBook1 laptops, device configuration, hardware features, and technical
            troubleshooting.
          </p>

          <a href="#">Learn More →</a>
        </article>

        <article class="support-card">
          <div class="support-icon">EO</div>

          <h3>eOffice</h3>

          <p>
            Find support for document management, everyday office activities, and platform
            functionality.
          </p>

          <a href="#">Learn More →</a>
        </article>

        <article class="support-card">
          <div class="support-icon">EP</div>

          <h3>ePlayStudio</h3>

          <p>
            Explore gaming support, account assistance, game-related issues, and platform
            information.
          </p>

          <a href="#">Learn More →</a>
        </article>

        <article class="support-card">
          <div class="support-icon">IT</div>

          <h3>ITech Operating System</h3>

          <p>
            Learn more about the ITech operating system, its development, system features, and
            technical support.
          </p>

          <a href="#">Learn More →</a>
        </article>
      </div>

      <section class="support-contact">
        <div>
          <span class="support-badge">Need Additional Help?</span>

          <h2>Contact Our Support Team</h2>

          <p>
            If you cannot find the information you need, our support team is available to help you
            with your questions and technical concerns.
          </p>
        </div>

        <a href="/contact" class="support-contact-button"> Contact Us </a>
      </section>

      <section class="support-faq">
        <div class="support-section-header">
          <h2>Frequently Asked Questions</h2>

          <p>Find quick answers to common questions about our products and services.</p>
        </div>
      </section>
    </div>
  </section>
  <FaqComponent :questions="questions"></FaqComponent>
</template>

<script lang="ts">
import type { Question } from '@/components/questions/models/question'
import FaqComponent from '@/components/questions/FaqComponent.vue'

export default {
  components: {
    FaqComponent: FaqComponent,
  },
  data() {
    return {
      questions: [
        {
          id: 1,
          question: 'What is TechBook1?',
          answer:
            'TechBook1 is a laptop series developed by Mitidces, designed to support everyday work, productivity, and gaming activities.',
          open: false,
        },
        {
          id: 1,
          question: 'What is eOffice used for?',
          answer:
            ' eOffice is a digital platform designed for everyday document-related activities and office productivity.',
          open: false,
        },
        {
          id: 1,
          question: 'Is ITech currently available?',
          answer:
            'ITech is an operating system currently under development. Additional information will be provided as development progresses.',
          open: false,
        },
      ] as Question[],
    }
  },
}
</script>

<style scoped>
.support-page {
  margin-top: 2px !important;
  min-height: 100vh;
  background: #f7f9fc;
  color: #1d2939;
  font-family: Arial, sans-serif;
}

.support-hero {
  padding: 90px 20px;
  background: linear-gradient(135deg, #045cc9, #123d7a);
  color: white;
  text-align: center;
}

.support-hero-content {
  max-width: 850px;
  margin: 0 auto;
}

.support-badge {
  display: inline-block;
  margin-bottom: 18px;
  padding: 7px 14px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  font-size: 13px;
  font-weight: 600;
}

.support-hero h1 {
  margin: 0 0 20px;
  font-size: 42px;
  font-weight: 700;
}

.support-hero p {
  max-width: 680px;
  margin: 0 auto 30px;
  line-height: 1.8;
  font-size: 16px;
  color: #e5efff;
}

.support-search {
  display: flex;
  max-width: 650px;
  margin: 0 auto;
  padding: 6px;
  gap: 8px;
  border-radius: 12px;
  background: white;
}

.support-search input {
  flex: 1;
  min-width: 0;
  padding: 14px;
  border: none;
  outline: none;
  font-size: 14px;
  color: #1d2939;
}

.support-search button {
  padding: 0 24px;
  border: none;
  border-radius: 8px;
  background: #045cc9;
  color: white;
  cursor: pointer;
  font-weight: 600;
}

.support-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 20px;
}

.support-section-header {
  margin-bottom: 35px;
  text-align: center;
}

.support-section-header h2 {
  margin: 0 0 14px;
  font-size: 28px;
  color: #172b4d;
}

.support-section-header p {
  margin: 0;
  color: #667085;
  line-height: 1.7;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.support-card {
  padding: 30px;
  border: 1px solid #e4eaf2;
  border-radius: 16px;
  background: white;
  box-shadow: 0 5px 20px rgba(16, 24, 40, 0.04);
  transition: 0.25s ease;
}

.support-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.09);
}

.support-icon {
  display: flex;
  width: 48px;
  height: 48px;
  margin-bottom: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #eaf2ff;
  color: #045cc9;
  font-size: 14px;
  font-weight: 700;
}

.support-card h3 {
  margin: 0 0 12px;
  font-size: 20px;
  color: #172b4d;
}

.support-card p {
  min-height: 75px;
  margin: 0 0 20px;
  color: #667085;
  line-height: 1.7;
  font-size: 14px;
}

.support-card a {
  color: #045cc9;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.support-contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin: 75px 0;
  padding: 45px;
  border-radius: 18px;
  background: #172b4d;
  color: white;
}

.support-contact .support-badge {
  background: rgba(255, 255, 255, 0.12);
}

.support-contact h2 {
  margin: 0 0 14px;
  font-size: 28px;
}

.support-contact p {
  max-width: 650px;
  margin: 0;
  line-height: 1.7;
  color: #d0d9e8;
}

.support-contact-button {
  flex-shrink: 0;
  padding: 14px 24px;
  border-radius: 8px;
  background: white;
  color: #172b4d;
  font-weight: 600;
  text-decoration: none;
}

.support-faq {
  max-width: 850px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 18px;
  padding: 25px;
  border: 1px solid #e4eaf2;
  border-radius: 12px;
  background: white;
}

.faq-item h3 {
  margin: 0 0 12px;
  font-size: 17px;
  color: #172b4d;
}

.faq-item p {
  margin: 0;
  line-height: 1.7;
  font-size: 14px;
  color: #667085;
}

@media (max-width: 700px) {
  .support-hero {
    padding: 60px 20px;
  }

  .support-hero h1 {
    font-size: 30px;
  }

  .support-search {
    flex-direction: column;
    padding: 8px;
  }

  .support-search button {
    padding: 13px;
  }

  .support-grid {
    grid-template-columns: 1fr;
  }

  .support-contact {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
  }

  .support-contact-button {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }

  .support-container {
    padding: 45px 20px;
  }
}
</style>
