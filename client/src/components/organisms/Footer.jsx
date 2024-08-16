import React from "react";
import Newsletter from "./Newsletter";
import FooterBottom from "../molecules/FooterBottom";
import SocialShareButtons from "../molecules/SocialShareButtons";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white font-poppins">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">QuickCart</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      Subscribe
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      Get 10% off your first order
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      <Newsletter />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Support</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      Nallur road, Jaffna...
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      quickcart@gmail.com
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      +88015-88888-9999
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Account</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      My Account
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      Login / Register
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      Cart
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      Shop
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Quick Link</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      Terms Of Use
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Download App</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      Save $3 with App New User Only
                    </a>
                  </li>

                  {/* <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      Terms Of Use
                    </a>
                  </li> */}

                  <li>
                    <a
                      className="text-gray-100 font-light tracking-wider transition hover:text-gray-100/75"
                      href="#"
                    >
                      <SocialShareButtons />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <FooterBottom />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
