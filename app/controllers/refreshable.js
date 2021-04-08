import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RefreshableController extends Controller {
  @action
  buttonClick() {
    this.send('updateRouteModel');
  }
}
