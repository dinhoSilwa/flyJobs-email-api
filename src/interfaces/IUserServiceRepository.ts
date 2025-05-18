
export interface IUserServiceRepository<IUserService> {
  sendEmailService(serviceEmail: IUserService): Promise<void | Error>;
 // sendContact(contactHelp: IUserContact): Promise<void>;
}
