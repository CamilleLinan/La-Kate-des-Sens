import type { FC } from "react";
import "./_ContactForm.scss";
import emailjs from "@emailjs/browser";
import { Form, Input } from "antd";
import { MailOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import ButtonBase from "@components/shared/ButtonBase/ButtonBase";

interface ContactFormValues {
  name: string;
  phone: number;
  email: string;
  message: string;
}

const emailJS_service = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
const emailJS_template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
const emailJS_public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

const ContactForm: FC = () => {
  const [form] = Form.useForm<ContactFormValues>();

  const onFinish = async (values: ContactFormValues) => {
    await emailjs.send(
      emailJS_service,
      emailJS_template,
      {
        name: values.name,
        phone: values.phone,
        email: values.email,
        message: values.message,
      },
      { publicKey: emailJS_public_key }
    );
    alert("Votre message a bien été envoyé. Merci !");
    form.resetFields();
  };

  return (
    <section className="contact-form">
      <TitleSection titleText="Formulaire de Contact" />
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          name="name"
          label="Nom & Prénom *"
          rules={[
            {
              required: true,
              message: "Veuillez entrer votre nom et prénom",
            },
          ]}
        >
          <Input addonBefore={<UserOutlined />} size="large" />
        </Form.Item>

        <div className="two-fieldset">
          <Form.Item
            name="phone"
            label="Téléphone *"
            rules={[
              { required: true, message: "Veuillez entrer votre numéro" },
              {
                pattern: /^0\d{9}$/,
                message: "Veuillez entrer un numéro de téléphone valide",
              },
            ]}
          >
            <Input addonBefore={<PhoneOutlined />} size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail *"
            rules={[
              {
                required: true,
                message: "Veuillez entrer votre e-mail",
              },
              { type: "email", message: "Adresse e-mail invalide" },
            ]}
          >
            <Input addonBefore={<MailOutlined />} size="large" />
          </Form.Item>
        </div>

        <Form.Item
          name="message"
          label="Message *"
          rules={[{ required: true, message: "Veuillez entrer votre message" }]}
        >
          <Input.TextArea
            rows={5}
            placeholder="Parlez-moi de vos besoins, envies, ou questions..."
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <ButtonBase
            children="Envoyer le message"
            className="btn-form"
            type="submit"
          />
        </Form.Item>
      </Form>
    </section>
  );
};

export default ContactForm;
