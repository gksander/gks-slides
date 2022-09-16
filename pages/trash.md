# `code` is cool

Suppose $x \in \R$ and

1. One `one`
2. Two `two`

* yeah
* wassup

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
