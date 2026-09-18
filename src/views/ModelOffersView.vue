```vue
<template>
  <div class="model-banner" :style="{ backgroundImage: `url(${model1})` }">
    <div class="form-button">
      <div class="learn-more-button">
        <span class="learn-more-title">Learn more</span>
      </div>

      <div class="pre-order-button">
        <span class="pre-order-title">Our collection</span>
      </div>
    </div>
  </div>

  <div class="model-grid">
    <!-- TechBook -->
    <div class="model-card" :style="{ backgroundImage: `url(${model2})` }">
      <div class="form-button">
        <div class="learn-more-button">
          <span class="learn-more-title">Learn more</span>
        </div>

        <div class="pre-order-button">
          <span class="pre-order-title">Pre Order</span>
        </div>
      </div>
    </div>

    <!-- AirBunds -->
    <div class="model-card" :style="{ backgroundImage: `url(${model4})` }">
      <div class="airbunds-content">
        <h2>AirBunds</h2>

        <div class="learn-more-button">
          <span class="learn-more-title">Learn More</span>
        </div>
      </div>
    </div>

    <!-- IWatch -->
    <div class="model-card" :style="{ backgroundImage: `url(${model5})` }">
      <div class="form-button">
        <h2>IWatch</h2>
      </div>

      <div class="form-button">
        <div class="learn-more-button">
          <span class="learn-more-title">Learn more</span>
        </div>
      </div>
    </div>

    <!-- Tech 1 -->
    <div class="model-card" :style="{ backgroundImage: `url(${model6})` }">
      <div class="form-button-left">
        <h2>Tech 1</h2>
      </div>

      <div class="form-button-left">
        <div class="learn-more-button">
          <span class="learn-more-title">Learn more</span>
        </div>

        <div class="pre-order-button">
          <span class="pre-order-title">Pre Order</span>
        </div>
      </div>
    </div>
  </div>

  <!-- STech -->
  <div class="model-footer" :style="{ backgroundImage: `url(${model7})` }">
    <div class="form-button">
      <h1>STech</h1>
    </div>

    <div class="form-button">
      <div class="learn-more-button">
        <span class="learn-more-title">Learn more</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import model1 from './../assets/eamodels/1.png'
import model2 from './../assets/eamodels/2.png'
import model4 from './../assets/eamodels/4.png'
import model5 from './../assets/eamodels/5.png'
import model6 from './../assets/eamodels/6.png'
import model7 from './../assets/eamodels/7.png'
</script>

<style scoped>
/* =========================================
   GENERAL
========================================= */

* {
  box-sizing: border-box;
}

.model-banner,
.model-card,
.model-footer {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* =========================================
   MAIN BANNER
========================================= */

.model-banner {
  width: 100%;
  height: 80vh;
  min-height: 500px;

  position: relative;

  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);
}

/* =========================================
   BUTTONS
========================================= */

.learn-more-button {
  width: 120px;
  height: 40px;

  border-radius: 20px;
  border: 1px solid #0077ed;

  background-color: #0077ed;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all 0.3s ease;
}

.learn-more-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 119, 237, 0.3);
}

.learn-more-title {
  color: white;
  font-size: 16px;
}

.pre-order-button {
  width: 120px;
  height: 40px;

  border-radius: 20px;
  border: 1px solid #0077ed;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  cursor: pointer;
}

.pre-order-button:hover {
  background-color: #0077ed;
  transform: translateY(-2px);
}

.pre-order-button:hover .pre-order-title {
  color: white;
}

.pre-order-title {
  color: #0077ed;
  font-size: 16px;
}

/* =========================================
   BUTTON CONTAINERS
========================================= */

.form-button {
  position: relative;

  top: 100px;
  left: 50px;

  display: flex;
  align-items: center;

  column-gap: 10px;
}

.form-button-left {
  position: relative;

  top: 100px;
  left: 530px;

  display: flex;
  align-items: center;

  column-gap: 10px;
}

/* =========================================
   PRODUCT GRID
========================================= */

.model-grid {
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  gap: 20px;

  margin-top: 20px;
}

/* =========================================
   PRODUCT CARD
========================================= */

.model-card {
  width: calc(50% - 10px);
  height: 40vh;
  min-height: 350px;

  position: relative;

  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
}

/* =========================================
   AIRBUNDS
========================================= */

.airbunds-content {
  position: relative;

  top: 50px;
  left: 50px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: 10px;
}

.airbunds-content h2 {
  margin: 0 0 5px 5px;
}

/* =========================================
   FOOTER PRODUCT
========================================= */

.model-footer {
  width: 100%;
  height: 70vh;
  min-height: 450px;

  margin-top: 20px;

  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 768px) {
  .model-banner {
    height: 65vh;
    min-height: 450px;
  }

  .model-grid {
    gap: 15px;
  }

  .model-card {
    width: calc(50% - 7.5px);
    height: 35vh;
    min-height: 300px;
  }

  .form-button {
    top: 60px;
    left: 30px;
  }

  .form-button-left {
    top: 60px;
    left: 30px;
  }

  .airbunds-content {
    top: 40px;
    left: 30px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {
  .model-banner {
    width: 100%;
    height: 65vh;
    min-height: 420px;

    background-position: center;
  }

  /* Product cards become one column */
  .model-grid {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 15px;

    margin-top: 15px;
  }

  .model-card {
    width: 100%;
    height: 55vh;
    min-height: 380px;

    background-position: center;
  }

  /* Reset desktop positioning */

  .form-button,
  .form-button-left {
    position: relative;

    top: auto;
    left: auto;

    padding: 25px;

    display: flex;
    flex-wrap: wrap;

    align-items: center;

    gap: 10px;
  }

  .form-button-left {
    left: 80px;
  }
  /* AirBunds */

  .airbunds-content {
    position: relative;

    top: auto;
    left: auto;

    padding: 25px;

    display: flex;
    flex-direction: column;

    align-items: flex-start;

    gap: 10px;
  }

  /* Buttons */

  .learn-more-button,
  .pre-order-button {
    width: 110px;
    height: 38px;
  }

  .learn-more-title,
  .pre-order-title {
    font-size: 14px;
  }

  /* Headings */

  .form-button h1 {
    font-size: 28px;
    margin: 0;
  }

  .form-button h2,
  .airbunds-content h2 {
    font-size: 24px;
  }

  /* Footer */

  .model-footer {
    width: 100%;

    height: 60vh;
    min-height: 400px;

    margin-top: 15px;

    background-position: center;
  }
}

/* =========================================
   SMALL PHONES
========================================= */

@media (max-width: 400px) {
  .model-banner {
    height: 55vh;
    min-height: 350px;
  }

  .model-card {
    height: 50vh;
    min-height: 330px;
  }

  .model-footer {
    height: 50vh;
    min-height: 330px;
  }

  .form-button,
  .form-button-left {
    padding: 20px;

    gap: 8px;
  }

  .airbunds-content {
    padding: 20px;
  }

  .learn-more-button,
  .pre-order-button {
    width: 100px;
    height: 36px;
  }

  .learn-more-title,
  .pre-order-title {
    font-size: 13px;
  }

  .form-button h1 {
    font-size: 24px;
  }

  .form-button h2,
  .airbunds-content h2 {
    font-size: 21px;
  }
}
</style>
```
