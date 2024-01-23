import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
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
      <h1 className="other-heading">Contact Us</h1>
      <div className="border-t px-6">
        <p>Contact Us</p>
        <p>We appreciate your interest in connecting with us. If you have any questions, feedback, or business inquiries, we are here to assist you. Feel free to reach out to us using the following contact information:</p>
        <p>Email: <span className="highlight">support@pixelvista.in</span></p>
        <p>Address: Mangolpuri, Delhi, North West Delhi, Delhi 110083</p>
      </div>
    </article>
  </section>
  );
};

export default Contact;
