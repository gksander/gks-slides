# Hello

Hello, complexity is **$O(n^2)$**

$$
f(x) = x^2 + c
$$

![typescript](https://www.freepnglogos.com/uploads/cat-png/cat-sweety-white-brown-11.png?width=2.5in)

```ts twoslash
const myConstant = 13;
// ---cut---
const f = (x: number) => x ** 2 + myConstant;
//    ^?
```

---

# Why TypeScript?

```js
const x = 16 / "hey";
```

and then `theCode` went to the market.


```ts twoslash
const x = 13;
//    ^?
```

---

# Another thing

Here's equiation

$$
x = \frac{\sqrt{b^2 - 4ac}}{2a}
$$

Here's code

```ts twoslash
// @errors: 2363
const a = 1,
  b = 2,
  c = 3;
const x = Math.sqrt(b ** 2 - 4 * a * c) / (2 * a);
//    ^?

const y = x / "hello";
```
