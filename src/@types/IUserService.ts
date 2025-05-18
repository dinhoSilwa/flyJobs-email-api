export interface IUserService {
  id?: string;
  name: string;
  email: string;
  phone: string;
  mode: string;
  selectedServiceType: string;
  isExpressService: boolean;
  termsAccepted: boolean;
}
