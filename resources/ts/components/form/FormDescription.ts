import { InputDescription } from './InputDescription';
import { FormValidator } from './validation/FormValidator';

export class FormDescription {
  private _key: string = '';
  private _fields: Array<InputDescription> = new Array<InputDescription>();
  private _validator: FormValidator|null = null;
  private _values: Map<string, any> = new Map<string, string>();

  /**
   * @return {Map<string, string>}
   */
  public get values(): Map<string, string> {
    return this._values;
  }

  /**
   * @param  {string} key
   * @param  {any}    defaultValue
   * @return {any}
   */
  public getValue(key: string, defaultValue: any = undefined): any {
    return this._values.get(key) || defaultValue;
  }

  /**
   * @param  {string} key
   * @param  {string|undefined} defaultValue
   * @return {string|undefined}
   */
  public getStringValue(key: string, defaultValue: string|undefined = undefined): string|undefined {
    const value: any = this._values.get(key);

    return value ? String(value) : defaultValue;
  }

  /**
   * @param  {string} key
   * @param  {any} value
   * @return {FormDescription}
   */
  public setValue(key: string, value: any): FormDescription {
    this.values.set(key, value);

    return this;
  }

  /**
   * @return {string}
   */
  public get key(): string {
    return this._key
  }

  /**
   * @param  {string} key
   * @return {void}
   * @private
   */
  private set key(key: string) {
    if (!key.length) {
      throw new Error('empty key')
    }

    this._key = key;
  }

  /**
   * @return {Array<InputDescription>}
   */
  public get fields(): Array<InputDescription> {
    return this._fields;
  }

  /**
   * @param  {FormValidator} validator
   * @return {void}
   */
  public set validator(validator: FormValidator|null) {
    this._validator = validator;
  }

  /**
   * @return {FormValidator|null}
   */
  public get validator(): FormValidator|null {
    return this._validator;
  }

  /**
   * @param  {FormValidator} validator
   * @return {FormDescription}
   */
  public setValidator(validator: FormValidator): FormDescription {
    this._validator = validator;

    return this;
  }

  /**
   * @param  {Array<InputDescription>} fields
   * @return {void}
   * @private
   */
  private set fields(fields: Array<InputDescription>) {
    this._fields = fields;
  }

  public constructor(key: string, fields: Array<InputDescription> = new Array<InputDescription>()) {
    this.key = key;
    this.fields = fields;
  }

  /**
   * @param  {string}                  key
   * @param  {Array<InputDescription>} fields
   * @return {FormDescription}
   */
  public static create(key: string, fields: Array<InputDescription> = new Array<InputDescription>()): FormDescription {
    return new FormDescription(key, fields);
  }

  /**
   * @param  {InputDescription} field
   * @return {FormDescription}
   */
  public addField(field: InputDescription): FormDescription {
    this._fields.push(field);

    return this;
  }
}