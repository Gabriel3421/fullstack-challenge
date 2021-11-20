# Refera - Fullstack Code Challenge

## Description

Welcome to Refera's Fullstack code challenge! The goal of this challenge is to create a web application to manage maintanence orders from Refera, following the **Acceptance criteria**. The frontend of application has only one page and the backend contains a simple REST API service and has a connection with a database. By the end of the challenge, we will be able to create new orders and list them through the web application that comunicates with our backend service to read and store the data in a database.

## Resources

![image](https://user-images.githubusercontent.com/10841710/141149769-d2bef978-7073-4ac7-b0af-6c0c8c7b6fe8.png)

## Acceptance criteria

- Provide clear instructions on how to run the application in development mode
- Provide clear instructions on how the application would run in a production environment
- One web page, following the low fidelity prototype presented on the **Resources**
  - Table with orders data, allowing the user to order the results by each column
  - Button to open modal to create new order
  - Allow row click to open modal to visualize order details
- Modal to input data to create new order
  - Form with appropriate inputs to handle each type of data
  - Allow selection of registered cateories from the database
  - Save button to hit backend service and store the data
- Modal to read only the order details

# Getting Started

### Prerequisites

To use it you will need to have node installed on your machine, as well as yarn, but the commands can also be run using npm.

### Installation

Installing dependencies

```
yarn
```
ou
```
npm -i
```

Running the project in development mode

```
yarn start
```
ou
```
npm run start
```

## How the application would run in a production environment
To use the application in production we can use several ways, the easiest one is using heroku, where we make some configurations in the project and it runs on its own with automatic integration with the github repository for example, another option would be to get a machine in aws for example, build and run the project, but this type of configuration requires more time and knowledge about operating systems, port management and the like.

## Decisions/Implementation Details

* For reasons of ease of implementation and project size, I left the architecture very simple, I'm using a framework with ready-made components to increase the development speed.

## Built with

* [ReactJS](https://reactjs.org/) - Application Platform
* [Antd](https://ant.design/) - Design system

## Authors

* **Gabriel de Souza** - [Gabriel3421](https://github.com/Gabriel3421)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
