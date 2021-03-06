'use strict';

define("emb-app/tests/integration/components/postlist/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | postlist', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "vPsd5jpZ",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"postlist\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ZAiO7/jW",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"postlist\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb-app/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/post.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('models/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass ESLint\n\n');
  });
  QUnit.test('pods/application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/post-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/post-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('pods/posts/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/posts/route.js should pass ESLint\n\n');
  });
  QUnit.test('pods/product/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/product/controller.js should pass ESLint\n\n2:10 - \'computed\' is defined but never used. (no-unused-vars)\n13:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n25:13 - Unexpected console statement. (no-console)\n33:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });
  QUnit.test('pods/product/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/product/route.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/post.js should pass ESLint\n\n');
  });
});
define("emb-app/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('emb-app/pods/application/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/application/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/components/post-list/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/components/post-list/template.hbs should pass TemplateLint.\n\nemb-app/pods/components/post-list/template.hbs\n  4:0  error  Incorrect indentation for `<p>` beginning at L4:C0. Expected `<p>` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('emb-app/pods/login/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/login/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/posts/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/posts/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/product/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/product/template.hbs should pass TemplateLint.\n\nemb-app/pods/product/template.hbs\n  13:7  error  Incorrect indentation for `{{#each}}` beginning at L13:C7. Expected `{{#each}}` to be at an indentation of 4 but was found at 7.  block-indentation\n  35:5  error  Incorrect indentation for `{{! {{/if}} }}` beginning at L35:C5. Expected `{{! {{/if}} }}` to be at an indentation of 4 but was found at 5.  block-indentation\n  34:13  error  Incorrect indentation for `each` beginning at L13:C7. Expected `{{/each}}` ending at L34:C13 to be at an indentation of 7 but was found at 4.  block-indentation\n  14:5  error  Incorrect indentation for `<tr>` beginning at L14:C5. Expected `<tr>` to be at an indentation of 9 but was found at 5.  block-indentation\n  33:9  error  Incorrect indentation for `tr` beginning at L14:C5. Expected `</tr>` ending at L33:C9 to be at an indentation of 5 but was found at 4.  block-indentation\n  15:5  error  Incorrect indentation for `<th>` beginning at L15:C5. Expected `<th>` to be at an indentation of 7 but was found at 5.  block-indentation\n  19:5  error  Incorrect indentation for `{{! <div  class="{{if usered "red" "blue"}}"></div> }}` beginning at L19:C5. Expected `{{! <div  class="{{if usered "red" "blue"}}"></div> }}` to be at an indentation of 7 but was found at 5.  block-indentation\n  21:5  error  Incorrect indentation for `{{! <td><input type="checkbox" class ="usered" checked></td> }}` beginning at L21:C5. Expected `{{! <td><input type="checkbox" class ="usered" checked></td> }}` to be at an indentation of 7 but was found at 5.  block-indentation\n  24:4  error  Incorrect indentation for `{{! {{#if (eq input \'checked\')}} }}` beginning at L24:C4. Expected `{{! {{#if (eq input \'checked\')}} }}` to be at an indentation of 7 but was found at 4.  block-indentation\n  25:6  error  Incorrect indentation for `<td>` beginning at L25:C6. Expected `<td>` to be at an indentation of 7 but was found at 6.  block-indentation\n  26:6  error  Incorrect indentation for `<td>` beginning at L26:C6. Expected `<td>` to be at an indentation of 7 but was found at 6.  block-indentation\n  27:6  error  Incorrect indentation for `<td>` beginning at L27:C6. Expected `<td>` to be at an indentation of 7 but was found at 6.  block-indentation\n  28:6  error  Incorrect indentation for `<td>` beginning at L28:C6. Expected `<td>` to be at an indentation of 7 but was found at 6.  block-indentation\n  29:6  error  Incorrect indentation for `{{#if}}` beginning at L29:C6. Expected `{{#if}}` to be at an indentation of 7 but was found at 6.  block-indentation\n  31:6  error  Incorrect indentation for `<td>` beginning at L31:C6. Expected `<td>` to be at an indentation of 8 but was found at 6.  block-indentation\n  12:15  error  Unnecessary string concatenation. Use {{if usered "red" "blue"}} instead of \'{{if usered "red" "blue"}}\'.  no-unnecessary-concat\n  12:15  error  you must use double quotes in templates  quotes\n  17:52  error  you must use double quotes in templates  quotes\n  29:30  error  you must use double quotes in templates  quotes\n  31:80  error  you must use double quotes in templates  quotes\n');
  });
});
define("emb-app/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/postlist/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/postlist/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/model-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/posts/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/posts/route-test.js should pass ESLint\n\n');
  });
});
define("emb-app/tests/test-helper", ["emb-app/app", "emb-app/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("emb-app/tests/unit/models/model-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('post', {});
      assert.ok(model);
    });
  });
});
define("emb-app/tests/unit/posts/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | posts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:posts');
      assert.ok(route);
    });
  });
});
define('emb-app/config/environment', [], function() {
  var prefix = 'emb-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('emb-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
