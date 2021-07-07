import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | top-nav', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <TopNav/>
    `);

    assert.equal(this.element.querySelector('.top-nav__title').textContent.trim(), 'Request an Appointment');
    assert.equal(this.element.querySelector('.top-nav__clinic-name').textContent.trim(), 'The Therapy Center');
  });
});
