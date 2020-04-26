# css-paint-es

`Paint Worklet` is useful. But `addMoudle` must be a aUrl.
This repo is used for es module. Using `css-paint-polyfill` and adjust for es module. 

A polyfill that brings Houdini's [CSS Custom Paint API] and Paint Worklets to all modern browsers (Edge, Firefox, Safari and Chrome).

Performance is particularly good in Firefox and Safari, where this polyfill leverages `-webkit-canvas()` and `-moz-element()` for optimized rendering. For other browsers, framerate is governed by Canvas `toDataURL()` / `toBlob()` speed.



## Installation & Usage

use yarn
```bash
yarn add 'css-paint-es'

```

add es module using `addModule` method

```javascript
import ESPaint from 'css-paint-es';

ESPaint.addModule({
  name: 'paint-module',
  painter: CustomPainter 
})
```

---

[CSS Custom Paint API]: https://developers.google.com/web/updates/2018/01/paintapi
