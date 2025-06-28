import { IUserAuthLogin, IUserAuthSignup } from "../@types/IUserAuth";
import { IUseAuthRepository } from "../interfaces/IUserAuth";

export class UseAuthService {
  private authRepository: IUseAuthRepository<IUserAuthSignup>;
  constructor(authRepository: IUseAuthRepository<IUserAuthSignup>) {
    this.authRepository = authRepository;
  }
  public async signup(authData: IUserAuthSignup): Promise<void> {
    await this.authRepository.signup(authData);
  }

  public async login(authData: IUserAuthLogin): Promise<any> {
    await this.authRepository.login(authData);
  }
}
