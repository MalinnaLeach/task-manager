# Manage your busy life

Introduction
-------
As a team of 4 we wanted to challenge ourselves, and build a task-manager app in a week, using React, Jest, Node.js, Express and Sequelize.  None of which any of us had used before.  Though the app is still a work in progress, I'm very proud of what we achieved in such a short space of time. Next steps will be to refactor, add extra features such as filtering by tag and improve both test coverage and the look of the app.

Currently deployed via this link
----
https://do-life.herokuapp.com/index.html


Instructions
----
Note: You will need a postgres database named "task_development" set up to run this from your machine.

Download and run the app:
```
$ git clone git@github.com:malinnaleach/task-manager.git
$ cd task-manager
$ cd server
$ npm start
```

Navigate to localhost:3000 to see the app in action and add some tasks!


To run the Jest testing suite:
```
$ cd client
$ npm test
```

To update the server with any changes to the Client codebase:
```
$ .\run
```
This will run our custom build script to compile the React app and transfer the static assets to our server. 


![Screenshot](https://www.dropbox.com/s/c2btovu2fk3407w/Screen%20Shot%202016-11-30%20at%2021.48.26.png?raw=1)
