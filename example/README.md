## Example project using jade-amd

This should show you how to use the code. It is assumed that:

  * when developing you want the templates to be served directly from the app
  * you will use the same template on the server and the browser
  * you use RequireJS and the js templates live in `public/js/templates`
  * you have a build process before production (and testing)
  * your minified public assets go in the `public-minified` directory and are served from there when not developing.

Look in `app.js` to see how the middle ware can be configured.

Look in the `Makefile` to see how the commands can be used to prepare the templates and then to combine them into a single file for production.


## Guided Tour

These steps will show you how the whole thing hangs together.

Install and then explore the `jade-apm` package:

    npm install jade-apm
    npm explore jade-apm

You should now be in the `jade-apm` directory. Make sure all the deps are installed and then go to the examples directory:
 
    jade-apm $ npm install .
    jade-apm $ cd example

Start the server in development mode:

    jade-apm $ node app.js

Now with a browser like Chrome go to http://localhost:3000/ to connect to the app. The page will show you lots of example content. Use the developer mode to look at the assets being requested, or look at the output of the server script.

Now edit the sample template in `views/sample.jade` - note how the changes take effect when you reload the page.

Stop the server (Ctrl-C) and run the build process:

    make

This will create the `jadeRuntime.js` file, compile and wrap all the templates and then use `r.js` to package it all up and minify it.

Run the server again in !development mode:

    NODE_ENV=testing node app.js

Go to http://localhost:3000/ again. You'll probably need to refresh the page. Note now that only `main.js` is being fetched. All the other js and templates have been merged into it. Note that changing the template on disk has no effect.

This concludes our guided tour. Please let me know if it could be clearer.


## Note

In this project the minified source is put in `public-minified` which I think is good practice but is not recommended by others. I like to commit all the assets (generated and raw) to the repo. It is also useful as it means you can run your selenium tests against what the production system will be. For this example app it is especially useful as it means you can see all the output on GitHub without having to run the build process.

You may choose to do it differently :)
