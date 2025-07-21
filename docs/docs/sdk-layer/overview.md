---
sidebar_position: 1
---

# SDK Layer Overview

The Shipstatic SDK provides a modern, promise-based JavaScript interface for interacting with the Shipstatic platform. It's designed to be intuitive and easy to use, with a resource-based API that mirrors the platform's core concepts.

## Core Features

- **Resource-based API**: Methods are organized under resource namespaces (e.g., `ship.deployments`, `ship.aliases`), making the SDK's structure clear and predictable.
- **Promise-based**: The SDK is fully promise-based, allowing you to use `async/await` for clean and readable asynchronous code.
- **Type-safe**: The SDK is written in TypeScript and includes type definitions, providing a great developer experience with autocompletion and type checking.
- **Universal**: The SDK works in both Node.js and browser environments, with optimized bundle sizes for each.
- **Consistent Naming**: All methods and properties use camelCase, following JavaScript conventions.

## Installation

To install the Shipstatic SDK, run:

```bash
npm install @shipstatic/ship
```
