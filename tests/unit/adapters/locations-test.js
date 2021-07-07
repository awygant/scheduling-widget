import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | locations', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:locations');
    assert.ok(adapter);
  });

  test('pathForType returns correct value', function(assert) {
    let adapter = this.owner.lookup('adapter:locations');
    assert.equal(adapter.pathForType(), `client-portal-api/offices?filter[clinicianId]=2`);
  });
});
