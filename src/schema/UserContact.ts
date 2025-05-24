import { z } from "zod";

export const userContactSchema = z.object({
  name: z
    .string({
      required_error: "Nome é obrigatório.",
    })
    .min(1, "Nome é obrigatório."),

  email: z
    .string({
      required_error: "E-mail é obrigatório.",
    })
    .min(1, "E-mail é obrigatório.")
    .email("Formato de e-mail inválido."),

  helpMessage: z
    .string({
      required_error: "A mensagem é obrigatória.",
    })
    .min(10, "Por favor, nos diga como podemos ajudar (mínimo 10 caracteres).")
    .max(500, "Mensagem muito longa. Máximo de 500 caracteres."),
});

export type formContactSchemaType = z.infer<typeof userContactSchema>;
