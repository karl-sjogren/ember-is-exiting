import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  resetController(controller, isExiting /*, transition*/) {
    console.log('isExiting index', isExiting);
  }
}
