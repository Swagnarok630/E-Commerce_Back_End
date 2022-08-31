# E-Commerce_Back_End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Back end code developed for an already existing example E-Commerce database. Code repository can be found [here](https://github.com/Swagnarok630/E-Commerce_Back_End).

## Table of Contents

* [Criteria](#criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Notes](#notes)
* [License](#license)

## <a name="criteria"></a>Criteria

* We want a functional Express.js API
* API interacts with Sequelize and MySQL database
   * Schema and seeds provided
* App will sync database with the following models:
   * Categories
   * Products
   * Tags
   * Product Tags
* API will have proper GET all and GET by ID routes for:
   * Categories
   * Products
   * Tags
* API will have proper POST, PUT, and DELETE routes for:
   * Categories
   * Products
   * Tags

![App in action](ecommercedefault.gif)

## <a name="installation"></a>Installation Instructions

- Perform an npm install to get all dependencies.
- Run MySQL shell and create database from provided schema. Quit from MySQL shell.
- Seed database with "npm run seed" command.
- Run server with "npm run start" command.

## <a name="usage"></a>Usage

Once database is created, seeded, and the server is running, we can use Insomnia to view all API routes and ensure correct usage. 

Video showing full use of the application can be found [here](https://youtu.be/XZSih25a-0U)

## <a name="contributing"></a>Contributing

Anyone is welcome to contribute to this project as they see fit, as there can be many more improvements made. Look for my contacts in the upcoming Questions section.

## <a name="tests"></a>Tests

No test cases needed.

## <a name="questions"></a>Questions

If there are any questions or concerns regarding the app, you may contact me through the following:
* Github - <https://github.com/Swagnarok630>
* E-mail - swagnarok.630@gmail.com

## <a name="notes"></a>Notes

### Future Features
* Can probably add validation checks
* Improve update routes to allow more fields to be updated (without erroring)
* Connect some front end

## <a name="license"></a>License

Copyright (c) Darryl Le. All rights reserved.  
Licensed under [MIT](https://opensource.org/licenses/MIT) license(s).
