# TypeScript 101

TODO: Banner here

---

# Chapter 0: **Why TypeScript?**

## TypeScript is **JavaScript with syntax for types**.

TODO: Diagram of TS -> JS compiling and the general mental model for TS.

## Is this "syntax for types" worth it? *Should I just use JavaScript?*

---

# Catch errors before your users do

## With TypeScript, you can catch a whole class of errors during development (instead of in production).

&nbsp;

```ts twoslash
// @errors: 2362
const calculateTip = (amount: number, percent: string | number) => {
	return (1 + percent / 100) * amount;
}
```

---

# Better DX with Guard Rails

## With type-safety generally comes **better development guard rails** and autocomplete.

```tsx twoslash
// @noErrors
import { Bar } from "victory";

const App = () => {
  return (
    <Bar da />
//         ^|
  )
}

```

---

# Use Next-Gen Language Features

TODO: ... use next-gen language features before they're available in JS, since TS gets compiled.

---

# Chapter 1: Up and Running

## Let's get up and running with types. We'll cover:

- primitive types,
- annotating variables with types,
- explicit type annotations vs type inference,
- and basic function types.

[See here](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables)

---

# Primitive Types

The most common primitive types in TypeScript: `string`, `number`, and `boolean`. Somewhat self-explanatory:

- `string` type used to represent string values;
- `number` type used to represent number values (ints, floats, etc.);
- `boolean` type used to represent boolean values (`true` or `false`).

&nbsp;

### We will use these types as our foundation.

---

# Chapter 2: Type Basics

- “basic” types: `number`, `string`, `null`, `undefined`, (more probably) see [https://www.typescriptlang.org/docs/handbook/basic-types.html](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- literal types
- Array types
- object types (is this the name?)

---

# Chapter 3: Type Narrowing and Branching

[See here](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

- typeof guards
- Truthfulness checks
- Equality narrowing
- “In” narrowing
- Instance of narrowing
- Discriminated unions

---

# Chapter 4: Deriving New Types

- Accessing nested types
- Unions
- Intersections
- Built-in utility types (introductory)
	- `Pick`
	- `NonNullable`
	- (More that we’ll cover later….)

---

# Chapter 5: Object Types

TODO: ...

---

# Chapter 6: TypeScript No-no's

TODO:

- Type assertions
- Non-null assertions
- any type
