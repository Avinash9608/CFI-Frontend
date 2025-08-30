import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Subscribed with email:", email);
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0">
            <a className="flex items-center" href="#">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                Panchayat
              </span>
            </a>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Your one-stop portal for all village-related information and
              services.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Quick Links
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  News
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Members
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact Us
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 flex items-start">
                <span className="material-symbols-outlined mr-2 text-base">
                  location_on
                </span>
                <span>123 Village Main St, Panchayatville, 12345</span>
              </li>
              <li className="mb-4 flex items-center">
                <span className="material-symbols-outlined mr-2 text-base">
                  call
                </span>
                <a className="hover:underline" href="tel:+1234567890">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined mr-2 text-base">
                  email
                </span>
                <a className="hover:underline" href="mailto:info@panchayat.gov">
                  info@panchayat.gov
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Newsletter
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">
              Stay updated with our latest news and announcements.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex items-center">
                <input
                  className="w-full px-3 py-2 text-gray-700 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500"
                  placeholder="Your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  className="px-4 py-2 text-white bg-blue-600 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a className="hover:underline" href="#">
              Village Panchayat™
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Facebook */}
            <a
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            {/* Twitter */}
            <a
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>

            {/* Instagram */}
            <a
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.148 2 12.315 2zm-1.161 1.043c-1.022.043-1.637.21-2.193.42a3.42 3.42 0 00-1.224 1.224c-.210.556-.377 1.171-.42 2.193-.043 1.022-.056 1.361-.056 3.649s.013 2.628.056 3.649c.043 1.022.21 1.637.42 2.193a3.42 3.42 0 001.224 1.224c.556.21 1.171.377 2.193.42 1.022.043 1.361.056 3.649.056s2.628-.013 3.649-.056c1.022-.043 1.637-.21 2.193-.42a3.42 3.42 0 001.224-1.224c.21-.556.377-1.171.42-2.193.043-1.022.056-1.361.056-3.649s-.013-2.628-.056-3.649c-.043-1.022-.21-1.637-.42-2.193a3.42 3.42 0 00-1.224-1.224c-.556-.21-1.171-.377-2.193-.42-1.022-.043-1.361-.056-3.649-.056s-2.628.013-3.649.056zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Instagram account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
