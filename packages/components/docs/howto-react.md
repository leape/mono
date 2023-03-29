# Get started with React

## Purpose

You are an Application Developer and you want to use DB UI Components in your own React App (CRA, Vite, Nextjs, ...).

## Install via npm

```bash
npm i -save @db-ui/react-components
```

As a result you should have three new folders in your `node_modules`:

```javascript
@db-ui
  /components // DB UI Components stylings
  /foundations // assets, Design Tokens and sources
  /react-components // React framework components
```

### Integrate in your app

Import your component like this:

```typescript
import { DbButton } from "@db-ui/react-components";
```

| WARNING: Some components require fonts and/or icons to work properly |
| -------------------------------------------------------------------- |

You can import fonts and icons with the provided css file from DB UI Foundations:

`import "@db-ui/components/build/styles/db-ui-42.css"`

Import this css before you use components. For example you could import it inside your `App.ts` file.

### Bundle your App

1. Create 4 folders in you public directory:

```shell
mkdir public/fonts
mkdir public/icons
mkdir public/images
```

2. Add a new `prebuild` script to your `package.json` like this:

```json
 "prebuild": "npx -y shx cp node_modules/@db-ui/foundations/assets/fonts/* public/fonts & npx -y shx cp node_modules/@db-ui/foundations/assets/icons/* public/icons & npx -y shx cp node_modules/@db-ui/foundations/assets/images/* public/images",
```

### Test if it works

In order to test the installation just add a component to your functional component, like in the example below:

```js
import "@db-ui/components/build/components/button/button.css";
import { DBButton } from "@db-ui/react-components";

function App() {
	return <DBButton>it works!</DBButton>;
}

export default App;
```

## How to use DB UI Components in Create React app

Create React App offers only limited access to the configuration of the production build. While it uses webpack under the hood, the webpack configuration is not exposed to the user.
To manage your CRA to work with SASS include Path you have to update or create your _.env_ file:

```
SASS_PATH=node_modules
```

In addition to get the asset paths working you have to load them separately. Further description is written above within the section _webpack based bundlers_.

```scss
@use "@db-ui/components/build/styles/db-ui-42-webpack";
```

### Example

[React Showcase GitHub](https://github.com/db-ui/mono/tree/main/showcases/react-showcase)
