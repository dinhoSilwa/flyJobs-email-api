import { IUserContact } from "../@types/IUserContact";
import { createUserContactTransporter } from "../emails/contactResend";
import { EmailError } from "../erros/customsErrorsApi";
import { IUserContactRepository } from "../interfaces/IUserContactRepository";

export class ContactServiceRepository
  implements IUserContactRepository<IUserContact>
{
  async sendContact(contact: IUserContact): Promise<void> {
    try {
      await createUserContactTransporter(contact);
    } catch (error) {
      console.log(error);
      throw new EmailError("Falha no Serviço de Email");
    }
  }
}
