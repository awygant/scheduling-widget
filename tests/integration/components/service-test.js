import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | service', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    let router = this.owner.lookup('router:main');
    router.setupRouter();

    await render(hbs`
      <Service
        @title="Psychiatric Diagnostic Evaluation"
        @duration="50"
        @id="12345"
      />
    `);

    assert.equal(this.element.querySelector('.service__list-item h5').textContent.trim(), 'Psychiatric Diagnostic Evaluation');
    assert.equal(this.element.querySelector('.service__list-item p').textContent.trim(), '50 minutes');
    assert.equal(this.element.querySelector('.service__list-item a').getAttribute('href'), '/locations?id=12345');
  });
});
