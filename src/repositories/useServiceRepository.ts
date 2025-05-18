import { IUserService } from "../@types/IUserService";
import { IUserServiceRepository } from "../interfaces/IUserServiceRepository";
import { createHtmlEmailTemplate } from "../emails/createHtmlEmailTemplate";
import { nodemailerTransporter } from "../emails/nodemailer/nodemailerTransporter";
export class UseServiceRepository
  implements IUserServiceRepository<IUserService>
{
  async sendEmailService(serviceEmail: IUserService): Promise<any> {
    await nodemailerTransporter.sendMail(createHtmlEmailTemplate(serviceEmail));
  }
}
