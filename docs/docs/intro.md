---
sidebar_position: 1
---

# Getting Started

Welcome to Shipstatic! This guide will walk you through the process of installing the Shipstatic CLI, obtaining an API key, and deploying your first project.

## 1. Install the CLI

The Shipstatic CLI is the easiest way to get started. You can install it globally using npm:

```bash
npm install -g @shipstatic/ship
```

To verify that the CLI was installed correctly, run the `ship` command:

```bash
ship --version
```

## 2. Log in and Get an API Key

To deploy projects, you'll need an API key.

1.  **Log in to the Shipstatic web interface.** You can do this by visiting the [Shipstatic website](https://shipstatic.xyz) and logging in with your Google account.
2.  **Generate an API key.** Once you're logged in, navigate to the "API Keys" section of your account settings and generate a new API key.

## 3. Deploy Your First Project

Now you're ready to deploy your first project!

1.  **Create a simple `index.html` file:**

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>My First Shipstatic Deployment</title>
    </head>
    <body>
      <h1>Hello, Shipstatic!</h1>
    </body>
    </html>
    ```

2.  **Deploy the file using the Shipstatic CLI:**

    ```bash
    ship ./index.html --apiKey <your-api-key>
    ```

    The CLI will upload your file and provide you with a unique deployment URL.

## What's Next?

Now that you've deployed your first project, you can explore the other features of the Shipstatic platform:

-   **Learn about the different layers of the platform:**
    -   [CLI Layer](./cli-layer/overview.md)
    -   [SDK Layer](./sdk-layer/overview.md)
    -   [REST API Layer](./api-layer/overview.md)
-   **Set up a custom domain for your project.**
-   **Explore the examples in the Shipstatic repository.**
