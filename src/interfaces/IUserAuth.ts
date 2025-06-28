import { JWTPayload } from "jose";
import { IUserAuthLogin, IUserAuthSignup } from "../@types/IUserAuth";

type AuthType = IUserAuthSignup | IUserAuthLogin;
export interface IUseAuthRepository<AuthType> {
  signup(auth: IUserAuthSignup): Promise<void>;
  login(auth: IUserAuthLogin): Promise<void>;
  me(): Promise<JWTPayload>;
}
