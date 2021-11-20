# Refera - Fullstack Code Challenge

## Description

Welcome to Refera's Fullstack code challenge! The goal of this challenge is to create a web application to manage maintanence orders from Refera, following the **Acceptance criteria**. The frontend of application has only one page and the backend contains a simple REST API service and has a connection with a database. By the end of the challenge, we will be able to create new orders and list them through the web application that comunicates with our backend service to read and store the data in a database.

## Acceptance criteria

- Provide clear instructions on how to run the application in development mode
- Provide clear instructions on how the application would run in a production environment
- Describe how you would implement an authentication layer for the web application (don't need to implement)
- RESTful API allowing CRUD and list operations on the orders
  - Endpoint to create/retrieve/update/delete order
  - Endpoint to list order
- RESTful API allowing CRUD operations on the categories
  - Endpoint to create/retrieve/update/delete category
  - Endpoint to list categories
- Database to store data from the following resources
  - Order
  - Category
- Describe how you would structure the database to account for 
  - Real estate agency registration data
  - Company registration data
  - Contact registration data
  - Describe what needs to be changed on the API you implemeted

# Getting Started

### Prerequisites

To use it you will need to have node installed on your machine, as well as yarn, but the commands can also be run using npm. Also the use of a machine having Linux and Node version 14.17.5 as the base operating system.

### Installation

* Installing dependencies

```
yarn
```
ou
```
npm -i
```

* Running the project in development mode

First, you must have a database created in your little box, after that create a file called .env in the root of the project and put the access credentials to the database inside it following the model of the .env.example file, after this step run the following command 
```npx sequelize-cli db:migrate```, to create the tables in the database, the next step is optional to include some categories without needing to create them, run the following command ```npx sequelize-cli db:seed:all```, after this steps run the following command.

```
yarn dev
```
ou
```
npm run dev
```

## How the application would run in a production environment
To use the application in production we can use several ways, the easiest one is using heroku, where we make some configurations in the project and it runs on its own with automatic integration with the github repository for example, another option would be to get a machine in aws for example, install all the requirements to run and run the project, but this type of configuration requires more time and knowledge about operating systems, port management and the like.

## How to implement an authentication layer for the web application
As an authentication strategy we can use JWT, as I'm using express, it would be simple to add authentication to the routes, including only a "middleware" between the route and the controller authenticating this endpoint.

## Describe how you would structure the database to account for:
* Real estate agency registration data
* Company registration data
* Contact registration data
* Describe what needs to be changed on the API you implemeted

For each point above, a table would be created in the database to store its attributes, through migrations thus updating its relationship with existing tables, the next step would be the creation of models for each entity and the inclusion of new controllers and relationships .

## Decisions/Implementation Details

* For reasons of ease of implementation and the size of the project, I left the architecture very simple, with controllers taking all the responsibility, but the ideal would be to create services and repositories to better share the responsibility, reducing coupling and the like.

## Built with

* [NodeJS](https://nodejs.org/en/docs/) - Application Platform

## Authors

* **Gabriel de Souza** - [Gabriel3421](https://github.com/Gabriel3421)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
