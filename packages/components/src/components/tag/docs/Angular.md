## Angular

For general installation and configuration look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBTagModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBTagModule],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-tag>Tag</db-tag>
```