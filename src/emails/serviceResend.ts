import { Resend } from "resend";
import { IUserService } from "../@types/IUserService";
import { htmlServiceTemplate } from "./htmlServiceTemplate";
import { config } from "dotenv";
config();

const { RESEND_API_KEY, FROM_EMAIL, EMAIL_COMPANY } = process.env;

export const createUserServiceTransporter = async (services: IUserService) => {
  const resendEmail = new Resend(RESEND_API_KEY);
  const { name: username } = services;

  const { data, error } = await resendEmail.emails.send({
    from: FROM_EMAIL,
    to: EMAIL_COMPANY,
    subject: `Novo Serviço solicitado por ${username}`,
    html: htmlServiceTemplate(services),
  });
  if (error) {
    console.error(error.message);
    throw new Error("Falha ao enviar email Resend");
  }

  return { data, error };
};
