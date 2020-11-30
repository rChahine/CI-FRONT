# CI-FRONT

## How to run this application

- Clone this repository
- install dependencies : ``` npm install ```
- run projet with yarn or npm : ``` yarn start ``` or ``` npm run start ```

## How this application work

Every minutes, the application will fetch data from each servers mentionned in "servers" variable in ```src\service\requests.js``` line 3.

Each servers must be started from back-end java application

If you want to fetch users or chatrooms, you must run the client side of java application and log in, then you can create new chatrooms

## How to run test suite

Test suite is written in javascript with @testing-library/react, jest and msw packages in ```__test__``` directory.

To run test suite, run : 

-  ``` yarn test ``` or ``` npm run test ```
