const t         = require('track-spec');
const TrackView = require('../lib/index.js');

t.describe('TrackView', () => {
  let mockComponent = null;
  let mockView      = null;

  t.beforeEach(() => {
    mockComponent = {
      vnode: {
        attrs: {},
      },
    };
    mockView = new (class extends TrackView {
      // mock
    })(mockComponent);
  });

  t.describe('#attrs', () => {
    const subject = (() => mockView.attrs);

    t.it('Return attributes', () => {
      t.expect(subject()).equals(mockComponent.vnode.attrs);
    });
  });

  t.describe('#c', () => {
    const subject = (() => mockView.c);

    t.it('Return component', () => {
      t.expect(subject()).equals(mockComponent);
    });
  });

  t.describe('#render', () => {
    const subject = (() => mockView.render(''));

    t.it('Raise error', () => {
      let error = null;
      try {
        subject();
      } catch (e) {
        error = e;
      }
      t.expect(error.message).equals('Override #render.');
    });
  });

  t.describe('#t', () => {
    const subject = (() => mockView.t('hoge'));

    t.it('Return message', () => {
      t.expect(subject()).equals('translation missing: hoge');
    });
  });
});
