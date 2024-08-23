import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col py-8 my-8 px-10 shadow rounded font-poppins">
      <div>
        <form>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 gird-cols-1 gap-3 mb-8">
            <div class="relative">
              <input
                id="id-b16"
                type="text"
                name="id-b16"
                placeholder="Your Name*"
                class="relative bg-gray-100 w-full h-10 px-4 pr-12 text-sm transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>
            <div class="relative">
              <input
                id="id-b16"
                type="email"
                name="id-b16"
                placeholder="Your Email*"
                class="relative bg-gray-100 w-full h-10 px-4 pr-12 text-sm transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>
            <div class="relative">
              <input
                id="id-b16"
                type="tel"
                name="id-b16"
                placeholder="Your Phone*"
                class="relative bg-gray-100 w-full h-10 px-4 pr-12 text-sm transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>
          </div>
          <div class="relative mb-8">
            <textarea
              id="id-01"
              type="text"
              name="id-01"
              placeholder="Your message"
              rows="8"
              class="relative w-full px-4 py-2 text-sm bg-gray-100 transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="flex px-8 py-2 rounded bg-sky-600 text-white">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
