# ts-react-base-template

A base template for TypeScript React, with babel and webpack configured for immediate use

# Rundown of software used
## Dependencies
### React & React-Dom
The core dependencies to work with React

### @types/react & @types/react-dom
The objects that TypeScript uses to type-check React elements

## DevDependencies
### The four @babel/ items and babel-loader
Babel turns our code into ES5 javaScript. This is used briefly in our `.babelrc` file, and mostly in our `webpack.config.js` file.

### Prettier
Prettier makes our code look great. Run with the `npm run pretty` command. Settings can be found in the `prettier.config.js` and `.prettierignore` files.

### Webpack & Webpack-CLI
Webpack turns our React TypeScript code into a readable bundle for browsers to use (with the help of Babel).