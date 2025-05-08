# TypeScript Interfaces vs. Types: What's the Difference? 🤔

If you've worked with TypeScript, you've probably used both `interface` and `type` and noticed they seem... suspiciously similar. Let's break down how they're different in a way that actually makes sense.

---

## 👯 They Look Similar at First Glance

Here's how you'd write the same thing both ways:

```ts
// As an interface
interface User {
  id: number;
  name: string;
}

// As a type
type User = {
  id: number;
  name: string;
};
```

Right now you're probably thinking: **"Okay cool, so they're the same?"**  
Not quite! While they overlap a lot, there are some key differences that'll bite you if you don't know about them.

---

## 🔍 The Big Differences

### 1. How You Extend Them

**Interfaces** use `extends`:

```ts
interface Admin extends User {
  permissions: string[];
}
```

**Types** use the `&` (intersection) operator:

```ts
type Admin = User & {
  permissions: string[];
};
```

---

### 2. Interfaces Play Nice Together 🤝

Here's a magic trick interfaces can do — declaration merging:

```ts
interface Cat {
  purr(): void;
}

interface Cat {
  meow(): void;
}

const fluffy: Cat = {
  purr() { console.log("purr"); },
  meow() { console.log("meow"); }
};
```

Try that with types and TypeScript will **yell at you**:

```ts
type Dog = { bark(): void };
type Dog = { wagTail(): void }; // ❌ Error: Duplicate identifier 'Dog'
```

---

### 3. Types Are More Flexible 🧘

Types can handle patterns that interfaces can't:

- **Union types**:

  ```ts
  type Pet = Dog | Cat;
  ```

- **Tuples**:

  ```ts
  type Point = [number, number];
  ```

- **Primitives**:

  ```ts
  type ID = string | number;
  ```

---

### 4. Performance Stuff ⚡

Interfaces are a bit faster for the TypeScript compiler, especially in large codebases.  
But unless you're working on a massive project, you won't notice the difference.

---

## 🤷 So... Which Should I Use?

- **Start with `interface`** – It's cleaner for object shapes and works better with classes.

- Use `type` when you need:
  - Union types (`type Pet = Dog | Cat`)
  - Tuple types (`type Coordinate = [number, number]`)
  - Mapped/conditional types (fancy transformations)

✅ **Be consistent!** If your project uses `interface` everywhere, don’t switch to `type` randomly.

---

## 💡 The Bottom Line

**Interfaces and types are like siblings** – similar DNA but different personalities.

- Use **interfaces** for object shape definitions and OOP compatibility.
- Use **types** for unions, primitives, tuples, and advanced type operations.

Don't stress too much — you can easily refactor between them later.  
**Happy typing! ✨**