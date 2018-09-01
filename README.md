# Graph SQL Server Example

This is a short example to help setup a GraphQL server on Node  
using Express and connect to the database using Mongoose.

> Refer `package.json`'s ***dependencies*** and ***devDependencies***  
to see the npm packages and versions used.

```shell
npm install
```

### Important Files and Folders

|File/Folder|Description|
|-----------|-----------|
|**index.html**| The main HTML file|
|**server.js**| GraphQL Express Server|
|**graphql**| Folder related to graphQL Schema.|
|**mongoose**| Folder related to Mongoose(mongodb) *Schema* and *Model*|

### Pre-requisites for this example to work.

This example uses mlab. 

* In the mongoose/db.js change this placeholder `mongodb://<dbuser>:<dbpassword>@ds211289.mlab.com:11289`  
* with your mlab uri.

### Starting the GraphQL server

* start the server using the command:

```shell
npm start
```

### Testing the server

* In this example we have a mongodb collection which has the below schema:
```
    itemId: Number,
    item: String,
    completed: Boolean
```

* Once the server is up, go to browser and run http://localhost:3000/.

