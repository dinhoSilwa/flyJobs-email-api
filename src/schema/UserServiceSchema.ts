import { z } from "zod";

export const UserServiceSchema = z.object({
  id: z.string({ required_error: "ID é obrigatório." }),
  name: z.string({ required_error: "Nome é obrigatório." }),
  email: z.string({ required_error: "E-mail é obrigatório." }),
  phone: z.string({ required_error: "Telefone é obrigatório." }),
  mode: z.string({ required_error: "Modo de atendimento é obrigatório." }),
  selectedServiceType: z.string({
    required_error: "Tipo de serviço é obrigatório.",
  }),
  isExpressService: z.boolean({
    required_error: "Não foi possível identificar se é um serviço expresso.",
  }),
  termsAccepted: z.boolean({
    required_error: "É necessário aceitar os termos para continuar.",
  }),
});

export type UserServiceSchemaType = z.infer<typeof UserServiceSchema>;
