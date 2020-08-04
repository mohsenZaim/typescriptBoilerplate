# React-Typescript boilerplate

This is a base architecture app with React, Typescript, SCSS and Webpack, fully updated with latest dependacies.

## Tech stack

This base application contain:

* React 16+
* React Context + Reducer hooks
* Typescript
* Webpack 4+
* Code splitting and Routing Baesd on webpack 4 and React Router 5
* Mock Services with API simulations
* SASS styling
* Multiple build configuration for webpack
* Universal http loader based on any number of API calls.
* Web manifest for installing the app as PWA
* Service workers for PWA
* Supports .env file for env variables
* Custom Swagger Typescript templates
* Nswag Typescript templates

## Requirements

This application requires:

* `node 8.10.0` or above
* `npm 5.7.1` or above
* To compile SCSS files, you need to `install python (2.7,3 or above)`

## Installation

Type `npm install` in your root directory to install the dependacies.

For `Visual Studio Code` users, please install official [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) plugin which has been published by `egamma` on your IDE, to enable `ts-linting` as by default you need to pass TSLint to be able to compile your code for production.

## Development

This project uses proper `ts-linting` and our lints are based on `tslint:latest` and `tslint-react` , with our own changes in lint rules for a more consistant (less annoying) coding.
After successful npm installation, to run the app in development use: `npm start`
Application will run on `http://localhost:3000` by default.

## Staging Build

If you are looking to build the app which can be demo as stand alone (means it will contain mock data)
then type: `npm run staging`

## Production Build

For production you need to run: `npm run build`

## Testing via Jest

You can run the tests via: `npm run test`

## Swagger sample template

You can use `npm run swagger` to generate a set of sample APIs using my custom template inside api/generated folder,
you can find my custom typescript/axios based swagger template at root direcory insite template folder.

## Nswag sample template

You can use `npm run nswag` to generate a set of sample APIs using my custom template inside api/generated folder,
you can find my custom typescript/axios based swagger template at root direcory insite template folder.
