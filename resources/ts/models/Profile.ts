import { Model } from './Model';

export class Profile extends Model {
  constructor(data: object) {
    super();

    Object.assign(this, data);
  }
}
