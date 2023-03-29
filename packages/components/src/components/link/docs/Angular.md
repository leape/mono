## Angular

Load SCSS globally somewhere in your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42-webpack" as *;
```

Load component:

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
<db-link variant="primary">Link</db-link>
```
