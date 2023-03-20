---
theme: gks
codeFontSize: 0.2in
---

# **Implicit vs Explicit Return Types in TypeScript**

::gap

In TypeScript, your functions can have *implicit* or *explicit* return types. Here's an example involving determining a circle's radius given its area.

```ts twoslash
// Implicit return type, TS infers `number` return type
const areaToRadius1 = (A: number) => Math.sqrt(A / Math.PI);
//    ^?

// Explicit return type, you *tell* TS the return type
const areaToRadius2 = (A: number): number => Math.sqrt(A / Math.PI);
//    ^?
```

---

# Implicit Return Types are Convenient

Let's expand our circle example using implicit return types, and let TS guide us.


```ts twoslash
const areaToRadius = (A: number) => Math.sqrt(A / Math.PI);
//    ^?

const radiusToPerim = (r: number) => 2 * Math.PI * r;
//    ^?

const perim1 = radiusToPerim(areaToRadius(20));
//    ^?
```

---

# But it's not all 🌈 and 🦋

It's convenient to let TS infer your return type. But...

### Implicit return types make your function signature dependent on your implementation.

Let's tweak our `areaToRadius` function a bit to return `null` when our area is negative.

```ts twoslash
const areaToRadius = (A: number) => A < 0
//    ^?
	? null
	: Math.sqrt(A / Math.PI);
```

This seems alright...

---

# How does the function signature change cascade?

In our simple example, this function signature change impacts _other_ functions.

```ts
const areaToRadius = (A: number) => Math.sqrt(A / Math.PI);
//    ^?

const radiusToPerim = (r: number) => 2 * Math.PI * r;
//    ^?

const perim1 = radiusToPerim(areaToRadius(20));
//    ^?
```
