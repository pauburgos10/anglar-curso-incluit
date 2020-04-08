export class Client {

  public name: string;
  public lastName: string;
  public phone: string;
  public email: string;
  public address: string;
  public province: string;
  public city: string;

  public constructor(init?: Partial<Client>) {
    Object.assign(this, init);
  }
}
