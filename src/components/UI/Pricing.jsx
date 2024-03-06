import { useState } from "react";
import Data from "../../Data/Data";
import Modal from "../Modal/Modal";

const Pricing = () => {
  const [Mega, Pro, Arsenal] = Data;
  const [productInfo, setProductInfo] = useState("");
  const [paymentLink, setPaymentLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const handleClick = (info) => {
    setIsOpen(true);
    setProductInfo(info);
   
    setPaymentLink(() => {
      return `https://pages.razorpay.com/${info.Offer.toLowerCase()}z`;
    });

  };

  return (
    <section id="pricing">
      <div className="Container">
        <div className="flex flex-col gap-y-6 text-center">
          <h2 className="heading heading-md ">
            Explore Our <span className="highlight">Digital Offerings</span> and
            Pricing
          </h2>
          <h2 className="highlight mt-8 text-xl font-bold">Our Offers</h2>

          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4  md:items-center ">
            {/* <!-- Pricing Card 1 --> */}
            <div className="pricing-card-container ">
              <h3 className="mb-4 text-2xl font-semibold">{Mega.Offer}</h3>
              <p className="font-light  text-gray-400 sm:text-lg">
                {Mega.subHeading}
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold">
                  {Mega.price}
                </span>
                <span className="text-gray-400">/lifetime</span>
              </div>
              {/* <!-- Product List --> */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                {Mega.products.map(({ title }) => (
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{title}</span>
                  </li>
                ))}
                <hr />
                {Mega.bonus.map(({ title }) => (
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{title}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleClick(Mega)}
                className="w-full rounded-lg bg-gradient-to-r from-indigo-800 via-blue-700  to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white "
              >
                Get started
              </button>
            </div>

            {/* Pricing Card 2 */}
            <div className="pricing-card-container-best ">
              <h3 className="mb-4 text-2xl font-semibold">{Pro.Offer}</h3>
              <p className="font-light  text-gray-400 sm:text-lg">
                {Pro.subHeading}
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold">
                  {Pro.price}
                </span>
                <span className="text-gray-400">/lifetime</span>
              </div>
              {/* <!-- Product List --> */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                {Pro.products.map(({ title }) => (
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{title}</span>
                  </li>
                ))}
                <hr />
                {Pro.bonus.map(({ title }) => (
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{title}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleClick(Pro)}
                className="w-full rounded-lg bg-gradient-to-r from-indigo-800 via-blue-700  to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white "
              >
                Get started
              </button>
            </div>

            {/* Pricing Card 3 */}
            <div className="pricing-card-container">
              <h3 className="mb-4 text-2xl font-semibold">{Arsenal.Offer}</h3>
              <p className="font-light  text-gray-400 sm:text-lg">
                {Arsenal.subHeading}
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold">
                  {Arsenal.price}{" "}
                </span>
                <span className="text-gray-400">/lifetime</span>
              </div>
              {/* <!-- Product List --> */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                {Arsenal.products.map(({ title }) => (
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{title}</span>
                  </li>
                ))}
                <hr />
                {Arsenal.bonus.map(({ title }) => (
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{title}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleClick(Arsenal)}
                className="w-full rounded-lg bg-gradient-to-r from-indigo-800 via-blue-700  to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <Modal isOpen={isOpen} onClose={onClose} productInfo={productInfo} paymentLink={paymentLink}/>
    </section>
  );
};

export default Pricing;
