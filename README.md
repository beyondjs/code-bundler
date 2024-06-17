# BeyondJS Code Bundle

## Overview

The BeyondJS Code Bundle is a versatile and powerful bundle designed to handle multiple processors, making it ideal for
projects that require the integration of different technologies. This bundle supports a wide range of processors,
allowing you to encapsulate various technologies within your application.

## Features

-   **Multi-Processor Support**: Seamlessly integrates TypeScript, JavaScript, JSX, Sass, Less, SCSS, Svelte, Vue, and
    MDX.
-   **Independent Style Bundles**: CSS processors like Sass and Less generate independent bundles of styles
    (`bundle-name.css`).
-   **Template Support**: Allows for templating within the bundle to enhance modularity and reusability.

## Configuration

The configuration for the Code Bundle is defined in your module's `module.json` file. Below is an example configuration:

```json
{
	"name": "my-code-bundle",
	"platforms": ["web"],
	"code": {
		"ts": {
			"path": "ts",
			"files": "*"
		},
		"scss": {
			"path": "scss",
			"files": "*"
		}
	}
}
```

### Key Properties

-   **`bundles`**: Specifies the list of bundles in the module.
-   **`name`**: The name of the bundle.
-   **`type`**: The type of bundle, which should be set to `code` for this configuration.
-   **`platforms`**: Specifies the platforms the bundle supports.
-   **`code`**: Contains configuration details specific to the code bundle.
    -   **`processors`**: Lists the processors supported by the bundle.

## Processors

The Code Bundle supports the following processors, each handling different file types and technologies:

-   **TypeScript (`ts`)**: Compiles TypeScript files.
-   **JavaScript (`js`)**: Handles standard JavaScript files.
-   **JSX (`jsx`)**: Processes JSX files, typically used with React.
-   **Less (`less`)**: Compiles Less files into CSS.
-   **SCSS (`scss`)**: Compiles SCSS files into CSS.
-   **Svelte (`svelte`)**: Compiles Svelte components.
-   **Vue (`vue`)**: Compiles Vue components.
-   **MDX (`mdx`)**: Processes MDX files, which allow you to write JSX in Markdown.

### Independent Style Bundles

When using CSS processors like Sass, Less, or SCSS, the Code Bundle generates an independent style bundle named
`bundle-name.css`. This approach ensures that your styles are modular and can be independently managed, improving the
maintainability and scalability of your application.

## Example

Here is a basic example of how to set up a module with the Code Bundle in BeyondJS:

1.  **Create a `module.json` file** in your module directory with the following content:

        ```json
        {
        "name": "my-code-bundle",
        "platforms": ["web"],
        "code": {
        	"ts": {
        		"path": "ts",
        		"files": "*"
        	},
        	"scss": {
        		"path": "scss",
        		"files": "*"
        	}
        }

    }```

2.  **Add your source files** to the appropriate directories for each processor.

3.  **Build your project** to see the generated JavaScript and CSS bundles.
