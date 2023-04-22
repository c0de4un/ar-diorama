export class InputDescription {
  private _name: string;
  private readonly _type: string;
  private _messages: Map<string, string> = new Map<string, string>();
  private _placeholder: string = '';
  private _required: boolean = false;
  private _validator: string = '';
  private _min: number|null = null;
  private _max: number|null = null;
  private _label: string = '';

  /**
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * @param  {string} name
   * @return {void}
   * @private
   */
  public set name(name: string) {
    this._name = name;
  }

  /**
   * @param {string} name
   * @param {string} type
   */
  public constructor(name: string, type: string) {
    this._name = name;
    this._type = type;
  }

  /**
   * @param  {string} name
   * @param  {string} type
   * @return {InputDescription}
   */
  public static create(name: string, type: string): InputDescription {
    return new InputDescription(name, type);
  }
  
  /**
   * @return {string}
   */
  public getType(): string {
    return this._type;
  }

  /**
   * @param  {string} type
   * @param  {string} message
   * @return {InputDescription}
   */
  public addMessage(type: string, message: string): InputDescription {
    this._messages.set(type, message);

    return this;
  }

  /**
   * @param {string} type
   * @param {string} defaultMessage
   */
  public getMessage(type: string, defaultMessage: string = ''): string {
    return this._messages.get(type) || defaultMessage;
  }

  /**
   * @param  {string} placeholder
   * @return {InputDescription}
   */
  public setPlaceholder(placeholder: string): InputDescription {
    this._placeholder = placeholder;

    return this;
  }

  /**
   * @return {string}
   */
  public getPlaceholder(): string {
    return this._placeholder;
  }

  /**
   * @param  {boolean} required
   * @return {InputDescription}
   */
  public setRequired(required: boolean): InputDescription {
    this._required = required;

    return this;
  }

  /**
   * @return {boolean}
   */
  public isRequired(): boolean {
    return this._required;
  }

  /**
   * @param  {string} name
   * @return {InputDescription}
   */
  public setValidator(name: string): InputDescription {
    this._validator = name;

    return this;
  }

  /**
   * @return {string}
   */
  public getValidator(): string {
    return this._validator;
  }

  /**
   * @param  {string} max
   * @return {InputDescription}
   */
  public setMax(max: number): InputDescription {
    this._max = max;

    return this;
  }

  /**
   * @return {number}
   */
  public getMax(): number {
    return this._max || 0;
  }

  /**
   * @param  {string} min
   * @return {InputDescription}
   */
  public setMin(min: number): InputDescription {
    this._min = min;
    
    return this;
  }

  /**
   * @return {number}
   */
  public getMin(): number {
    return this._min || 0;
  }

  /**
   * @param  {string} label
   * @return {InputDescription}
   */
  public setLabel(label: string): InputDescription {
    this._label = label;

    return this;
  }

  /**
   * @return {string}
   */
  public getLabel(): string {
    return this._label;
  }

  /**
   * @return {boolean}
   */
  public hasLabel(): boolean {
    return this._label.length > 0;
  }
}