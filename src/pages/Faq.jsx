import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <section className="relative">
    <aside className="absolute left-5 top-5 md:left-10 md:top-10">
      <Link to="/">
        <span className="border border-primary p-1 px-3">HOME</span>
      </Link>
    </aside>
    <article className="Container-other">
      <h1 className="other-heading">F.A.Q</h1>
      <div className="border-t px-6">
      <h2>Q1. When will I receive my product?</h2>
    <p>Upon purchase, you'll be directed to a "thank-you" page post-payment. Click the "Download now" button on the page to access the PDF with the drive link. If you encounter any issues or can't locate the thank-you page, please reach out to us at <a href="mailto:support@pixelvista.in">support@pixelvista.in</a>.</p>

    <h2>Q2. What if I don't receive my product after purchase?</h2>
    <p>Contact us at <a href="mailto:support@pixelvista.in">support@pixelvista.in</a> with your order details for prompt assistance. Ensure to check your spam or promotional mail folders. Provide accurate details during checkout for seamless delivery to your email.</p>

    <h2>Q3. Is payment safe and secure?</h2>
    <p>Yes, we utilize a trusted payment gateway with end-to-end encryption, ensuring the safety and security of your payment.</p>

    <h2>Q4. What forms of payment do you accept?</h2>
    <p>We accept UPI, Google Pay, Paytm, Credit Card, Debit Card, and Net Banking through a secure payment gateway.</p>

    <h2>Q5. 100% SATISFACTION or FULL MONEY BACK</h2>
    <p>We stand by our digital product's quality and functionality. If you face any issues post-purchase, such as quality problems or download difficulties, contact us for a 100% money-back guarantee. We value your satisfaction and aim to address any concerns promptly.</p>

      </div>
    </article>
  </section>
  );
};

export default Faq;
