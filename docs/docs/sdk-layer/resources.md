---
sidebar_position: 3
---

# SDK Resources

The Shipstatic SDK is organized into resources, each of which provides a set of methods for interacting with a specific type of Shipstatic object.

## `ship.deployments`

The `deployments` resource allows you to manage your deployments.

- `create(input: DeployInput, options?: DeploymentOptions): Promise<Deployment>`: Creates a new deployment.
- `list(): Promise<DeploymentListResponse>`: Lists all of your deployments.
- `get(id: string): Promise<Deployment>`: Retrieves the details of a specific deployment.
- `remove(id: string): Promise<void>`: Removes a deployment.

## `ship.aliases`

The `aliases` resource allows you to manage your aliases.

- `set(aliasName: string, deploymentName: string): Promise<Alias>`: Assigns an alias to a deployment.
- `get(aliasName: string): Promise<Alias>`: Retrieves the details of a specific alias.
- `list(): Promise<AliasListResponse>`: Lists all of your aliases.
- `remove(aliasName: string): Promise<void>`: Removes an alias.

## `ship.account`

The `account` resource allows you to manage your account.

- `get(): Promise<Account>`: Retrieves your account details.

## `ship.keys`

The `keys` resource allows you to manage your API keys.

- `create(): Promise<{ apiKey: string }>`: Creates a new API key.
