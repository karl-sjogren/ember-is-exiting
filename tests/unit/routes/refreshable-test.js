import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | refreshable', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:refreshable');
    assert.ok(route);
  });
});
