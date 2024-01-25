import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Faq = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
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
  <ul>
    <li>Once your payment is complete, you will be redirected automatically to the download section of the page. Click the download button to start downloading on your device.</li>
    <li>Apart from that, you will also receive the product download link in the email provided during checkout. It might take 5 to 10 minutes to receive that email.</li>
    <li>If you haven’t received the product through email, we recommend checking the spam folder or promotional tab in your email. All the files are uploaded to the drive, and you can download them whenever you want.</li>
  </ul>

  <h2>Q2. What if I don't receive my product after purchase?</h2>
  <ul>
    <li>Contact us at <a href="mailto:support@pixelvista.in">support@pixelvista.in</a> with your order details for prompt assistance.</li>
    <li>Ensure to check your spam or promotional mail folders.</li>
    <li>Provide accurate details during checkout for seamless delivery to your email.</li>
  </ul>

  <h2>Q3. What if I lose my product?</h2>
  <ul>
    <li>I recommend downloading the product post-purchase. For any issues after purchase, feel free to email us.</li>
  </ul>

  <h2>Q4. How long can I access the material?</h2>
  <ul>
    <li>You'll enjoy perpetual access to the bundle. Just drop us an email at <a href="mailto:support@pixelvista.in">support@pixelvista.in</a> along with your order details, and we'll send you a fresh one.</li>
  </ul>

  <h2>Q5. Is it a monthly subscription or a one-time purchase?</h2>
  <ul>
    <li>It's a one-time payment. I understand the cost might make you think twice, but indeed, just one payment. Pretty straightforward, isn't it?</li>
  </ul>

  <h2>Q6. Is payment safe and secure?</h2>
  <ul>
    <li>Yes, we utilize a trusted payment gateway with end-to-end encryption, ensuring the safety and security of your payment.</li>
  </ul>

  <h2>Q7. What forms of payment do you accept?</h2>
  <ul>
    <li>We accept UPI, Google Pay, Paytm, Credit Card, Debit Card, and Net Banking through a secure payment gateway.</li>
  </ul>

  <h2>Q8. 100% SATISFACTION or FULL MONEY BACK</h2>
  <ul>
    <li>We stand by our digital product's quality and functionality. If you face any issues post-purchase, such as quality problems or download difficulties, contact us for a 100% money-back guarantee. We value your satisfaction and aim to address any concerns promptly.</li>
  </ul>
        </div>
      </article>
    </section>
  );
};

export default Faq;
