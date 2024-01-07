
import Data from "../../Data/Data";

const Pricing = () => {
  const [Mega, Pro, Arsenal] = Data;

  return (
    <section id="pricing">
      <div className="Container">
        <div className="flex flex-col gap-y-6 text-center">
          <h2 className="heading heading-md ">
            Explore Our <span className="highlight">Digital Offerings</span> and
            Pricing
          </h2>
          <h2 className="highlight mt-8 text-xl font-bold">Our Offers</h2>

          <div className="grid w-full grid-cols-1  items-center gap-4 md:grid-cols-3">
            {/* <!-- Pricing Card 1 --> */}
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100  bg-gray-800 p-6 text-center text-white shadow xl:p-8 ">
              <h3 className="mb-4 text-2xl font-semibold">Mega</h3>
              <p className="font-light  text-gray-400 sm:text-lg">
                Elevate Your Venture with Shopify Mega Bundle
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold">₹295 </span>
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
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>{title}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="w-full rounded-lg bg-gradient-to-r from-indigo-800 via-blue-700  to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white "
              >
                Get started
              </a>
            </div>

            {/* Pricing Card 2 */}
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border-2 border-primary  bg-primary/20 
            bg-gradient-to-b from-secondary via-primary/40 to-accent
            p-6 text-center text-white shadow xl:p-8 ">
              <h3 className="mb-4 text-2xl font-semibold">Mega</h3>
              <p className="font-light  text-gray-400 sm:text-lg">
                Elevate Your Venture with Shopify Mega Bundle
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold">₹295 </span>
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
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>{title}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="w-full rounded-lg bg-gradient-to-r from-indigo-800 via-blue-700  to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white "
              >
                Get started
              </a>
            </div>
            {/* Pricing Card 3 */}
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100  bg-gray-800 p-6 text-center text-white shadow xl:p-8 ">
              <h3 className="mb-4 text-2xl font-semibold">Mega</h3>
              <p className="font-light  text-gray-400 sm:text-lg">
                Elevate Your Venture with Shopify Mega Bundle
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold">₹295 </span>
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
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>{title}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="w-full rounded-lg bg-gradient-to-r from-indigo-800 via-blue-700  to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white "
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
