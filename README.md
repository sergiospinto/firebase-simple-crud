# Simple CRUD Web App using Firebase

## What is this?

This is a simple CRUD (Create, Read, Update, Delete) application that utilizes Google's [Firebase](https://firebase.google.com/). It is built using HTML, Javascript, and CSS (with the help of [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) for styling)

![WebApp Sample](/docs/sample.png)

## Why did I build this?

Because simple is good, and great things are not necessarily complex.

We wanted to provide a simple and easy-to-use starting point for anyone looking to build their first cloud-based web application. This app is meant to be a kickstarter for developers who want to get started with web development and don't want to get bogged down by the complexity of advanced technologies.

## How do I use this?

### Setting up the app
1. Create a [Firebase](https://firebase.google.com/) account.
2. Install the [Firebase CLI](https://firebase.google.com/docs/cli).
3. Log in to Firebase by running the following command in your terminal:
```
firebase login
```
6. In your [Firebase Console](https://console.firebase.google.com/), create a new project.
7. In this project directory, open `.firebaserc ` and add the project ID you just created.

### Running the app locally
1. Run the project locally by running the following command in your terminal:
```
firebase emulators:start
```

### Deploying the app
1. Deploy the project by running the following command in your terminal:
```
firebase deploy
```

With these instructions, you should now be able to set up, run, and deploy this simple CRUD web app using Firebase.
