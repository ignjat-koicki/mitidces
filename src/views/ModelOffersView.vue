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

    <div class="model-card" :style="{ backgroundImage: `url(${model4})` }">
      <div
        style="
          position: relative;
          top: 50px;
          left: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        "
      >
        <h2 style="margin-left: 5px">AirBunds</h2>
        <div class="learn-more-button">
          <span class="learn-more-title">Learn More</span>
        </div>
      </div>
    </div>

    <div class="model-card" :style="{ backgroundImage: `url(${model5})` }">
      <div class="form-button">
        <h2>IWatch</h2>
      </div>
      <div class="form-button">
        <div class="learn-more-button">
          <span class="learn-more-title">Learn more</span>
        </div>
        <div class="pre-order-button">
          <span class="pre-order-title">View pricing</span>
        </div>
      </div>
    </div>

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
.model-banner {
  width: 100vw;
  height: 80vh;

  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.learn-more-button {
  width: 120px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #0077ed;
  background-color: #0077ed;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}

.learn-more-title {
  color: white;
  font-size: 16px;
}

.form-button {
  top: 100px;
  left: 50px;
  column-gap: 10px;
  display: flex;
  position: relative;
  align-items: center;
}

.form-button-left {
  top: 100px;
  left: 600px;
  column-gap: 10px;
  display: flex;
  position: relative;
}

.pre-order-button {
  width: 120px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #0077ed;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
}

.pre-order-button:hover {
  background-color: #0077ed;
}
.pre-order-button:hover .pre-order-title {
  color: #fff;
}

.pre-order-title {
  color: #0077ed;
  font-size: 16px;
}

.model-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  margin-top: 20px;
}

.model-card {
  width: 48%;
  height: 40vh;

  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.model-footer {
  width: 100vw;
  height: 70vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  margin-top: 10px;
  box-shadow: 2px 4px 8px rgba(0, 0);
}
</style>
