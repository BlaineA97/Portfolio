# Blaine Anderson
## Software/Web/App Developer

#### Creating the base for React:
###### Using create-react-app
  * In your terminal use `create-react-app example-app-name`.
  * Enter the directory `cd example-app-name`.
  * Open it with a text editor such as Atom.
  * Open both "Index.js" & "App.js".
  * Now we are altering the text to include our routing options:
  * We will alter "Index.js", replace line 4 with:
  ~~~
  import Routing from './Routing';
  ~~~
  * Also replace line 7 with:
  ~~~
  ReactDOM.render(<Routing />, document.getElementById('root'));
  ~~~
