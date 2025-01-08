# Clash Companion

## Description

Clash Companion is a companion app for Overwolf and the Clash game mode of League of Legends. The app provides information about teammates and opponents before the match, helping players to better prepare for their games.

## Purpose

The purpose of Clash Companion is to provide players with detailed information about their teammates and opponents before the match starts. This information can help players make informed decisions about their strategies and improve their chances of winning.

## Features

- View detailed information about teammates and opponents
- Access to player statistics and performance data
- Easy-to-use interface

## Installation

To install Clash Companion, follow these steps:

1. Download and install the Overwolf client from the [Overwolf website](https://www.overwolf.com/).
2. Download the Clash Companion app from the Overwolf Appstore.
3. Launch the Overwolf client and open the Clash Companion app.

## Usage

Once the app is installed, you can use it to view information about your teammates and opponents before the match. The app will provide informations to help you stay informed and make better decisions during the game.

## Project Structure

The structure of the project is organized to separate the different functionalities and components of the application. Here is a detailed explanation of the structure:

### Root of the project
- `.gitattributes`, `.gitignore`: Configuration files for Git.
- `README.md`: Project documentation.

### `native` folder
This folder contains the resources and scripts specific to the native application.

- **css/**: Contains CSS files for the application's style.
  - `desktop.css`, `general.css`, `header.css`, `ingame.css`, `modal.css`: CSS files for different components and views of the application.

- **icons/**, **img/**: Contain the icons and images used in the application.

- **manifest.json**: Configuration file for the application.

- **scripts/**: Contains JavaScript scripts for services and constants.
  - **constants/**: Contains constant files.
    - `games-features.js`: Defines constants like `kGamesFeatures`.
  - **services/**: Contains services used in the application.
    - `hotkeys-service.js`, `running-game-service.js`, `windows-service.js`: Services for managing keyboard shortcuts, running games, and windows.

- **windows/**: Contains the different controllers and views for the application's windows.
  - **background/**: Contains the controller for the background window.
    - `background-controller.js`: Defines the `BackgroundController` class.
  - **desktop/**, **in-game/**, **second/**: Contain the controllers and views for the different windows of the application.
    - `sample-app-view.js`: Defines the `SampleAppView` class.
    - `second-controller.js`: Defines the `SecondController` class.

### `ts` folder
This folder contains the TypeScript code and associated configurations.

- `.gitignore`: Configuration file for Git.
- `overwolf.webpack.js`, `webpack.config.js`: Configuration files for Webpack.
- `package.json`: Configuration file for npm.
- `tsconfig.json`: Configuration file for TypeScript.

- **public/**: Contains public resources like CSS, icons, images, and the manifest.
  - `css/`, `icons/`, `img/`, `manifest.json`: Public resources.

- **src/**: Contains the TypeScript source code of the application.
  - `AppWindow.ts`, `consts.ts`, `background/`, `desktop/`: Files and folders containing the application's source code.

### Conclusion
The structure of the project is well-organized with a clear separation between styles, services, constants, controllers, and views. The `native` and `ts` folders contain the JavaScript and TypeScript code, respectively, with associated configurations and resources.
