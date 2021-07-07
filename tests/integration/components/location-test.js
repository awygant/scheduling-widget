import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | location', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <Location
        @name="Anna"
        @phone="408 355 3815"
      />
    `);
    assert.equal(this.element.querySelector('.location__title').textContent.trim(), 'Anna');
    assert.equal(this.element.querySelector('.location__phone').textContent.trim(), '408 355 3815');
  });
});
