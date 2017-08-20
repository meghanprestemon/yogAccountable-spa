# YogAccountable

This is the frontend of a larger project created to help motivate users to start doing yoga and continue practicing consistently. The frontend of YogAccountable provides users with the ability to view an inspirational quote, locate a yoga studio, find a yoga video, and register or login to their account.

## Getting Started

The following instructions will help you create a copy of the project to run on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Docker installed. If you need to install it you can get started [here](https://www.docker.com/community-edition).

### Installing

1. Fork and clone this repository
2. `touch .env` and populate `.env` file with:
    ```
    JWT_KEY=xxxxxx
    ```
    You can find more information about jwt signatures [here](https://jwt.io/introduction/) or you can use the following command to generate a `JWT_KEY`: `node -e "require('crypto').randomBytes(48, function(ex, buf) {console.log(buf.toString('hex'))});"`
3. Choose the environment you'd like to run:
    * **NODE_ENV=test** The test environment uses a test database that gets cleared and re-populated each time it is run. This environment automatically runs all tests when the container starts running. When the tests are complete, the container stops running.
    * **NODE_ENV=dev** The dev environment uses a separate dev database that allows data to be persisted over new container runtimes. This environment runs the `nodemon` command which keeps the container running and listening for updates to the codebase.
4. Run the command `NODE_ENV=<env> docker-compose up`

## Running the tests

To run the tests use the command `NODE_ENV=test docker-compose up`. You should see the following results:

![picture alt](https://user-images.githubusercontent.com/24230076/29489862-56ca11bc-84df-11e7-9873-3343fd99e47a.png "test results in terminal")

## Deployment

This will be added later

## Built With

* [Docker](https://docs.docker.com/) - environment containerization
* [Express](https://expressjs.com/) - Node.js framework
* [PostgreSQL](https://www.postgresql.org/) - relational database management system (DBMS)
* [Knex.js](http://knexjs.org/) - SQL query builder (used in conjunction with PostgreSQL)
* [Mocha](https://mochajs.org/) - test framework
* [Chai](http://chaijs.com/) - assertion library for testing
* [ESLint](https://eslint.org/docs/rules/) - Javascript linting utility

## Author

* [**Meghan Prestemon**](https://github.com/meghanprestemon)

## License

This project is licensed under the MIT License
