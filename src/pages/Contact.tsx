import ContactBanner from "@components/Contact/ContactBanner/ContactBanner";
import ContactForm from "@components/Contact/ContactForm/ContactForm";
import ContactRequest from "@components/Contact/ContactRequest/ContactRequest";
import type { FC } from "react";

const Contact: FC = () => {
  return (
    <section className="contact">
      <ContactBanner />
      <ContactForm />
      <ContactRequest />
    </section>
  );
};

export default Contact;
