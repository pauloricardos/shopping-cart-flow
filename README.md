# Challenge

We want to create a new ecommerce website. At the beginning of the ecommerce website, we need these features:
- A Header containing total products in cart;
- A list of products containing name, price, quantity and subtotal;
- Buttons that once clicked, add or remove product from the cart and recalculate the selected product subtotal based on price and quantity, also recalculate the total products present on Header.

## Steps

We have three ways to solve this challenge:

### Conventional way: State and Props
Easy but not very efficient. When project start scaling, more complex to understand where the data came from, refactoring and props drilling.

### Recommended way: Context API + useContext
Easy to understand where the data came from, solve the props drilling bad pattern, easy to refactor and scales very well.


### Not recommended way: Context API + useContext + useReducer
Apply the Flux Pattern, used by Redux and MobX libraries, using only React. Not recommended because forces the encapsulated components to rerender when does not need.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

