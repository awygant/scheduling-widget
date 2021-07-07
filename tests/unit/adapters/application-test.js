import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    assert.ok(adapter);
  });

  test('Correct headers and host are in place', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    assert.deepEqual(adapter.get('headers'), {
      'Accept': 'application/vnd.api+json',
      'Api-Version': '2020-01-01',
      'Application-Build-Version': '0.0.1',
      'Application-Platform': 'web'
    });
    assert.equal(adapter.get('host'), 'https://johnny-appleseed.clientsecure.me');
  });

  test('pathForType returns correct value', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    assert.equal(adapter.pathForType(), `client-portal-api/`);
  });
});
