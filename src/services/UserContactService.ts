import { IUserContact } from "../@types/IUserContact";
import { IUserContactRepository } from "../interfaces/IUserContactRepository";

export class UserContactService {
  private contactRepository: IUserContactRepository<IUserContact>;
  constructor(contactRepository: IUserContactRepository<IUserContact>) {
    this.contactRepository = contactRepository;
  }
  public async senContactEmail(contact: IUserContact): Promise<void> {
    await this.contactRepository.sendContact(contact);
  }
}
