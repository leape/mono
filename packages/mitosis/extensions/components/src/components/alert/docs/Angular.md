## Angular

For general installation and configuration look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBAlertModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBAlertModule],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-alert headline="Headline">Alert</db-alert>
```
