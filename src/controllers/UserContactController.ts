import { Request, Response, NextFunction } from "express";
import { UserContactService } from "../services/UserContactService";
import { ContactServiceRepository } from "../repositories/useContactRepository";
const contactRepository = new ContactServiceRepository();
const contact = new UserContactService(contactRepository);

export class UserContactController {
  static async startSendContactEmail(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    await contact.senContactEmail(req.body);
    res
      .status(200)
      .json({ status: "OK", msg: "Email de Contato Enviado com Sucesso" });
  }
}
