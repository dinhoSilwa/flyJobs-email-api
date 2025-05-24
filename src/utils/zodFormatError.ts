import { ZodIssue } from "zod";
export const zodFormatError = (issue: ZodIssue[]): any => {
  const errorFormatter: Record<string, string> = {};
  issue.forEach((erros) => {
    const errorFields = erros.path.join(".");
    errorFormatter[errorFields] = erros.message;
  });
  return errorFormatter;
};
