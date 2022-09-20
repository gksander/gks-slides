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

# Annotating Variables with Types

### TypeScript is all about types and type annotations. How do we annotate our code with types?

The most basic way is to annotate a `const`, `let`, or `var` with a type using `:` notation.

```ts twoslash
// Declare that `x` has a type of `number`
const x: number = 3;

// Declare that `personName` has a type of `string`
let personName: string;
personName = "Roger";

// Declare that `isActive` has a type of `boolean`
var isActive: boolean = false;
```

---

# Type Annotations vs Type Inference

### TypeScript is **smart** (enough). It can often **infer** types.

When possible, TypeScript will infer a value's type based on context.

```ts twoslash
const personName = "Roger";
//    ^?

let isActive = false
//  ^?
```

Unless there's ambiguity, it's often preferable to let TypeScript infer your types.

---

# Adding Types to Functions

### Adding types to function parameters is one of the most useful things you can do in TypeScript.

It looks similar to annotating variables.

```ts twoslash {1}
function stringLength(str: string) {
	return str.length;
}
```

You can also annotate the return type:

```ts twoslash {1}
function stringLength(str: string): number {
	return str.length;
}
```

---

# Adding Types to Functions (cont.)

Anonymous and arrow functions have a similar syntax for annotations:

```ts twoslash {2, 7}
// Arrow function
const stringLength = (str: string): number => {
	return str.length;
}

// Anonymous function
const stringLength2 = function(str: string): number {
	return str.length;
}
```

---

# Adding Types to Functions (cont.)

## TypeScript can **infer return types**.

It's common to omit the return type annotation and let TypeScript infer the type.

```ts twoslash
const stringLength = (str: string) => {
//    ^?
	return str.length;
}

const len = stringLength("foobar");
//    ^?
```

---


# Chapter 2: Type Basics

## Now that we know how to annotate variables and functions, let's explore more types.

We'll cover:

- Some “basic” types,
- literal types,
- array types,
- object types,
- union types,
- and intersection types.

---

# Basic Types

TODO: primitives covered, but also null and undefined.

---

# Literal Types

TODO:

---

# Array Types

TODO:

---

# Object Types

TODO:

---

# Union Types

TODO:

---

# Intersection Types

TODO:

---

# Chapter 3: Type Narrowing and Branching

## Remember: TypeScript is **smart** (enough).

TypeScript will infer and "narrow" types based on logical context. This makes your life **safer** and **easier**.

Let's check out some ways it does this, including:

- `typeof` guards,
- truthiness checks,
- equality narrowing,
- `in` narrowing,
- `instanceof` narrowing,
- and Discriminated unions.

[See here](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

---

# `typeof` guards

TODO:

---

# Truthiness checks

TODO:

---

# Equality Narrowing

TODO:

---

# `in` Narrowing

TODO:

---

# `instanceof` narrowing

TODO:

---

# Discriminated Unions

TODO:

---

# Chapter 4: TypeScript No-no's

TODO:

- Type assertions
- Non-null assertions
- any type
