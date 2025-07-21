---
sidebar_position: 2
---

# CLI Commands

The Shipstatic CLI provides a set of commands for managing your deployments, aliases, and account.

## Global Options

- `-u, --api <URL>`: Specifies the API URL.
- `-k, --apiKey <KEY>`: Specifies the API key.
- `--json`: Outputs the command's result in JSON format.

## `ship ping`

Checks the connectivity to the Shipstatic API.

```bash
ship ping
```

## `ship deployments`

Manages your deployments.

### `ship deployments list`

Lists all of your deployments.

```bash
ship deployments list
```

### `ship deployments create <path>`

Creates a new deployment from the specified path.

```bash
ship deployments create ./my-app
```

You can also use the shortcut `ship ./my-app`.

### `ship deployments get <id>`

Retrieves the details of a specific deployment.

```bash
ship deployments get <deployment-id>
```

### `ship deployments remove <id>`

Removes a deployment.

```bash
ship deployments remove <deployment-id>
```

## `ship aliases`

Manages your aliases.

### `ship aliases list`

Lists all of your aliases.

```bash
ship aliases list
```

### `ship aliases get <name>`

Retrieves the details of a specific alias.

```bash
ship aliases get <alias-name>
```

### `ship aliases set <name> <deployment>`

Assigns an alias to a deployment.

```bash
ship aliases set my-app <deployment-id>
```

### `ship aliases remove <name>`

Removes an alias.

```bash
ship aliases remove my-app
```

## `ship account`

Manages your account.

### `ship account get`

Retrieves your account details.

```bash
ship account get
```
