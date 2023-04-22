export class AuthResponse {
  public status: boolean = false;
  private readonly _token: string;

  constructor(token: string) {
    this._token = token;
  }

  public getToken(): string {
    return this._token;
  }
}
