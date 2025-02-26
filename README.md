# Penguin

A component library for mobile development.

## 2. Development

### Local Setup

To install dependencies, it is recommended to use:

```bash
yarn install --frozen-lockfile
```

### How to Run the Project

To run the project locally, use the following commands:

- `yarn start`
- `yarn android` or `yarn ios`

### Debugging

To use React Native Debugger, you need to apply a patch to the StyleSheet in React Native:

```bash
diff --git a/node_modules/react-native/Libraries/StyleSheet/StyleSheet.js b/node_modules/react-native/Libraries/StyleSheet/StyleSheet.js
index 785fbfe..1d3b93c 100644
--- a/node_modules/react-native/Libraries/StyleSheet/StyleSheet.js
+++ b/node_modules/react-native/Libraries/StyleSheet/StyleSheet.js
@@ -360,13 +360,6 @@ module.exports = {
     // TODO: This should return S as the return type. But first,
     // we need to codemod all the callsites that are typing this
     // return value as a number (even though it was opaque).
-    if (__DEV__) {
-      for (const key in obj) {
-        if (obj[key]) {
-          Object.freeze(obj[key]);
-        }
-      }
-    }
     return obj;
   },
 };
```

## Code Style

1. Constants: `CAPS_SNAKE_CASE`
2. Functions: `camelCase`
3. Classes: `PascalCase`
4. Enum: `PascalCaseEnum.camelCase`
5. Types: `PascalCaseType`
6. Interfaces: `PascalCase`
7. Variables inside functions: `camelCase`
8. File Naming:
   - If a file contains a `default export Class`, use `PascalCase`
   - In all other cases (functions, constants, etc.), use `camelCase`

## Build Process for Release

Run the script located in `scripts/publish`

## 3. Tests

To run tests, use the command:

```bash
yarn run test
```

## 4. Knowledge Base

**A few simple rules for the README file:**

1. The main structure of the README file is immutable.
2. Technical writers ensure structure and readability.
3. If you feel that your team lacks certain information, write in the `#docs` channel.
4. Use a new heading for each new topic. The maximum heading nesting level is 3.
5. If something needs to be emphasized, use **bold** for "important" and "note."
