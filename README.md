# angular-1-webpack-boilerplate
Documentation on how exactly to incorporate <a href="https://webpack.github.io/">Webpack</a> into your project can be pretty confusing for a jr. developer (such as myself) so i decided to publish a repo with the config I created for a recent project.

*This configuration also utilizes <a href="https://github.com/sass/node-sass-middleware"> node-sass-middleware </a> in order to preprocess .SCSS (SASS) files on page refresh!

<ol>
  <li>
    clone the repo: <pre> git clone https://github.com/comountainclimber/angular-1-webpack-boilerplate.git </pre> 
  </li>
  <li>
    cd into directory: <pre> cd angular-1-webpack-boilerplate </pre>
  </li>
  <li>
    install dependencies: <pre> npm install </pre>
  </li>
  <li>
    start the local web server: <pre> node app.js </pre>
  </li>
  <li>
    <ul>
    <li>to start the development server (and to enable live reload) run <pre> npm run dev </pre>
    This command will also automatically bundle whenever a change to any of the required files is saved!<br><br></li>
    
    
    <li>to bundle for production run <pre> npm run deploy </pre> This will bundle into a local file - bundle.min.js</li>
    </ul>
  </li>
</ol>
