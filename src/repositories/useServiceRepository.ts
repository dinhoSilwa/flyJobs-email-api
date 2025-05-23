import { IUserService } from "../@types/IUserService";
import { IUserServiceRepository } from "../interfaces/IUserServiceRepository";
import { EmailError } from "../erros/customsErrorsApi";
import { createUserServiceTransporter } from "../emails/serviceResend";

export class UseServiceRepository
  implements IUserServiceRepository<IUserService>
{
  async sendEmailService(serviceEmail: IUserService): Promise<any> {
    try {
      await createUserServiceTransporter(serviceEmail);
    } catch (err) {
      throw new EmailError("Falha No Serviço do Resend");
    }
  }
}
