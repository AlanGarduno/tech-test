##Setup
### Environment variables
First, you need to rename `.env.example` file to `.env` in the root directory of the project and set the corresponding variables:

In order to use this project you need to install

* [Docker][1]
* [NVM][2] to control node versions, last version

Then run:

```
nvm install
npm install
```
# Development
### How to run the project
Need docker running in your machine
```
docker-compose build
docker-compose up
```
* (run migratios inside docker to create db Schema)
```` docker-compose exec app npm run migrations ````
