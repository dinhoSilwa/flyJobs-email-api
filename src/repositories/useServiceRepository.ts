import { IUserService } from "../@types/IUserService";
import { IUserServiceRepository } from "../interfaces/IUserServiceRepository";
import { NotFoundNodemailer } from "../erros/customsErrorsApi";
import { createResendTransporter } from "../emails/resend";

export class UseServiceRepository
  implements IUserServiceRepository<IUserService>
{
  async sendEmailService(serviceEmail: IUserService): Promise<any> {
    try {
      await createResendTransporter(serviceEmail);
    } catch (err) {
      throw new NotFoundNodemailer("Falha No Serviço do Nodemailer");
    }
  }
}
