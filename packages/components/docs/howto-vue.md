# Get started with Vue

## Purpose

You are an Application Developer and you want to use DB UI Elements in your own Vue app.

## Install via npm

```bash
npm i -save @db-ui/v-components
```

As a result you should have 3 new folders in your `node_modules`:

```javascript
@db-ui
  /components // DB UI Components stylings
  /foundations // assets, Design Tokens and sources
  /v-components // Vue framework components
```

### Integrate in your app

Import a DB UI Components component into a vue component (\*.vue) like this:

```vue
<script setup lang="ts">
import {
  DbButton,
} from '@db-ui/v-components';
...
</script>
```

Now import our SCSS before you use components. For example you could import it inside your `main.ts` file.

#### Vite

For Rollup based bundlers like Vite or Parcel we're providing the following SCSS endpoint:

```scss
@use "@db-ui/components/build/styles/db-ui-42-rollup";
```

#### Webpack

If you still use webpack (Vue 2 or 3 CLI), you need to add the following entry to your `vue.config.js` (for Vue 2 or 3 CLI):

```json
module.exports = {
  (...)
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "node_modules")],
        },
      },
    },
  },
};
```

### Test if it works

In order to test the installation just add a component to your `<template>`:

```html
<template>
	<DBButton>Hi from Vue!</DBButton>
</template>
```

### Events

We add `v-model` support which fires on every change.
But you can use normal `@` events as well.

Both Inputs in this example do the same:

```html
<script setup lang="ts">
	import { DbInput } from "@db-ui/v-components";
	import { ref } from "vue";
	const input = ref("");
</script>
<template>
	<DBInput label="Inputfield" name="input-name" v-model="input"></DBInput>
	<DBInput
		label="Inputfield"
		name="input-name"
		:value="input"
		@change="e => input = e.target.value"
	></DBInput>
</template>
```

### Example

[Vue Showcase GitHub](https://github.com/db-ui/mono/tree/main/showcases/vue-showcase)
