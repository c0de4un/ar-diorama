import { StringValidator } from './StringValidator';

export class PasswordValidator extends StringValidator {
  /**
   * @return {string}
   */
  getType(): string {
    return 'password';
  }
}