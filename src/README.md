# A note regarding TypeScript in these examples

If you remove the buttonText prop from ExampleButton, you will receive an error.
That's because buttonText is required in the interface defined in the component's file (ExampleProps).

```
interface ExampleProps {
  buttonText: string;
  header?: string;
}
```

However, if you remove the header prop, you will not receive an error.
This is because the header property was listed as optional in the interface with the `?` character.

This is the benefit of using TypeScript: all the guess-work is removed.
