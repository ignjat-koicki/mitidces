```vue
<template>
  <section class="privacy-policy">
    <div class="privacy-policy-header">
      <h1>Privacy Policy</h1>

      <p class="privacy-policy-intro">
        This Privacy Policy explains how we collect, use, protect, and manage personal information
        when you use our website and services.
      </p>

      <p class="privacy-policy-updated">Last updated: September 17, 2026</p>
    </div>

    <div class="privacy-policy-content">
      <section class="privacy-section">
        <h2>Introduction</h2>

        <p>
          We respect your privacy and are committed to protecting your personal information. This
          Privacy Policy explains how information may be collected, used, stored, and protected when
          you access or use our website and services.
        </p>

        <p>
          By using our website and services, you acknowledge that you have read and understood this
          Privacy Policy.
        </p>
      </section>

      <section class="privacy-section">
        <h2>Information We Collect</h2>

        <p>
          We may collect information that you provide directly to us when you use our services,
          create an account, contact us, or otherwise interact with our website.
        </p>

        <ul>
          <li>Name and contact information</li>
          <li>Email address</li>
          <li>Account information</li>
          <li>Information provided through support requests</li>
          <li>Technical and usage information</li>
        </ul>
      </section>

      <section class="privacy-section">
        <h2>Automatically Collected Information</h2>

        <p>
          When you access our website, certain technical information may be collected automatically.
          This information may include your IP address, browser type, device information, operating
          system, pages visited, and general usage information.
        </p>

        <p>
          This information may be used to maintain website functionality, improve our services,
          detect technical problems, and help protect the security of our systems.
        </p>
      </section>

      <section class="privacy-section">
        <h2>How We Use Your Information</h2>

        <p>We may use collected information for purposes including:</p>

        <ul>
          <li>Providing and maintaining our services</li>
          <li>Managing user accounts</li>
          <li>Responding to requests and providing customer support</li>
          <li>Improving our website and services</li>
          <li>Maintaining security and preventing misuse</li>
          <li>Complying with applicable legal obligations</li>
        </ul>
      </section>

      <section class="privacy-section">
        <h2>Legal Basis for Processing</h2>

        <p>
          Where applicable, we process personal information based on one or more lawful grounds,
          including your consent, the performance of a contract, compliance with legal obligations,
          or our legitimate interests.
        </p>

        <p>The applicable legal basis depends on the nature and purpose of the processing.</p>
      </section>

      <section class="privacy-section">
        <h2>Cookies</h2>

        <p>
          Our website may use cookies and similar technologies to provide essential functionality,
          remember preferences, improve user experience, and understand how visitors interact with
          our services.
        </p>

        <p>
          You can manage or disable cookies through your browser settings. Some website features may
          not function correctly if certain cookies are disabled.
        </p>
      </section>

      <section class="privacy-section">
        <h2>Data Sharing</h2>

        <p>
          We do not share personal information with third parties except where necessary to provide
          our services, comply with legal obligations, protect our rights, or with your consent
          where required.
        </p>

        <p>
          Service providers that process information on our behalf may only process such information
          in accordance with applicable agreements and instructions.
        </p>
      </section>

      <section class="privacy-section">
        <h2>Data Security</h2>

        <p>
          We take reasonable technical and organizational measures designed to protect personal
          information against unauthorized access, loss, misuse, alteration, disclosure, or
          destruction.
        </p>

        <p>
          However, no method of electronic transmission or storage can be guaranteed to be
          completely secure.
        </p>
      </section>

      <section class="privacy-section">
        <h2>Data Retention</h2>

        <p>
          We retain personal information only for as long as necessary to fulfill the purposes for
          which it was collected, provide our services, resolve disputes, maintain business records,
          or comply with applicable legal obligations.
        </p>
      </section>

      <section class="privacy-section">
        <h2>Your Privacy Rights</h2>

        <p>
          Depending on applicable law, you may have rights regarding your personal information,
          including the right to:
        </p>

        <ul>
          <li>Request access to your personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of certain information</li>
          <li>Request restriction of certain processing</li>
          <li>Object to certain processing activities</li>
          <li>Request portability of applicable information</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>

        <p>These rights may be subject to applicable legal limitations and requirements.</p>
      </section>

      <section class="privacy-section">
        <h2>Children's Privacy</h2>

        <p>
          Our services are not intended for individuals who are not legally permitted to use them
          under applicable law. We do not knowingly collect personal information from children in
          circumstances where parental or guardian consent is legally required.
        </p>
      </section>

      <section class="privacy-section">
        <h2>Third-Party Services</h2>

        <p>
          Our website may contain links to or integrate with third-party services. These services
          may have their own privacy policies and practices. We recommend reviewing the privacy
          policies of third-party services before providing them with personal information.
        </p>
      </section>

      <section class="privacy-section">
        <h2>Changes to This Privacy Policy</h2>

        <p>
          We may update this Privacy Policy from time to time to reflect changes to our services,
          practices, or legal requirements.
        </p>

        <p>
          When changes are made, the updated version will be published on this page together with
          the applicable update date.
        </p>
      </section>

      <section class="privacy-section">
        <h2>Contact Us</h2>

        <p>
          If you have questions about this Privacy Policy, your personal information, or our privacy
          practices, please contact us through the contact information provided on our website.
        </p>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'PrivacyPolicy',
}
</script>

<style scoped>
.privacy-policy {
  max-width: 900px;
  margin: 60px auto;
  padding: 40px;

  font-family: Arial, sans-serif;
  color: #222;
  background-color: #ffffff;
}

.privacy-policy-header {
  text-align: center;
  margin-bottom: 50px;
}

.privacy-policy-header h1 {
  margin: 0 0 15px;

  font-size: 36px;
  font-weight: 700;

  color: #1f2937;
}

.privacy-policy-intro {
  max-width: 700px;
  margin: 0 auto 15px;

  font-size: 16px;
  line-height: 1.7;

  color: #6b7280;
}

.privacy-policy-updated {
  margin: 0;

  font-size: 14px;

  color: #9ca3af;
}

.privacy-policy-content {
  width: 100%;
}

.privacy-section {
  margin-bottom: 40px;
}

.privacy-section p {
  font-size: 16px !important;
  font-weight: 400 !important;
  color: black !important;
}
.privacy-section h2 {
  font-size: 24px !important;
  font-weight: 600 !important;
}
.privacy-section ul li {
  font-size: 16px !important;
  font-weight: 400 !important;
  color: #0077ed;
}

.privacy-section h2 {
  margin: 0 0 15px;

  font-size: 22px;
  font-weight: 600;

  color: #1f2937;
}

.privacy-section p {
  margin: 0 0 15px;

  font-size: 15px;
  line-height: 1.8;

  color: #4b5563;
}

.privacy-section p:last-child {
  margin-bottom: 0;
}

.privacy-section ul {
  margin: 10px 0 15px;
  padding-left: 25px;

  color: #4b5563;
}

.privacy-section li {
  margin-bottom: 8px;

  font-size: 15px;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .privacy-policy {
    margin: 30px auto;
    padding: 25px 15px;
  }

  .privacy-policy-header h1 {
    font-size: 30px;
  }

  .privacy-section {
    margin-bottom: 30px;
  }

  .privacy-section h2 {
    font-size: 20px;
  }

  .privacy-section p,
  .privacy-section li {
    font-size: 14px;
  }
}
</style>
```
