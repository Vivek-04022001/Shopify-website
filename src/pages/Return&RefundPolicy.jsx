import React from "react";
import { Link } from "react-router-dom";

const ReturnRefundPolicy = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="relative">
      <div className="absolute left-5 top-5 md:left-10 md:top-10 ">
        <Link to="/">
          <span className="border border-primary p-1 px-3">HOME</span>
        </Link>
      </div>

      <div className="Container-other ">
        <h1 className="other-heading">Return & Refund policy</h1>
        <div className="border-t px-6">
        

          <p>
            Thank you for choosing PixelVista for your digital needs. This
            policy outlines our terms and conditions regarding refunds for
            digital products. Your purchase with PixelVista signifies your
            agreement with these terms.
          </p>

          <ul>
            <li>
              <strong>Scope:</strong> This policy applies to all digital
              products obtained from PixelVista, including social media
              templates, graphics, presets, fonts, icons, and other digital
              goods.
            </li>

            <li>
              <strong>No Refunds:</strong> All sales of digital products from
              PixelVista are final and non-refundable. Once the digital product
              is purchased and downloaded, no refunds or exchanges can be
              provided.
            </li>

            <li>
              <strong>Product Descriptions:</strong> We make every effort to
              accurately describe our digital products, providing detailed
              information, specifications, and images. Please carefully review
              the product description before making a purchase. For any
              questions, contact our customer support before purchasing.
            </li>

            <li>
              <strong>Technical Support:</strong> PixelVista offers excellent
              customer support for technical issues related to our digital
              products. For assistance with technical difficulties, contact our
              customer support team for resolution.
            </li>

            <li>
              <strong>Intellectual Property:</strong> All intellectual property
              rights, including copyrights and trademarks, associated with our
              digital products are retained by PixelVista. Purchasing a digital
              product does not grant the right to resell, distribute, or modify
              the product for commercial purposes without written consent from
              PixelVista.
            </li>

            <li>
              <strong>Unauthorized Use:</strong> Any unauthorized use, sharing,
              or distribution of our digital products is strictly prohibited. It
              is your responsibility to protect the product from unauthorized
              access or use. In case of unauthorized use, PixelVista reserves
              the right to take legal action to protect its intellectual
              property.
            </li>

            <li>
              <strong>Exceptions:</strong> In exceptional cases, such as a
              proven defect rendering the digital product unusable, PixelVista
              may, at its discretion, consider issuing a refund or providing a
              replacement. Such cases will be handled on a case-by-case basis
              with a thorough investigation by our customer support team.
            </li>

            <li>
              <strong>Changes to the Policy:</strong> PixelVista reserves the
              right to modify or update this refund policy at any time without
              prior notice. The updated policy is effective immediately upon
              posting on our website. It is your responsibility to periodically
              review the policy for changes.
            </li>
          </ul>

          <p>
            By purchasing our digital products, you acknowledge that you have
            read, understood, and agreed to this No Refund Policy for Digital
            Products.
          </p>

          <p>
            For any questions or concerns, please contact our customer support
            team at{" "}
            <a href="mailto:support@pixelvista.in">support@pixelvista.in</a>
          </p>

          <p>Thank you for your understanding and cooperation.</p>

          <p>PixelVista</p>
        </div>
      </div>
    </div>
  );
};

export default ReturnRefundPolicy;
