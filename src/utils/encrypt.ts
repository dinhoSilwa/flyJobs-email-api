import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;
export const HashPasswordManager = {
  async create(plainPassword: string): Promise<string> {
    const encrypt = await bcrypt.hash(plainPassword, SALT_ROUNDS);
    return encrypt;
  },

  async compare(plainPassword: string, hashPassword: string): Promise<boolean> {
    const isMatchHash = await bcrypt.compare(plainPassword, hashPassword);
    return isMatchHash;
  },
};
