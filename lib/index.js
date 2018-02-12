const I18n = require('track-i18n');

/**
 * A base view.
 * @example
 *  class Hoge extends TrackView {
 *    render() {
 *      this.c;     // Instance of component.
 *      this.t;     // Wrapper I18n.t.
 *      this.attrs; // Attributes.
 *      return m('div', 'Hello');
 *    }
 *  }
 */
class TrackView {
  /**
   * Initialize
   * @param {TrackComponent} component Component.
   */
  constructor(component) {
    this._component = component;
  }

  /**
   * Get attributes.
   * @return {object} Attributes.
   */
  get attrs() {
    return this._component.vnode.attrs;
  }

  /**
   * Get Component.
   */
  get c() {
    return this._component;
  }

  /**
   * Render view.
   * @return {vnode|string} rendered view.
   */
  render() {
    throw new Error('Override #render.');
    return null;
  }

  /**
   * Call I18n.t
   * @param {object} args Arguments.
   * @return {string} Translated message.
   */
  t(...args) {
    return I18n.t(...args);
  }
}

module.exports = TrackView;
