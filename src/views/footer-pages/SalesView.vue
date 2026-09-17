```vue
<template>
  <section class="sales-refunds">
    <div class="sales-header">
      <h1>Sales and Refunds</h1>

      <p class="sales-intro">
        This page explains the terms and conditions that apply to purchases, payments,
        cancellations, refunds, and digital products available through our services.
      </p>

      <p class="sales-updated">Last updated: September 17, 2026</p>
    </div>

    <div class="sales-content">
      <section class="sales-section">
        <h2>Purchases</h2>

        <p>
          Certain games, digital products, features, or services may be available for purchase
          through our platform.
        </p>

        <p>
          Before completing a purchase, you will be provided with the applicable price and relevant
          information about the product or service.
        </p>
      </section>

      <section class="sales-section">
        <h2>Prices</h2>

        <p>
          Prices displayed on our platform may vary depending on the product, service, region,
          currency, taxes, promotions, or other applicable conditions.
        </p>

        <p>
          The applicable price presented at the time of purchase will apply to the transaction
          unless otherwise required by applicable law.
        </p>
      </section>

      <section class="sales-section">
        <h2>Payments</h2>

        <p>
          Payments may be processed through third-party payment providers. Depending on the payment
          method, additional terms may apply.
        </p>

        <p>
          By completing a purchase, you confirm that the payment information provided is accurate
          and that you are authorized to use the selected payment method.
        </p>
      </section>

      <section class="sales-section">
        <h2>Digital Products</h2>

        <p>
          Some products and services may be delivered digitally. Digital products may become
          available immediately after a successful payment or within the period specified during the
          purchase process.
        </p>

        <p>
          Due to the nature of digital products, cancellation and refund rights may be subject to
          specific legal requirements and conditions.
        </p>
      </section>

      <section class="sales-section">
        <h2>Order Confirmation</h2>

        <p>
          After completing a purchase, you may receive an order confirmation or other notification
          containing information about your transaction.
        </p>

        <p>
          A payment authorization does not necessarily guarantee that a product will be available if
          technical, legal, or other circumstances prevent fulfillment of the order.
        </p>
      </section>

      <section class="sales-section">
        <h2>Cancellations</h2>

        <p>
          Where cancellation is available, you may request cancellation in accordance with the
          applicable service terms and legal requirements.
        </p>

        <p>
          Some digital purchases may not be cancellable after the digital content has been supplied
          or access has begun, where permitted by applicable law.
        </p>
      </section>

      <section class="sales-section">
        <h2>Refunds</h2>

        <p>
          Refunds may be available where required by applicable law or where provided under our
          applicable refund policy.
        </p>

        <p>
          Refund requests may be reviewed individually based on the nature of the purchase, the
          reason for the request, the status of the product or service, and applicable legal
          requirements.
        </p>
      </section>

      <section class="sales-section">
        <h2>Refund Request</h2>

        <p>
          To request a refund, please contact us through the contact information provided on our
          website and include sufficient information to identify the relevant transaction.
        </p>

        <p>
          We may request additional information when necessary to verify the purchase and process
          the request.
        </p>
      </section>

      <section class="sales-section">
        <h2>Refund Processing</h2>

        <p>
          Approved refunds will generally be processed through the original payment method where
          possible.
        </p>

        <p>
          The time required for the refund to appear in your account may depend on the payment
          provider or financial institution used for the original transaction.
        </p>
      </section>

      <section class="sales-section">
        <h2>Incorrect or Unauthorized Purchases</h2>

        <p>
          If you believe that a purchase was made incorrectly or without your authorization, please
          contact us as soon as possible.
        </p>

        <p>
          We may investigate the transaction and take appropriate action in accordance with
          applicable law and our internal procedures.
        </p>
      </section>

      <section class="sales-section">
        <h2>Failed Payments</h2>

        <p>
          If a payment cannot be successfully processed, the purchase may not be completed and
          access to the purchased product or service may not be provided.
        </p>

        <p>You may need to use another valid payment method to complete the transaction.</p>
      </section>

      <section class="sales-section">
        <h2>Promotions and Discounts</h2>

        <p>
          Promotional offers, discounts, or special prices may be available for limited periods and
          may be subject to additional conditions.
        </p>

        <p>
          Unless otherwise stated, promotions cannot be combined with other offers or applied
          retroactively to previous purchases.
        </p>
      </section>

      <section class="sales-section">
        <h2>Taxes</h2>

        <p>
          Applicable taxes may be included in or added to the displayed price, depending on the
          applicable jurisdiction and requirements.
        </p>
      </section>

      <section class="sales-section">
        <h2>Changes to Products and Prices</h2>

        <p>
          We may change product availability, features, prices, or other commercial conditions from
          time to time.
        </p>

        <p>
          Changes will not normally affect completed purchases unless otherwise required by
          applicable law.
        </p>
      </section>

      <section class="sales-section">
        <h2>Contact Us</h2>

        <p>
          If you have questions about a purchase, payment, cancellation, or refund, please contact
          us using the contact information provided on our website.
        </p>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'SalesAndRefunds',
}
</script>

<style scoped>
.sales-refunds {
  max-width: 1200px;

  margin: 60px auto;
  padding: 40px;

  font-family: Arial, sans-serif;

  color: #222;
  background-color: #ffffff;
}
.sales-section p {
  font-size: 16px !important;
  font-weight: 400 !important;
  color: black !important;
}
.sales-section h2 {
  font-size: 24px !important;
  font-weight: 600 !important;
}
.sales-section ul li {
  font-size: 16px !important;
  font-weight: 400 !important;
  color: #0077ed;
}
/* Header */

.sales-header {
  margin-bottom: 50px;

  text-align: center;
}

.sales-header h1 {
  margin: 0 0 15px;

  font-size: 36px;
  font-weight: 700;

  color: #1f2937;
}

.sales-intro {
  max-width: 700px;

  margin: 0 auto 15px;

  font-size: 16px;
  line-height: 1.7;

  color: #6b7280;
}

.sales-updated {
  margin: 0;

  font-size: 14px;

  color: #9ca3af;
}

/* Content */

.sales-content {
  width: 100%;
}

.sales-section {
  max-width: 900px;

  margin: 0 auto 40px;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.sales-section h2 {
  font-size: 22px;
  font-weight: 600;

  color: #1f2937;
}

.sales-section p {
  margin: 0 0 15px;

  font-size: 15px;
  line-height: 1.8;

  color: #4b5563;
}

.sales-section p:last-child {
  margin-bottom: 0;
}

/* Mobile */

@media (max-width: 768px) {
  .sales-refunds {
    margin: 30px auto;

    padding: 25px 15px;
  }

  .sales-header h1 {
    font-size: 30px;
  }

  .sales-section {
    margin-bottom: 30px;
  }

  .sales-section h2 {
    font-size: 20px;
  }

  .sales-section p {
    font-size: 14px;
  }
}
</style>
