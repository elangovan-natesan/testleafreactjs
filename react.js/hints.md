# Intro

React is a JS library used to build fast, interactive UI for web applications, focusing on `component-based architecture`.

`JSX`(Javascript XML) is a syntax extension that allows you to write HTML-like code in Javascript, which is then compiled into standard javascript(since browser can only understand HTML & JS).

`Babel` is a Transpiler tool which is used to convert jsx file into js file, so that browser can understand.

NOTE:

1. Next.js supports server side rendering
2. React version <= 18 doesnt supports server side rendering & supports client side rendering & React version > 18 supports server side rendering & client side rendering.
3. Changed the react, react-dom version to 17.0.2 in package.json file and it will automatically get updated in the package-lock.json file.

Note: CRA does not allow changing entry points directly unless you eject the app (which is not recommended for beginners), but in vite we can change the entry point in vite.config.js file[vite is a modern frontend build tool- we need to install it explicitly using commands 1.npm install vite@latest(installs vite build tool) 2.npm create vite@latest(installs react app)].

Note: Always a function (or) component can return only one component (or) element.

Note: React supports MVC & Component Based Architecture.
Note: Components are Reusable

# Functional Component

`Functional component` in react are Js functions that returns JSX and are used to build UI components.

# Props

`Props` allows you to pass data from one component to another, enabling dynamic content in your application.

NOTE: React v16.8+ (Feb 2019) -Introduced hooks in which You could use state, side effects, and more directly inside functional components

NOTE: Props allows to pass data only from parent component to child component.
NOTE: To use JS variable inside JSX then we should enclose it inside curly brackets.

<!-- React-Part-1 12-jul-2025 -->

# Hooks

1. useState
   state hook - used to manage the state
2. useEffect
   effect hook
   - component life
   - fetch data from services - service(express.js) will get data from backend
