## problema

la importacion de modulos locales
con typescript soluciona las rutas
largas que a veces se tiene

`import { myHelper } from "../../../../helpers/myhelpers.ts" `

con la importacion podemos cambiar de eso a esto:

`import { myHelper } from "@helpers/myhelpers.ts"`;

## conceptos

`tsconfig` : a tsconfig file in a directory indicates that the
directory is the root of the typescript or javascript project

- **baseUrl:** lets you define base directory to resolve non-a absolute modules names, you can defines a root folder when you can do absolute file resolution
- **paths:**
  A series of entries which re-map imports lookup locations
  relative to the `baseUrl`.

  ```json
  {
    "compilerOptions": {
      "baseUrl": ".", // this must be specified if "paths" is specified.
      "paths": {
        "jquery": ["node_modules/jquery/dist/jquery"] // this mapping is relative to "baseUrl"
      }
    }
  }
  ```

  since we know this, we can do the
  following

```js
{
 "compilerOptions": {
     "baseUrl": ".",
     "paths": {
          "@helpers/*" : ["helpers/*"],
           "@components/*"  : ["components/*"]
     }
 }
}
```

now you can do this :)

`import { myHelper } from "@helpers/myhelpers.ts"`

but you also het mistake xd

this is beacause webpack does not reconize the
path in compiler moment

**soluition**

installa plugin

`npm install --save-dev tsconfig-paths-webpack-plugin`

### in next js

```ts
// archivo next.config.js
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  webpack: config => {
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }

    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
  },
  ...
};


```

https://dev.to/lewisyuburi/next-js-typescript-mejora-la-manera-en-que-importas-componentes-y-modulos-locales-42bc
