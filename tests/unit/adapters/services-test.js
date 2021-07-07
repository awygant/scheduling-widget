import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | services', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:services');
    assert.ok(adapter);
  });

  test('pathForType returns correct value', function(assert) {
    let adapter = this.owner.lookup('adapter:services');
    assert.equal(adapter.pathForType(), `client-portal-api/cpt-codes?filter[clinicianId]=2`);
  });
});
