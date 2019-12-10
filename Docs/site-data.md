# Site/App Data

> Tips of using `YAML` and `JSON` to seperate data from our code.

While this can be done in a `JSON` file and it seems to be more common, I prefer to use
YAML because of how easy it is to read and write.

By using `js-yaml-loader`, the data gets imported as JavaScript `Object` or `Array` which is exactly how JSON is
imported by Webpack.

There are many use cases. This is just one of them shown below to illustrate
this concept.

## Example

**`db/site.yml`**

```yaml
nav:
  - title: Home
    path: /

  - title: About
    path: /about

  - title: Contact
    path: /contact
```

**`nuxt.config.js`**

```js
export default {
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: "js-yaml-loader"
      })
    }
  }
}
```

**`store/index.js`**

```js
import siteData from "@/db/site.yml"

export const state = () => ({
  nav: siteData.nav
})
```
