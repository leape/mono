# Get started with Angular

## Purpose

You are an Application Developer and you want to use DB UI Components in your own Angular app.

## Install via npm

```bash
npm i -save @db-ui/ngx-components
```

As a result you should have 3 new folders in your `node_modules`:

```javascript
@db-ui
  /components // DB UI Components stylings
  /foundations // assets, Design Tokens and sources
  /ngx-components // Angular framework components
```

### Integrate in your app

1. Import the DB UI Components Angular library into your `app.modules.ts` file:

```typescript
...
import { DBButtonModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: […, DBButtonModule]
})
export class AppModule {}
```

2. Use a component inside an `.html` file:

```html
<DBButton (click)="doSomething()">it works!</DBButton>
```

### Bundle your App

Now you can choose if you want to use compiled css files or sass files.

TIP: We recommend to import the scss files as in case of angular, the angular cli will optimize, compress and convert all assets automatically during the build process.

By adding `{ "glob": "**/*", "input": "node_modules/@db-ui/foundations/assets/", "output": "." }` to your config file `npm build` we copy the content of _node_modules/@db-ui/foundations/assets_ folder to _assets_ folder in the Angular app, that is deployed on `ng serve` and this will give you access to assets like images, icons, etc. provided by DB UI Foundations. Don't forget to add it to any necessary configuration part included, like e.g. `projects.PROJECTNAME.architect.build.options` as well as `projects.PROJECTNAME.architect.test.options`

Inside your `angular.json` file you have a "build" step. Under "options" you need to add your style like this:

#### SCSS

```json
"options":{
...
 "assets": [
              "src/favicon.ico",
              "src/assets",
			  { "glob": "**/*", "input": "node_modules/@db-ui/foundations/assets/", "output": "." }
            ],
"stylePreprocessorOptions": {
    "includePaths": [
        "node_modules/"
    ]
},
...
}
```

You can use the overall scss file or pick the relevant parts.
E.g. you can import the overall scss files to your `src/styles.scss` by adding the following imports based on your bundler in use.

```scss
@use "@db-ui/components/build/styles/db-ui-42-webpack";
```

#### CSS

```json
"options":{
...
 "assets": [
              "src/favicon.ico",
              "src/assets",
			  { "glob": "**/*", "input": "node_modules/@db-ui/foundations/assets/", "output": "." }
            ],
"styles":  [
              "src/styles.css",
              "node_modules/@db-ui/components/build/styles/db-ui-42-webpack.css"
            ],
...
}
```

---

### Events

There are 3 ways to use Events in Angular:

**[ngModel](https://angular.io/api/forms/NgModel)**

```html
<DBInput label="Inputfield" name="input-name" [(ngModel)]="input"></DBInput>
```

**[FormControl](https://angular.io/api/forms/FormControl)**

```html
<DBInput
	label="Inputfield"
	name="input-name"
	[formControl]="inputControl"
></DBInput>
```

**[change](https://developer.mozilla.org/de/docs/Web/API/HTMLElement/change_event)**

```html
<DBInput
	label="Inputfield"
	name="input-name"
	(change)="input = $event.target.value"
></DBInput>
```

### Example

[Angular current version Showcase GitHub](https://github.com/db-ui/mono/tree/main/showcases/angular-current-showcase)

[Angular LTS Showcase GitHub](https://github.com/db-ui/mono/tree/main/showcases/angular-lts-showcase)
