## LiveAsset Tracker Frontend, imrpoved version

This is a new version of the LiveAsset Tracker Frontend. It is an Angular 19.1.7 application that uses the Angular Material library for the UI. The application is designed to be responsive and fluid, with a custom header component that is used to display the application's title and navigation links and TAILOR-CSS for styling.

## Environment Setup

## Create a Conda environment with Node.js
```conda create -n ang-dev-latest conda-forge nodejs=18.18.0```
This installs Node.js and npm inside your Conda environment, conda has its own list of nodejs versions. The recommended version is 18.18.0.

## Activate the environment
```conda activate ang-dev-latest```

## Install Angular CLI
DO NOT INSTALL Angular CLI, it is already present in the repo. if byb mistake, run the code below to install it:

## Run the following command to install the correct version of Angular CLI:
```npm install -g @angular/cli@19.1.7```

## Install dependencies

Run the following command to install the dependencies:

```npm install -g npm@9```

## Running the application

Run the following command to start the application:
``npm run start``

 ## custom.d.ts module

Is a TypeScript declaration file that tells TypeScript how to handle image imports in the project. It is used to import images as strings instead of as objects. This is useful when working with images in Angular, as it allows you to use the image URL directly in the template without having to convert it to a base64 string. 