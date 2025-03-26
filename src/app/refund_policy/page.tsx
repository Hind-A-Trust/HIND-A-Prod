import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Refund Policy</h1>
      <h2 className="text-2xl font-semibold mb-4 text-center">Hind A Public Charitable Trust</h2>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <p className="mb-4">
            Thank you for your generous support of Hind A Public Charitable Trust. This Refund Policy outlines our 
            guidelines regarding refunds for donations made to our organization.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">1. No-Refund Policy</h3>
          <p className="mb-4">
            All donations made to Hind A Public Charitable Trust are non-refundable. Once a donation has been processed, 
            no refunds will be provided. Your contribution is immediately directed toward our charitable initiatives 
            for the welfare of Bihar.
          </p>
          <p>
            By making a donation to our organization, you acknowledge and agree to this no-refund policy.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">2. Donation Errors</h3>
          <p className="mb-4">
            In the event that you have made a donation in error (such as an incorrect amount or accidental duplicate payment), 
            please contact us immediately at the information provided below. While we maintain a strict no-refund policy, 
            we may consider these situations on a case-by-case basis.
          </p>
          <p>
            Please note that any review of exceptional cases is at the sole discretion of Hind A Public Charitable Trust 
            and does not guarantee a refund.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">3. Unauthorized Transactions</h3>
          <p>
            If you believe an unauthorized donation has been made using your payment information, please contact 
            your bank or payment provider immediately to dispute the charge, and notify us of the situation.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">4. Tax Benefits</h3>
          <p>
            Donations to Hind A Public Charitable Trust may be eligible for tax benefits under applicable Indian laws. 
            Please note that if a donation were to be refunded in an exceptional case, any tax receipt issued would 
            be invalidated, and the donation could not be claimed for tax benefits.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">5. Canceled Recurring Donations</h3>
          <p>
            If you have set up a recurring donation and wish to cancel future payments, you may do so at any time by 
            contacting us. Cancellation will apply only to future scheduled donations; previously processed donations 
            remain non-refundable.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">6. Policy Changes</h3>
          <p>
            Hind A Public Charitable Trust reserves the right to modify this Refund Policy at any time. Any changes 
            will be effective immediately upon posting on our website. You are encouraged to review this policy 
            periodically to stay informed of our refund practices.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">7. Contact Information</h3>
          <p>
            If you have any questions about this Refund Policy or need to discuss a donation issue, please contact us at:
          </p>
          <address className="not-italic">
            <strong>Hind A Public Charitable Trust</strong><br />
            Gate No 97, Nawab Kothi/Bans Kothi<br />
            Digha Ghat, Patna, India<br />
            Phone: +91 9315943090<br />
            Email: contact@hind-a.in
          </address>
        </section>

        <section className="mb-8">
          <p className="text-center">
            Last Updated: March 26, 2025
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;