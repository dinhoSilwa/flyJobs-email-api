import { IUserService } from "../@types/IUserService";
import { IUserServiceRepository } from "../interfaces/IUserServiceRepository";
import { EmailError } from "../erros/customsErrorsApi";
import { createUserServiceTransporter } from "../emails/serviceResend";
import { prisma } from "../db/prisma";

export class UseServiceRepository
  implements IUserServiceRepository<IUserService>
{
  async createService(service: IUserService): Promise<void> {
    try {
      await prisma.service.create({
        data: {
          ...service,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      console.error("Falha ao salvar dados", error);
    }
  }
  async getAllServices(): Promise<IUserService[] | []> {
    return await prisma.service.findMany();
  }
  async sendEmailService(serviceEmail: IUserService): Promise<any> {
    try {
      await createUserServiceTransporter(serviceEmail);
    } catch (err) {
      throw new EmailError("Falha No Serviço do Resend");
    }
  }
}
