## Angular

Load SCSS globally within `styles.scss` in your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42-webpack" as *;
```

Load component within `app.module.ts`:

```typescript
import { DBLinkModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBLinkModule],
  ...
})

```

Use component in template:

```html
<DBLink variant="primary" href="#">Link</DBLink>
```