import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="relative">
       <div className="absolute left-5 top-5 md:left-10 md:top-10 ">
        <Link to="/">
          <span className="border border-primary p-1 px-3">HOME</span>
        </Link>
      </div>
      <div className="Container-other ">
        <h1 className="other-heading">Contact Us</h1>
        <div className="border-t px-6">
          Contact Us We appreciate your interest in connecting with us. If you
          have any questions, feedback, or business inquiries, we are here to
          assist you. Feel free to reach out to us using the following contact
          information:
          <br />
          Email: <span className="highlight">support@pixelvista.in</span>
          <br />
          Address: Mangolpuri, Delhi, North West Delhi, Delhi 110083
        </div>
      </div>
    </div>
  );
};

export default Contact;
