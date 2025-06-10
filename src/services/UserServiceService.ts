import { IUserService } from "../@types/IUserService";
import { IUserServiceRepository } from "../interfaces/IUserServiceRepository";

export class UserService {
  private serviceRepository: IUserServiceRepository<IUserService>;
  constructor(serviceRepository: IUserServiceRepository<IUserService>) {
    this.serviceRepository = serviceRepository;
  }

  public async sendServiceEmail(service: IUserService): Promise<void> {
    await this.serviceRepository.sendEmailService(service);
    await this.serviceRepository.createService(service);
  }

  public async getAllServices(): Promise<IUserService | []> {
    return await this.serviceRepository.getAllServices();
  }
}
