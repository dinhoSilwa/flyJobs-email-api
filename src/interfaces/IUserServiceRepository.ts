export interface IUserServiceRepository<IUserService> {
  sendEmailService(serviceEmail: IUserService): Promise<void | Error>;
}
