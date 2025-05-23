import { IUserContact } from "./IUserContact";
import { IUserService } from "./IUserService";

declare global {
  namespace Express {
    interface Request {
      validate: IUserService & IUserContact;
    }
  }
}
