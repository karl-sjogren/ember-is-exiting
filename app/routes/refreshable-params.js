import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { hash } from 'rsvp';

export default class RefreshableParamsRoute extends Route {
  buildRouteInfoMetadata() {
    console.log('buildRouteInfoMetadata');
    return {
      allow: ['user', 'admin-user', 'bc-user', 'super-user'],
    };
  }

  model(params) {
    console.log('model');
    return hash({
      model: fetch(
        'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js?' +
          params.id
      ),
    });
  }

  setupController(controller, models) {
    console.log('setupController');
    controller.setProperties(models);
  }

  resetController(controller, isExiting /*, transition*/) {
    console.log('resetController');
    console.log('isExiting refreshable-params', isExiting);
  }

  @action
  updateRouteModel() {
    console.log('updateRouteModel');
    this.refresh();
  }
}
