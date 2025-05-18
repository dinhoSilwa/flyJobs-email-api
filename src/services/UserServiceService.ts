import { IUserService } from "../@types/IUserService";
import { IUserServiceRepository } from "../interfaces/IUserServiceRepository";

export class UserService {
  private serviceRepository: IUserServiceRepository<IUserService>;
  constructor(serviceRepository: IUserServiceRepository<IUserService>) {
    this.serviceRepository = serviceRepository;
  }

  public async sendServiceEmail(service: IUserService): Promise<void> {
    try {
      await this.serviceRepository.sendEmailService(service);
    } catch (err) {
      console.error("Falha ao enviar Email");
      throw new Error("Falha ao Usar O Nodemailer");
    }
  }
}
