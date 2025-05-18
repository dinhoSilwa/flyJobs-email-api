import { IUserService } from "../@types/IUserService";
import { IUserServiceRepository } from "../interfaces/IUserServiceRepository";
import { createHtmlEmailTemplate } from "../emails/createHtmlEmailTemplate";
import { nodemailerTransporter } from "../emails/nodemailer/nodemailerTransporter";
import { NotFoundNodemailer } from "../erros/customsErrorsApi";

export class UseServiceRepository
  implements IUserServiceRepository<IUserService>
{
  async sendEmailService(serviceEmail: IUserService): Promise<any> {
    try {
      await nodemailerTransporter.sendMail(
        createHtmlEmailTemplate(serviceEmail)
      );
    } catch (err) {
      throw new NotFoundNodemailer("Falha No Serviço do Nodemailer");
    }
  }
}
