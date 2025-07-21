---
sidebar_position: 3
---

# API Endpoints

The Shipstatic REST API provides a set of endpoints for managing your deployments, aliases, and account.

## `/ping`

- **Method**: `GET`
- **Description**: Checks the connectivity to the API.
- **Response**: `200 OK` with a JSON body of `{ "ok": true }`.

## `/deployments`

- **Method**: `GET`
- **Description**: Lists all of your deployments.
- **Response**: `200 OK` with a JSON body containing a list of your deployments.

- **Method**: `POST`
- **Description**: Creates a new deployment.
- **Request Body**: `multipart/form-data` containing the files to deploy.
- **Response**: `201 Created` with a JSON body containing the details of the new deployment.

## `/deployments/{id}`

- **Method**: `GET`
- **Description**: Retrieves the details of a specific deployment.
- **Response**: `200 OK` with a JSON body containing the deployment's details.

- **Method**: `DELETE`
- **Description**: Removes a deployment.
- **Response**: `204 No Content`.

## `/aliases`

- **Method**: `GET`
- **Description**: Lists all of your aliases.
- **Response**: `200 OK` with a JSON body containing a list of your aliases.

## `/aliases/{name}`

- **Method**: `GET`
- **Description**: Retrieves the details of a specific alias.
- **Response**: `200 OK` with a JSON body containing the alias's details.

- **Method**: `PUT`
- **Description**: Assigns an alias to a deployment.
- **Request Body**: A JSON object with a `deployment` property, e.g., `{"deployment": "deployment-id"}`.
- **Response**: `200 OK` with a JSON body containing the details of the updated alias.

- **Method**: `DELETE`
- **Description**: Removes an alias.
- **Response**: `204 No Content`.

## `/account`

- **Method**: `GET`
- **Description**: Retrieves your account details.
- **Response**: `200 OK` with a JSON body containing your account details.
