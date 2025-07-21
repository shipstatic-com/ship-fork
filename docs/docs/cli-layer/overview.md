---
sidebar_position: 1
---

# CLI Layer Overview

The Shipstatic CLI is designed with the Unix philosophy in mind, emphasizing discoverability, consistency, and safety. It provides a simple and intuitive interface for interacting with the Shipstatic platform from your terminal.

## Core Principles

- **Discoverability**: Running `ship` with no arguments displays a comprehensive help message with all available commands and examples.
- **Consistency**: Commands follow a `resource action` pattern (e.g., `ship deployments list`), making them predictable and easy to learn.
- **Speed**: The CLI includes shortcuts for common operations, such as `ship ./path` for quick deployments.
- **Safety**: Destructive actions, like removing a deployment, require an explicit resource ID to prevent accidental data loss.
- **Familiarity**: The CLI's design is inspired by popular command-line tools like `kubectl`, `docker`, and `gcloud`, so it should feel familiar to most developers.

## Installation

The Shipstatic CLI is bundled with the `@shipstatic/ship` NPM package. To install it, run:

```bash
npm install -g @shipstatic/ship
```

## Authentication

The CLI uses API keys for authentication. You can provide your API key using the `--apiKey` flag or by setting the `SHIP_API_KEY` environment variable.

```bash
ship --apiKey <your-api-key> deployments list
```

or

```bash
export SHIP_API_KEY=<your-api-key>
ship deployments list
```
