---
sidebar_position: 2
---

# Getting Started with the SDK

To start using the Shipstatic SDK, you'll need to instantiate the `Ship` class with your API key.

```javascript
import { Ship } from '@shipstatic/ship';

const ship = new Ship({ apiKey: 'your-api-key' });
```

Once you have a `Ship` instance, you can use its resource properties to interact with the Shipstatic API.

## Creating a Deployment

To create a new deployment, use the `ship.deployments.create()` method. This method accepts a path to a directory or a list of files.

```javascript
import { Ship } from '@shipstatic/ship';

const ship = new Ship({ apiKey: 'your-api-key' });

async function createDeployment() {
  try {
    const deployment = await ship.deployments.create('./my-app');
    console.log('Deployment created:', deployment);
  } catch (error) {
    console.error('Error creating deployment:', error);
  }
}

createDeployment();
```

You can also use the `ship.deploy()` shortcut for creating a deployment.

```javascript
const deployment = await ship.deploy('./my-app');
```

## Managing Aliases

You can manage your aliases using the `ship.aliases` resource.

### Setting an Alias

To assign an alias to a deployment, use the `ship.aliases.set()` method.

```javascript
const alias = await ship.aliases.set('my-app', 'deployment-id');
```

### Listing Aliases

To list all of your aliases, use the `ship.aliases.list()` method.

```javascript
const aliases = await ship.aliases.list();
```
