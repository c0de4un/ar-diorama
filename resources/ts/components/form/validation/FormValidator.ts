import { InputDescription } from '../InputDescription';
import { FieldValidationResult } from './FieldValidationResult';
import { IFieldValidator } from './validators/IFieldValidator';

import { NumericValidator } from './validators/NumericValidator';
import { StringValidator } from './validators/StringValidator';
import { PasswordValidator } from './validators/PasswordValidator';

export class FormValidator {
  private _inputs: Array<InputDescription>;

  private _data: Map<string, any>|null;

  private _validators: Map<string, IFieldValidator>;

  public constructor(inputs: Array<InputDescription> = [], data: Map<string, any>|null = null) {
    this._inputs = inputs;
    this._data = data;
    this._validators = new Map<string, IFieldValidator>();

    this.registerDefaultValidators();
  }

  /**
   * @param  {IFieldValidator} validator
   * @return {FormValidator}
   */
  public registerValidator(validator: IFieldValidator): FormValidator {
    this._validators.set(validator.getType(), validator);

    return this;
  }

  /**
   * @return {Array<InputDescription>}
   */
  public get inputs(): Array<InputDescription> {
    return this._inputs;
  }

  /**
   * @param  {Array<InputDescription>} inputs
   * @return void
   */
  public set inputs(inputs: Array<InputDescription>) {
    this._inputs = inputs;
  }

  /**
   * @return {Object}
   */
  public get data() {
    return this._data;
  }

  /**
   * @param  {Map<string, any>} data
   * @return void
   */
  public set data(data: Map<string, any>|null) {
    this._data = data;
  }

  /**
   * @param  {Map<string, any>} data
   * @return {FormValidator}
   */
  public setData(data: Map<string, any>|null): FormValidator
  {
    this.data = data;

    return this;
  }

  /**
   * @param  {Map<string, any>} data
   * @return {FormValidator}
   */
  public validate(data: Map<string, any>|null = null): Map<string, string>
  {
    if (data) this.data = data;

    if (!this._inputs || !this._inputs.length) {
      throw new Error('validation rules not set');
    }

    if (!this._data) {
      throw new Error('data not set');
    }

    const result: Map<string, string> = new Map<string, string>();

    let field;
    let value: any;
    const fieldsCount = this._inputs.length;
    let validationResult: FieldValidationResult;
    for (let i = 0; i < fieldsCount; i++) {
      field = this._inputs[i];

      value = this._data.get(field.name);

      validationResult = this.validateField(value, field);

      if (!validationResult.isValid) {
        result.set(field.name, validationResult.message);
      }
    }

    return result;
  }

  /**
   * @param  {any}                  value
   * @param  {InputDescription}     field
   * @return {FieldValidationResult}
   * @private
   */
  private validateField(value: any, field: InputDescription): FieldValidationResult {
    const fieldType: string = field.getType();

    const validator: IFieldValidator|undefined = this._validators.get(fieldType);
    if (!validator) {
      throw new Error(`unregistered field of type #${fieldType}`);
    }

    return validator.validate(value, field);
  }

  /**
   * @return {void}
   * @private
   */
  private registerDefaultValidators(): void {
    this.registerValidator(new NumericValidator());
    this.registerValidator(new StringValidator());
    this.registerValidator(new PasswordValidator());
  }
}