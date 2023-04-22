import { IFieldValidator } from './IFieldValidator';
import { FieldValidationResult } from "../FieldValidationResult";
import { InputDescription } from '../../InputDescription';

export class NumericValidator implements IFieldValidator {
  private readonly defaultMessage: string = 'Invalid number';

  /**
   * @return {string}
   */
  getType(): string {
    return 'numeric';
  }

  /**
   * @param  {any}                  value
   * @param  {InputDescription}     field
   * @return {FieldValidationResult}
   */
  validate(value: any, field: InputDescription): FieldValidationResult {
    const result: FieldValidationResult = new FieldValidationResult();

    const numericValue = Number(value);
    if (isNaN(numericValue)) {
      if (field.isRequired()) {
        result.message = field.getMessage('empty', this.defaultMessage);
      }

      return result;
    }

    if (field.getMin() !== null && numericValue < field.getMin()) {
      result.message = field.getMessage('min', this.defaultMessage);

      return result;
    }

    if (field.getMax() !== null && numericValue > field.getMax()) {
      result.message = field.getMessage('max', this.defaultMessage);

      return result;
    }

    return result;
  }
}