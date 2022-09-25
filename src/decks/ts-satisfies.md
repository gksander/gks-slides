---
theme: formidable
codeFontSize: 0.2in
---

# TypeScript `satisfies` Operator

::gap

## Part of TypeScript 4.9 (currently in Beta).

::gap

The `satisfies` operator is a **big deal**, allowing you to ensure a value is compliant with some type – while keeping your types as strict as possible.

::gap

## Read on to see what it's all about 👉

---

# A little motivation.

Let's say you have a `Colors` type that is somewhat loose:

```ts twoslash
type Colors = Record<string, string>;
```

You have some methods that will require a `Colors`-type argument, so you want to be able to define `Colors`-compliant values:

```ts twoslash
type Colors = Record<string, string>;
const myColors: Colors = { primary: "#ff00ff" };
```

You're not getting any errors, but this setup is less-than-ideal. Let's see why. 👉

---

# Our `Colors` type is **loose**

Your `myColors` value is compliant with your `Colors` type, but TypeScript knows *very little* about the type of your value!

```ts twoslash
type Colors = Record<string, string>;
const myColors: Colors = { primary: "#ff00ff" } as const;

// 🙈 not good!
myColors.secondary;
//       ^?
```

Right now, TypeScript knows nothing about `myColors` other than it's of type `Record<string, string>`. To TypeScript, `myColors.secondary` is a reasonable expression – but *you* know it's nonsense.

---

# Let's tighten things up!

In TypeScript 4.9, we'll get access to the `satisfies` operator – a real superhero in this situation! We use the `satisfies` operator to ensure our value is compliant with a type, without losing information.

```ts twoslash {4,7}
// @errors: 2339
type Colors = Record<string, string>;
const myColors = {
  primary: "#ff00ff"
} as const satisfies Colors;

// Caught it this time!
myColors.secondary;
```

---

# Conclusion

This scenario we explored is fairly simple, but hopefully illustrative. It's common to have "loose" types, but to want to keep as much type information as possible about particular values that "satisfy" a type!

::gap

The `satisfies` operator is a **big win** for both library authors _and_ application developers, and should reduce the number of TypeScript "hacks" necessary to provide the best possible developer experience.

::gap

Keep your eyes peeled 👀 for the stable release of TypeScript 4.9!
