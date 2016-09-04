File Structure:-

1. app folder contains the UI behaviour/framework (angular) related files.
2. assets folder contains the UI look and feel (HTML,CSS,JS) related files.
3. node_modules contains all the dependencies required for the project. I have loaded all the deps for testing purpose you can make do with deps in package.json
4. package.json contains all the dependencies list for the project.
5. server.js contains the backend-app server information.




ReadMe (Deployment Instructions):-

1. clone the contents of the BC_App from github by running command "git clone https://github.com/DTandP/BlockChains_Web_App.git"

		Details:-
		URL:-https://github.com/DTandP/BlockChains_Web_App.git
		Username:-DTandP
		Password:-q1w2e3r4t5y6
2. open cmd, browse to project root directory and run "npm install" //It will install all the required dependencies.
3. Run command "npm install -g nodemon"  //Used for running server files in non-stop mode.
4. Run command "npm install -g http-server" //Used for hosting web app.
5. open cmd, browse to project root directory and run "nodemon server.js" //It will run the backend server at port 4080
6. go one directory back using cd.. and run http-server "BlockChains_Web_Application" //Will host our app on server
7. Access url given by http-server and access the HTML file you require in our case access URL:-
   URL:-http://<URL given by http server>:8080/assets/CreatePoll.html#/	