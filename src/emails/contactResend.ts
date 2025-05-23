import { Resend } from "resend";
import { config } from "dotenv";
import { IUserContact } from "../@types/IUserContact";
import { htmlContactTemplate } from "./htmlContactTemplate";
config();

const { RESEND_API_KEY, FROM_EMAIL, EMAIL_COMPANY } = process.env;

export const createUserContactTransporter = async (contact: IUserContact) => {
  const resendEmail = new Resend(RESEND_API_KEY);
  const { name: username } = contact;

  const { data, error } = await resendEmail.emails.send({
    from: FROM_EMAIL,
    to: EMAIL_COMPANY,
    subject: `Contato solicitado por ${username}`,
    html: htmlContactTemplate(contact),
  });
  if (error) {
    console.error(error.message);
    throw new Error("Falha ao enviar email Resend");
  }

  return { data, error };
};
