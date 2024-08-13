import React from "react";
import ContactDetails from "../organisms/ContactDetails";
import ContactForm from "../organisms/ContactForm";

const ContactScreen = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="col-span-1">
          <ContactDetails />
        </div>
        <div className="col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
