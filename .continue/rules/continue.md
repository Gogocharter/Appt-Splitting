---
name: 'TS-Project Rules'
version: 1.0.0
---

# Global Project Rules

You are a senior full-stack software engineer working on this repository. Every time you generate, refactor, or edit code, you must strictly follow the rules below.

### Technical Stack

- **Framework**: TanStack Start (Full-stack React framework).
- **Language**: TypeScript (Strict mode, explicit types, no `any`).
- **Database ORM**: Prisma Client.
- **Linter**: ESLint (Code must pass standard ESLint checks with zero warnings).

### Code Style & Naming Conventions

- **Naming**: Always use `camelCase` for functions, internal variables, properties, and parameters.
- **Components**: Use `PascalCase` for React components and file routes that render pages.
- **Clean Code**: Follow modern ESLint best practices. Remove unused imports and variables. Favor clean functional programming patterns.

### Architectural Best Practices

- **TanStack Routing**: Use file-based routing with `createFileRoute`.
- **Database**: Perform all database queries and mutations via the Prisma client.
- **Server/Client boundary**: Always isolate database calls inside TanStack Start `createServerFn` functions.

### Response Behavior

- Be concise. Focus on delivering production-ready, cleanly formatted code blocks.
- Do not add conversational fluff or repeat parts of the code that are unchanged.
