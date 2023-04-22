import { IFieldValidator } from './IFieldValidator';
import { FieldValidationResult } from "../FieldValidationResult";
import { InputDescription } from '../../InputDescription';

export class StringValidator implements IFieldValidator {
  private readonly defaultMessage: string = 'Invalid value';

  /**
   * @return {string}
   */
  getType(): string {
    return 'string';
  }

  /**
   * @param  {any}                  value
   * @param  {InputDescription}     field
   * @return {FieldValidationResult}
   */
  validate(value: any, field: InputDescription): FieldValidationResult {
    const result: FieldValidationResult = new FieldValidationResult();

    if (value === undefined || value === null) {
      if (field.isRequired()) {
        result.message = field.getMessage('empty', this.defaultMessage);
      }

      return result;
    }

    const stringValue: string = String(value);
    if (field.getMin() !== null && stringValue.length < field.getMin()) {
      result.message = field.getMessage('min', this.defaultMessage);

      return result;
    }

    if (field.getMax() !== null && stringValue.length > field.getMax()) {
      result.message = field.getMessage('max', this.defaultMessage);

      return result;
    }

    return result;
  }
}