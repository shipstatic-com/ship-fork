---
sidebar_position: 1
---

# REST API Layer Overview

The Shipstatic REST API provides a direct, stateless interface for interacting with the Shipstatic platform. It follows standard HTTP conventions, using resource-oriented URLs and conventional verbs.

## Core Principles

- **Resource-oriented URLs**: The API uses predictable, resource-oriented URLs (e.g., `/deployments`, `/aliases`).
- **Standard HTTP Verbs**: The API uses standard HTTP verbs (e.g., `GET`, `POST`, `PUT`, `DELETE`) to perform actions on resources.
- **JSON Responses**: The API returns JSON-formatted responses with consistent error formatting.
- **Stateless**: Each request to the API is self-contained and does not rely on previous requests.
- **Idempotent Operations**: The API uses `PUT` for creating or updating aliases, ensuring that repeated requests have the same effect as a single request.

## API Endpoint

The base URL for the Shipstatic API is `https://api.shipstatic.xyz`.
