## HTML

Load SCSS globally somewhere in your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42" as *;
```

Use it:

```html
<a class="db-link" href="#" data-variant="primary" data-content="internal"
	>Primary</a
>
```
