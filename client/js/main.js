//Call the include Common configuration function to define the configuration for reqire js
includeCommonConfig();

console.log("Hello world require js");

//This acts a entry point for all the files..

/**
 * Require all the dependecies that needs to intialized and initalize all the dependencies
 * to produce the UI
 */
require(["/js/view/LoginView.js"],function(loginView){

});

