export interface IUserContactRepository<IUserContact> {
  sendContact(contact: IUserContact): Promise<void | Error>;
}
