import ContactBanner from "@components/Contact/ContactBanner/ContactBanner";
import ContactForm from "@components/Contact/ContactForm/ContactForm";
import ContactRequest from "@components/Contact/ContactRequest/ContactRequest";
import type { FC } from "react";

const Contact: FC = () => {
  return (
    <>
      <ContactBanner />
      <ContactForm />
      <ContactRequest />
    </>
  );
};

export default Contact;
