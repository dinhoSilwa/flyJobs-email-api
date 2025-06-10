export interface IUserServiceRepository<IUserService> {
  sendEmailService(serviceEmail: IUserService): Promise<void>;
  createService(service: IUserService): Promise<void>;
  getAllServices(): Promise<IUserService[] | []>;
}
