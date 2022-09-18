# Type Expansion

When building complex types, end results can be a bit hard to read during development.

Here's an `Expand` utility type to **clean up** the display of your resulting types.

```ts twoslash
type Expand<T> = T extends infer O
                 ? { [K in keyof O]: O[K] }
                 : never;
```

### Read on for some examples 👉

---

# A basic example

An elementary example of type-expansion is expanding an intersection `&` type.

```ts twoslash
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// ---cut---
// 👇 Not terrible
type Person = { name: string; } & { age: number };
//   ^?

// 👇 This is nicer
type ExpandedPerson = Expand<Person>;
//   ^?
```

---

# An ugly example

Suppose we've got an ugly, but useful, utility type `PersonDetails`.

The type "flattens" out the `age` field, but the resulting type "looks" ugly.

```ts twoslash
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// ---cut---

type PersonDetails<T> = T extends
	(infer Base & { age: { value: infer Age } })
		? Omit<Base, 'age'> & { age: Age }
		: T;

const person = { name: "Roger", age: { value: 21 } };
// 👇 This is ugly
type Details = PersonDetails<typeof person>;
//   ^?
```

---

# An ugly example (cont.)

The `Expand` utility *really* cleans things up here.

```ts twoslash
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// ---cut---

type PersonDetails<T> = T extends
	(infer Base & { age: { value: infer Age } })
		? Omit<Base, 'age'> & { age: Age }
		: T;

const person = { name: "Roger", age: { value: 21 } };
// 👇 This is pretty
type ExpandedDetails = Expand<PersonDetails<typeof person>>;
//   ^?
```
