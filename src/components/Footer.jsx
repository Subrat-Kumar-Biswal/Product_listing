import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 font-sans">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between gap-100">
        {/* Newsletter */}
        <div className="flex-1 min-w-[280px]">
          <h3 className="font-bold text-lg">BE THE FIRST TO KNOW</h3>
          <p className="mt-2 text-sm">Sign up for updates from metta muse.</p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="p-2 flex-1 outline-none text-black bg-white rounded-l"
            />
            <button className="border border-white text-white p-2 px-4 bg-transparent hover:bg-white hover:text-black transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[280px]">
          <h3 className="font-bold text-lg">CONTACT US</h3>
          <p className="mt-2 text-sm">+44 221 133 5360</p>
          <p className="text-sm">customercare@mettamuse.com</p>
          <h3 className="font-bold text-lg mt-6">CURRENCY</h3>
          <p className="mt-2 text-sm">🇺🇸 USD</p>
          <small className="text-xs block mt-1">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </small>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-700 my-8" />

      {/* Bottom Section */}
      <div className="flex flex-wrap justify-between gap-8">
        {/* Footer Links */}
        <div className="flex gap-16 flex-wrap">
          {/* Left Links */}
          <div>
            <h4 className="font-bold text-lg">mettā muse</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="cursor-pointer hover:underline">About Us</li>
              <li className="cursor-pointer hover:underline">Stories</li>
              <li className="cursor-pointer hover:underline">Artisans</li>
              <li className="cursor-pointer hover:underline">Boutiques</li>
              <li className="cursor-pointer hover:underline">Contact Us</li>
              <li className="cursor-pointer hover:underline">EU Compliances Docs</li>
            </ul>
          </div>

          {/* Right Links */}
          <div>
            <h4 className="font-bold text-lg">QUICK LINKS</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="cursor-pointer hover:underline">Orders & Shipping</li>
              <li className="cursor-pointer hover:underline">Join/Login as a Seller</li>
              <li className="cursor-pointer hover:underline">Payment & Pricing</li>
              <li className="cursor-pointer hover:underline">Return & Refunds</li>
              <li className="cursor-pointer hover:underline">FAQs</li>
              <li className="cursor-pointer hover:underline">Privacy Policy</li>
              <li className="cursor-pointer hover:underline">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Social & Payment */}
        <div className="flex flex-col gap-8">
          {/* Social Icons */}
          <div>
            <h4 className="font-bold text-lg">FOLLOW US</h4>
            <div className="flex gap-4 mt-2 text-2xl">
              <span>📷</span> {/* Instagram */}
              <span>💼</span> {/* LinkedIn */}
            </div>
          </div>

          {/* Payment Icons */}
          <div>
            <h4 className="font-bold text-lg">mettā muse ACCEPTS</h4>
            <div className="flex gap-4 flex-wrap mt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Pay_Logo.svg"
                alt="Google Pay"
                className="w-10 h-6 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                alt="MasterCard"
                className="w-10 h-6 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="w-10 h-6 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                alt="Amex"
                className="w-10 h-6 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Pay"
                className="w-10 h-6 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Paytm_logo.png"
                alt="Paytm"
                className="w-10 h-6 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
