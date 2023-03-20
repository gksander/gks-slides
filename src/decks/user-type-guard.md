---
theme: gks
codeFontSize: 0.19in
---

# **User-defined Type Guards**

Ever fought with the return type of your `Array.filter` in TypeScript?

```ts twoslash
const items = [1, "two", 3, "four", "five"];

// I just want the strings 😤
const stringItems = items.filter(i => typeof i === "string");
//    ^?
```

Try writing your own user-defined type guard using the `is` keyword!

```ts twoslash {1}
const items = [1, "two", 3, "four", "five"];
// ---cut---
const isString = (i: unknown): i is string => typeof i === "string";
const stringItems = items.filter(isString);
//    ^?
```
