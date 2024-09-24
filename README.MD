# Transaction App Frontend

**Transaction App** is a simple Financial tracking tool made with love from Belo Horizonte, Brazil. It is **not** a complete application and it has the objetive to be an instructional repository to learn and teach mobile development with JavaScript technologies, design patterns and atomic design principles.

Related repositories:

- [Transaction App Backend](https://github.com/renattomartins/transactions-app-backend)

### Diagram
TBD

## Technologies

Feel free to explore package.json dependencies and devDependencies to learn more. But in summary we have:

- React Native as core tecnologies
- Jest and Detox(?) for testing
- Atomic Design on structure organization
- And more

## Design patterns covered

- The core objects is represented with services folder segregation.
- Atomic Design is the main point to organize screens and components.
- State is managed by with using of Application Context object.
- Protected Routes pattern are used to manage screens according to the authentication flow.

## Before you start
Before you starting clone this repository, make sure that you've already done the following steps:

1. Install [nvm](https://github.com/nvm-sh/nvm):

   ```bash
   $ brew install nvm
   ```

2. After **nvm** installation, use it to install the proper version of **node.js**:

   ```bash
   $ nvm use
   ```

3. Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

   ```bash
   $ npm install --global yarn
   ```

## Running the app locally

1. Install dependencies:

   ```
   $ yarn install
   $ cd ios/ && pod install
   ```

   If it is your first time with React Native, follow [this steps first](https://reactnative.dev/docs/set-up-your-environment).

2. For iOS, create a `Local.xcconfig` file (you can duplicate `Sample.xcconfig`) and configure your local dev environment varaibles. Remember that you should never commit this file.

3. Execute the project in iOS Simulator:

   ```
   $ yarn run ios:local
   ```

4. For Android, ... TBD.

5. Execute the project in Android Emulator:

   ```
   $ yarn run android
   ```
