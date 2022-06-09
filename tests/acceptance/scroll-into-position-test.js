import { module, test } from 'qunit';
import { visit, find, waitUntil, scrollTo } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-scroll-into-position/tests/helpers';

module('Acceptance | scroll into position', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /scroll-into-position', async function (assert) {
    await visit('/');
    const appLayoutElem = find('[data-test-container-layout]');

    //appLayoutElem.scrollTop = 400;
    await scrollTo(appLayoutElem, 0, 400);

    await waitUntil(() => appLayoutElem.scrollTop === 400, { timeout: 500 });
    assert.ok(appLayoutElem);
  });
});
