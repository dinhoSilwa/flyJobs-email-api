import { config } from "dotenv";
import { IUserService } from "../@types/IUserService";
import { htmlServiceTemplate } from "./htmlServiceTemplate";
const { FROM_EMAIL, EMAIL_USER } = process.env;
config();

export const createHtmlEmailTemplate = (
  serviceEmail: IUserService
): { from: string; to: string; subject: string; html: any } => {
  const { name: username } = serviceEmail;
  return {
    from: FROM_EMAIL!,
    to: EMAIL_USER!,
    subject: `Novo Serviço Solicitado Por ${username}`,
    html: htmlServiceTemplate(serviceEmail),
  };
};
