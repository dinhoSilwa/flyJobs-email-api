import { IUserAuthLogin, IUserAuthSignup } from "../@types/IUserAuth";
import { prisma } from "../db/prisma";
import { IUseAuthRepository } from "../interfaces/IUserAuth";
import { HashPasswordManager } from "../utils/encrypt";
import { AuthError } from "../errors/customsErrorsApi";
import { TokenManager } from "../utils/TokenManager";
import { JWTPayload } from "jose";

export class UseAuthRepository implements IUseAuthRepository<IUserAuthSignup> {
  me(): Promise<JWTPayload> {
    try {
      const authData = prisma.userAuth.findMany();
      
    } catch (error) {
      console.log("deu erro");
    }
  }
  async signup(authData: IUserAuthSignup): Promise<void> {
    try {
      const { password } = authData;
      const createHashPassword = await HashPasswordManager.create(password);
      const authDataWithHashPassword = {
        ...authData,
        password: createHashPassword,
      };

      await prisma.userAuth.create({
        data: {
          ...authDataWithHashPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      console.error(error);
      throw new AuthError("Credenciais incorretas");
    }
  }
  async login(auth: IUserAuthLogin): Promise<any> {
    const { password, email } = auth;
    const isExistingUser = prisma.userAuth.findUnique({
      where: { email },
    });
    if (!isExistingUser) return null;

    const isMatchPasswordHash = await HashPasswordManager.compare(
      password,
      (await isExistingUser).password,
    );

    if (!isMatchPasswordHash) {
      throw new AuthError("Credenciais inválidas");
    }

    const tokenManager = TokenManager.getInstance();
    const token = await tokenManager.generateToken({
      id: (await isExistingUser).id,
      email: auth.email,
      role: "Admin",
    });
    return token;
  }
}
