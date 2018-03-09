# Developer Notes & Examples:

### Creating a ReactJS App:

#### Step 1: create-react-app
  * [create-react-app github](https://github.com/facebook/create-react-app)
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
  * [react-router github](https://github.com/ReactTraining/react-router)
  * We will be using `react-router-dom` for reference.
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

  * Now we will created **`Routing.js`** in the **`src`** folder and add this to it:
  ~~~
  import React, { Component } from 'react';
  import { BrowserRouter, Route } from 'react-router-dom'
  import App from './App';

  class Routing extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={App} />
          </div>
        </BrowserRouter>
      );
    }
  }

  export default Routing;
  ~~~
  * The important bits here are `<BrowserRouter>` & `<Route exact path="/" component={App} />`.
    * We tell React that we are using Routes by encompassing our Routing section in `<BrowserRouter>`
    * We tell React the exact url and component we want to use using: `<Route exact path="/" component={App} />`.
    * Provided we have components called *"ComponentA"*, *"ComponentB"*, & *"ComponentC"* we can connect those using the following example:
    ~~~
    import React, { Component } from 'react';
    import { BrowserRouter, Route } from 'react-router-dom'
    import App from './App';
    import ComponentA from './ComponentA';
    import ComponentB from './ComponentB';
    import ComponentC from './ComponentC';

    class Routing extends Component {
      render() {
        return (
          <BrowserRouter>
            <div>
              <Route exact path="/" component={App} />
              <Route exact path="/PageOne" component={ComponentA} />
              <Route exact path="/AnyPathTwo" component={ComponentB} />
              <Route exact path="/YouSeeWhatIMean" component={ComponentC} />
            </div>
          </BrowserRouter>
        );
      }
    }

    export default Routing;
    ~~~
    * As it implies, if we were to visit "http://localhost:3000/YouSeeWhatIMean" we would load *"ComponentC"*.

  * Lastly, while you likely won't need it right away, your are able to implement links to other components.
  * It will go to the URL associated with the link as well as load the component.
  ~~~
  <Link to="/"><p>Home Page</p></Link>
  ~~~
  * This example would bring you to the root directory, which in our example above would be *"App.js"*.

#### Step 3: File Structure (Opinionated)
  > As a warning, there is no "perfect" way to set up your file structure & the following step is entirely my opinion on the matter.
  There are some conventions, but it comes down to how you enjoy sorting files as well as future developer readability.

  * Now that we have used `create-react-app` & added our `react-routes-dom` updates to the code, we should have a file structure like this:
  ~~~
  example-app-name
    => .git
    => node_modules
    => public
    => src
    => .gitignore
    => package.json
    => README.md
    => yarn.lock
  ~~~
  
  * We are almost exclusivly interested in the `src` folder.
  * After expanding that we should see:
  ~~~
  src
    => App.css
    => App.js
    => App.test.js
    => Index.css
    => Index.js
    => logo.svg
    => registerServiceWorker.js
    => Routing.js
  ~~~



#### Step 4: Setting Up Responsive Design
