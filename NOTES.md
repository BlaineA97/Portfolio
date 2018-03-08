# Blaine Anderson
## Software/Web/App Developer

### Creating a ReactJS App:

#### Step 1: create-react-app
  * In your terminal use `create-react-app example-app-name`.
  * Enter the directory `cd example-app-name`.
  * Make sure you initialize the repository:
  ~~~
  git init
  ~~~
  * Create the repo in Github and copy the link provided there to connect this repo with it:
  ~~~
  git remote add origin your-url-here
  ~~~
  * Lastly, make sure you add, commit and push your boilerplate:
  ~~~
  git add .
  git commit -m "Inital commit, boilerplate"
  git push origin master
  ~~~

#### Step 2: Adding React-Routes
  * We will now be adding React Routes to our App to create a seamless SPA (Single Page App).
  * I use *yarn* instead of *npm*, so all examples will be in *yarn* only:
  ~~~
  yarn add react-router-dom
  ~~~
  * Now we are going to alter the text to include our routing options:
  * Open both "Index.js" & "App.js" in Atom or another text editor.
  * In "Index.js" replace line 4 with:
  ~~~
  import Routing from './Routing';
  ~~~
  * And replace line 7 with:
  ~~~
  ReactDOM.render(<Routing />, document.getElementById('root'));
  ~~~
