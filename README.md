# TrackComponent
View for track.

## Installation

### npm

```shell
npm install track-view
```

## Usage

```javascript
const TrackView = require('track-view');

class Hoge extends TrackView {
  render(_yield) {
    this.c;     // Instance of component.
    this.t;     // Wrapper I18n.t.
    this.attrs; // Attributes.

    return m('div', [
      m('h1', 'Hello!'),
      yield
    ]);
  }
}
```
