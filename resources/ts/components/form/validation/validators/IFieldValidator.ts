import { FieldValidationResult } from '../FieldValidationResult';
import { InputDescription } from '../../InputDescription';

export interface IFieldValidator {
  /**
   * @return {string}
   */
  getType(): string;

  /**
   * @param  {any}                  value
   * @param  {InputDescription}     field
   * @return {FieldValidationResult}
   */
  validate(value: any, field: InputDescription): FieldValidationResult;
}