---
sidebar_position: 5
---

# SDK Types

The Shipstatic SDK is written in TypeScript and provides a number of type definitions to improve the developer experience.

## `DeployInput`

This type represents the possible inputs for a deployment.

-   In a **Node.js environment**, this can be an array of strings, where each string is a path to a file or directory.
-   In a **browser environment**, this can be a `FileList`, an array of `File` objects, or an `HTMLInputElement`.

## `DeploymentOptions`

This interface represents the options that can be passed to the `ship.deployments.create()` method.

-   `apiUrl?: string`: The API URL to use for this specific deploy.
-   `signal?: AbortSignal`: An `AbortSignal` to allow cancellation of the deploy operation.
-   `subdomain?: string`: An optional subdomain to suggest for the deployment.
-   `onCancel?: () => void`: A callback that is invoked if the deploy is cancelled.
-   `maxConcurrency?: number`: The maximum number of concurrent operations.
-   `timeout?: number`: The timeout in milliseconds for the deploy request.
-   `apiKey?: string`: The API key to use for this specific deploy.
-   `stripCommonPrefix?: boolean`: Whether to strip the common prefix from file paths.
-   `onProgress?: (progress: number) => void`: A callback for the overall deploy progress (0-100).
-   `onProgressStats?: (progressStats: ProgressStats) => void`: A callback for detailed progress statistics.

## `ProgressStats`

This interface represents the detailed statistics about the progress of a deploy operation.

-   `loaded: number`: The number of bytes loaded so far.
-   `total: number`: The total number of bytes to be loaded.
-   `progress: number`: The progress as a fraction (loaded/total).
-   `file?: string`: The identifier for the file this progress pertains to.

## `ShipClientOptions`

This interface represents the options for configuring a `Ship` instance.

-   `apiUrl?: string`: The default API URL for the client instance.
--   `apiKey?: string`: The default API key for the client instance.
-   `onProgress?: (progress: number) => void`: The default callback for overall deploy progress.
-   `onProgressStats?: (progressStats: ProgressStats) => void`: The default callback for detailed progress statistics.
-   `maxConcurrentDeploys?: number`: The default for maximum concurrent deploys.
-   `timeout?: number`: The default timeout in milliseconds for API requests.

## `StaticFile`

This interface represents a file that has been processed and is ready for deploy.

-   `content: File | Buffer | Blob`: The content of the file.
-   `path: string`: The desired path for the file on the server.
-   `filePath?: string`: The original absolute file system path.
-   `md5?: string`: The MD5 hash of the file's content.
-   `size: number`: The size of the file in bytes.
