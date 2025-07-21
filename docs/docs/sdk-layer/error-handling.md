---
sidebar_position: 4
---

# Error Handling

The Shipstatic SDK uses a unified error system with a single `ShipError` class. This makes it easy to handle errors in a consistent way.

## The `ShipError` Class

All errors thrown by the SDK are instances of the `ShipError` class. This class provides a number of useful properties and methods for handling errors.

### Error Types

The `ShipError` class includes a number of factory methods for creating specific types of errors:

- `ShipError.validation(message, details)`: For validation errors (HTTP 400).
- `ShipError.notFound(resource, id)`: For when a resource is not found (HTTP 404).
- `ShipError.rateLimit(message)`: For when the rate limit is exceeded (HTTP 429).
- `ShipError.authentication(message)`: For authentication errors (HTTP 401).
- `ShipError.business(message, status)`: For business logic errors (HTTP 400).
- `ShipError.network(message, cause)`: For network or connection errors.
- `ShipError.cancelled(message)`: For when an operation is cancelled.
- `ShipError.file(message, filePath)`: For file operation errors.
- `ShipError.config(message)`: For configuration errors.

### Type Checking

You can use the `is*Error()` methods to check the type of an error:

- `error.isClientError()`: For client-side errors.
- `error.isNetworkError()`: For network or connection issues.
- `error.isAuthError()`: For authentication problems.
- `error.isValidationError()`: For input validation failures.
- `error.isFileError()`: For file operation errors.
- `error.isConfigError()`: For configuration problems.

## Example

Here's an example of how to handle errors when creating a deployment:

```javascript
import { Ship, ShipError } from '@shipstatic/ship';

const ship = new Ship({ apiKey: 'your-api-key' });

async function createDeployment() {
  try {
    const deployment = await ship.deployments.create('./my-app');
    console.log('Deployment created:', deployment);
  } catch (error) {
    if (error instanceof ShipError) {
      if (error.isValidationError()) {
        console.error('Validation error:', error.message);
      } else if (error.isAuthError()) {
        console.error('Authentication error:', error.message);
      } else {
        console.error('An unexpected error occurred:', error.message);
      }
    } else {
      console.error('An unknown error occurred:', error);
    }
  }
}

createDeployment();
```
