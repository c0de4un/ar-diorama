import { Profile } from '../../models/Profile';
import { ApiController } from './ApiController';
import { ApiClient } from '../../clients/ApiClient';

export type LoginResponse = {
  profile?: Profile;
  token: string;
  errors?: object;
};

export type RegistrationResponse = {
  profile?: Profile;
  token: string;
  errors?: object;
};

export class AuthController extends ApiController {
  private readonly _registerUrl: string = 'auth/register';
  private readonly _loginUrl: string = 'auth/login';

  /**
   * @param  {string} email
   * @param  {string} password
   * @return {Promise<RegistrationResponse>}
   */
  public register(email: string, password: string): Promise<RegistrationResponse> {
    return ApiClient.getInstance()
      .post(
        this._registerUrl,
        {

          email: email,
          password: password
        }
      )
      .then((response) => {
        return {
          token: response.data.token || ''
        };
      })
    .catch((error) => {
      console.error(error);

      return {
        token: '',
      };
    });
  }

  /**
   * @param  {string} email
   * @param  {string} password
   * @return {Promise<LoginResponse>}
   */
  public login(email: string, password: string): Promise<LoginResponse> {
    return ApiClient.getInstance()
      .post(
        this._loginUrl,
        {
          email: email,
          password: password
        }
      )
      .then((response) => {
        let profile: Profile|undefined;
        if (response.data.profile) {
          profile = new Profile({...response.data.profile})
        }

        return {
          profile: profile,
          token: response.data.token || '',
          errors: response.data.errors || null,
        };
      })
      .catch((error) => {
        console.error(error);

        return {
          token: '',
          errors: {
            fatal: error
          }
        };
      });
  }
}
