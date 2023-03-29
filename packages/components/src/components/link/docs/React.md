## React

Load SCSS globally in a `index.scss` file inside `main.tsx`/`main.jsx` within your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
```

Import component:

```typescript
import { DBLink } from "@db-ui/react-components";

<DBLink href="#">{children}</DBLink>;
```
