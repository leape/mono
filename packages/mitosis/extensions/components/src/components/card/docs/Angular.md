## Angular

For general installation and configuration look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBCardModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBCardModule],
  ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-card>Card content</db-card>
```
