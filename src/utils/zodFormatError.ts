import { z, ZodIssue } from "zod";
export const zodFormatError = (issue: ZodIssue[]): any[] => {
  const errorFormatter: [] = [];
  issue.forEach((erros) => {
    const errorFields = erros.path.join(".");
    errorFormatter[errorFields] = erros.message;
  });
  return errorFormatter;
};
