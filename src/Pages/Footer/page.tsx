import React from "react";

const FooterPage = () => {
  return (
    <footer className="w-full py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex justify-between mb-12">
          <div className="space-y-4">
            <h3 className="font-medium text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-green-500">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg mb-6">Help & Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-green-500">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <h2 className="text-3xl font-medium">
                <span className="text-green-500">Plantory</span> Co.
              </h2>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-green-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C9.284 2 8.944 2.01 7.877 2.06c-1.066.05-1.79.217-2.427.465a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 002.525 5.45c-.248.636-.415 1.36-.465 2.427C2.01 8.944 2 9.284 2 12s.01 3.056.06 4.123c.05 1.066.217 1.79.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.248 1.36.415 2.427.465 1.067.05 1.407.06 4.123.06s3.056-.01 4.123-.06c1.066-.05 1.79-.217 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.248-.636.415-1.36.465-2.427.05-1.067.06-1.407.06-4.123s-.01-3.056-.06-4.123c-.05-1.066-.217-1.79-.465-2.427a4.902 4.902 0 00-1.153-1.772 4.902 4.902 0 00-1.772-1.153c-.636-.248-1.36-.415-2.427-.465C15.056 2.01 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.181.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 01-.748 1.15c-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.098 3.098 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.181-.466.399-.8.748-1.15.35-.35.684-.567 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12 15.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm0-8.469a5.136 5.136 0 100 10.272 5.136 5.136 0 000-10.272z"
                    clipRule="evenodd"
                  />
                  <circle cx="17.338" cy="6.662" r="1.2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-green-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.159 1.207 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-green-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-green-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg mb-6">Stay Connected</h3>
            <p className="mb-4">
              Stay inspired with care guides, seasonal tips, and exclusive
              offers.
            </p>

            <form className="space-y-2">
              <div className="border-b border-gray-300">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-2 bg-transparent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="md:hidden">
          <div className="mb-8 text-center">
            <h3 className="font-medium text-lg mb-4">Stay Connected</h3>
            <p className="mb-4">
              Stay inspired with care guides, seasonal tips, and exclusive
              offers.
            </p>

            <form className="space-y-2">
              <div className="border-b border-gray-300">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-2 bg-transparent focus:outline-none text-center"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="mb-8 text-center">
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-500">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8 text-center">
            <h3 className="font-medium text-lg mb-4">Help & Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-500">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium mb-6">
              <span className="text-green-500">Plantory</span> Co.
            </h2>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-green-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C9.284 2 8.944 2.01 7.877 2.06c-1.066.05-1.79.217-2.427.465a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 002.525 5.45c-.248.636-.415 1.36-.465 2.427C2.01 8.944 2 9.284 2 12s.01 3.056.06 4.123c.05 1.066.217 1.79.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.248 1.36.415 2.427.465 1.067.05 1.407.06 4.123.06s3.056-.01 4.123-.06c1.066-.05 1.79-.217 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.248-.636.415-1.36.465-2.427.05-1.067.06-1.407.06-4.123s-.01-3.056-.06-4.123c-.05-1.066-.217-1.79-.465-2.427a4.902 4.902 0 00-1.153-1.772 4.902 4.902 0 00-1.772-1.153c-.636-.248-1.36-.415-2.427-.465C15.056 2.01 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.181.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 01-.748 1.15c-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.098 3.098 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.181-.466.399-.8.748-1.15.35-.35.684-.567 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12 15.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm0-8.469a5.136 5.136 0 100 10.272 5.136 5.136 0 000-10.272z"
                    clipRule="evenodd"
                  />
                  <circle cx="17.338" cy="6.662" r="1.2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-green-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.159 1.207 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-green-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-green-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            © Plantory Co. 2025 – Development By{" "}
            <a
              href="https://furkanislek.vercel.app"
              target="_blank"
              className="text-green-500"
            >
              Furkan Akif ISLEK
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
