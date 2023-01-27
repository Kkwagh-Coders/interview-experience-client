# UI Project Documentation

- Naming convention: Camel Case
- Component naming convention: Pascal Case
- Constant variable naming convention: Screaming Snake Case
- Project uses AirBnb Eslint config for the project with custom prettier config
- Jest will be used to writing tests for the project

## Files

- .gitignore: Contains the files and folders ignored by git
- .eslintrc.json: Contains eslint configs
- .prettierrc: Contains prettier configs
- COMMIT_TEMPLATE: This file defines the template used for commit
- DOCUMENTATION: Contains the documentation and code guide
- tsconfig.json: Contains typescript configs
  
## Folder Structure

### assets

- Contains all the assets used for the project
- For every type of asset a new folder is to be created
- eg: image, json, audio, video, etc

### components

- Contains all the components used for the project
- Structure: Contains Component folder with files Component.tsx and Component.module.css

### hooks

- All the hooks used for the project are defined in this folder
- File name should start with useHookName, eg: useProject

### pages

- Contains all the Pages used for the project
- Structure: Contains PageName folder with files PageName.tsx and PageName.module.css

### redux

- Used for creating redux

### router

- Contains the main logic for the react router dom

### services

- All the External API calls are defined in this folder
- serverConfig.ts stores all the configuration of external APIS
- fakeRequest.ts is a function used to simulate a request with some delay

### types

- Used to define all the types

### utils

- Used to define utility functions
- eg: isEmailValid() is considered a utility function function
